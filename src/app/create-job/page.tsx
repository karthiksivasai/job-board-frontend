'use client';

import { Container, Paper, Title, TextInput, Select, Textarea, NumberInput, Button, Stack, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
// import { apiService, CreateJobData } from '@/services/api';

interface JobFormData {
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  jobType: string;
  experience: string;
  deadline: Date | null;
}

export default function CreateJobPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<JobFormData>({
    initialValues: {
      title: '',
      company: '',
      location: '',
      salaryMin: 50,
      salaryMax: 80,
      description: '',
      jobType: '',
      experience: '',
      deadline: null,
    },
    validate: {
      title: (value) => (value.length < 2 ? 'Job title must be at least 2 characters' : null),
      company: (value) => (value.length < 2 ? 'Company name must be at least 2 characters' : null),
      location: (value) => (!value ? 'Please select a location' : null),
      salaryMin: (value) => (value < 0 ? 'Minimum salary must be positive' : null),
      salaryMax: (value, formValues) => (value < formValues.salaryMin ? 'Maximum salary must be greater than minimum' : null),
      description: (value) => (value.length < 10 ? 'Description must be at least 10 characters' : null),
      jobType: (value) => (!value ? 'Please select a job type' : null),
      experience: (value) => (!value ? 'Please select experience level' : null),
      deadline: (value) => (!value ? 'Please select an application deadline' : null),
    },
  });

  const handleSubmit = async (formValues: JobFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with mock data
      console.log('Submitting job data:', formValues);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notifications.show({
        title: 'Success!',
        message: 'Job posted successfully (mock data)',
        color: 'green',
        icon: <IconCheck size={16} />,
      });
      
      form.reset();
    } catch (error) {
      console.error('Failed to create job:', error);
      notifications.show({
        title: 'Error',
        message: 'Failed to post job. Please try again.',
        color: 'red',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Stack gap={0}>
      <Navbar />
      <Container size="md" py="xl">
        <Paper 
          shadow="lg" 
          p="xl" 
          radius="lg"
          style={{
            border: '1px solid #e5e7eb',
            backgroundColor: 'white',
          }}
        >
          <Title 
            order={1} 
            mb="xl" 
            c="#1a1a1a"
            style={{
              fontSize: '28px',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              marginBottom: '32px',
            }}
          >
            Create New Job Posting
          </Title>
          
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <Group grow>
                <TextInput
                  label="Job Title"
                  placeholder="e.g., Full Stack Developer"
                  required
                  styles={{
                    input: {
                      borderRadius: '12px',
                      border: '2px solid #e5e7eb',
                      height: '48px',
                      fontSize: '14px',
                      fontWeight: 500,
                      '&:focus': {
                        borderColor: '#8b5cf6',
                        boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
                      },
                    },
                    label: {
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: '8px',
                    },
                  }}
                  {...form.getInputProps('title')}
                />
                <TextInput
                  label="Company Name"
                  placeholder="e.g., Amazon"
                  required
                  styles={{
                    input: {
                      borderRadius: '12px',
                      border: '2px solid #e5e7eb',
                      height: '48px',
                      fontSize: '14px',
                      fontWeight: 500,
                      '&:focus': {
                        borderColor: '#8b5cf6',
                        boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
                      },
                    },
                    label: {
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: '8px',
                    },
                  }}
                  {...form.getInputProps('company')}
                />
              </Group>

              <Group grow>
                <Select
                  label="Location"
                  placeholder="Select location"
                  required
                  data={[
                    { value: 'mumbai', label: 'Mumbai' },
                    { value: 'delhi', label: 'Delhi' },
                    { value: 'bangalore', label: 'Bangalore' },
                    { value: 'hyderabad', label: 'Hyderabad' },
                    { value: 'pune', label: 'Pune' },
                    { value: 'chennai', label: 'Chennai' },
                    { value: 'kolkata', label: 'Kolkata' },
                    { value: 'remote', label: 'Remote' },
                  ]}
                  {...form.getInputProps('location')}
                />
                <Select
                  label="Job Type"
                  placeholder="Select job type"
                  required
                  data={[
                    { value: 'full-time', label: 'Full-time' },
                    { value: 'part-time', label: 'Part-time' },
                    { value: 'contract', label: 'Contract' },
                    { value: 'internship', label: 'Internship' },
                  ]}
                  {...form.getInputProps('jobType')}
                />
              </Group>

              <Group grow>
                <Select
                  label="Experience Level"
                  placeholder="Select experience"
                  required
                  data={[
                    { value: '0-1', label: '0-1 years' },
                    { value: '1-3', label: '1-3 years' },
                    { value: '3-5', label: '3-5 years' },
                    { value: '5+', label: '5+ years' },
                  ]}
                  {...form.getInputProps('experience')}
                />
                <DateInput
                  label="Application Deadline"
                  placeholder="Select deadline"
                  required
                  {...form.getInputProps('deadline')}
                />
              </Group>

              <Group grow>
                <NumberInput
                  label="Minimum Salary (LPA)"
                  placeholder="50"
                  min={0}
                  max={1000}
                  {...form.getInputProps('salaryMin')}
                />
                <NumberInput
                  label="Maximum Salary (LPA)"
                  placeholder="80"
                  min={0}
                  max={1000}
                  {...form.getInputProps('salaryMax')}
                />
              </Group>

              <Textarea
                label="Job Description"
                placeholder="Describe the role, responsibilities, and requirements..."
                required
                minRows={4}
                {...form.getInputProps('description')}
              />

              <Group justify="flex-end" mt="xl">
                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  style={{
                    backgroundColor: '#8b5cf6',
                    borderRadius: '12px',
                    fontWeight: 600,
                    padding: '12px 32px',
                    height: '48px',
                    fontSize: '14px',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#7c3aed';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(139, 92, 246, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#8b5cf6';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
                    }
                  }}
                >
                  {isSubmitting ? 'Posting Job...' : 'Post Job'}
                </Button>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Stack>
  );
}
