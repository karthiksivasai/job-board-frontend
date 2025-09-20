'use client';

import { Modal, TextInput, Select, NumberInput, Textarea, Button, Group, Stack, Text, Box } from '@mantine/core';
import { IconCalendar, IconChevronDown, IconChevronDown as IconArrowDown, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';

interface CreateJobModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function CreateJobModal({ opened, onClose }: CreateJobModalProps) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salaryMin: 0,
    salaryMax: 0,
    deadline: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job data:', formData);
    // Here you would typically send the data to your API
    onClose();
  };

  return (
    <>
      <style jsx global>{`
        .filled-input {
          border-color: #000000 !important;
        }
      `}</style>
      <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="lg"
      styles={{
        content: {
          width: '848px',
          height: '700px',
          borderRadius: '16px',
          padding: '32px',
          position: 'absolute',
          top: '117px',
          left: '296px',
          opacity: 1,
        },
        header: {
          display: 'none',
        },
        body: {
          padding: 0,
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="lg">
          {/* Centered Title */}
          <Box
            style={{
              textAlign: 'center',
              marginBottom: '20px',
              paddingBottom: '20px',
            }}
          >
            <Text
              size="xl"
              fw={700}
              c="#1a1a1a"
              style={{
                fontSize: '24px',
                fontFamily: 'Satoshi Variable, sans-serif',
              }}
            >
              Create Job Opening
            </Text>
          </Box>
          {/* Job Title and Company Name Row */}
          <Group grow>
            <TextInput
              label="Job Title"
              placeholder="Full Stack Developer"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              required
              classNames={{
                input: formData.jobTitle ? 'filled-input' : ''
              }}
              styles={{
                label: {
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                },
                input: {
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                  '&:focus': {
                    borderColor: '#000000',
                    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)',
                  },
                  '&:not(:placeholder-shown)': {
                    borderColor: '#000000',
                  },
                },
              }}
            />

            <TextInput
              label="Company Name"
              placeholder="Amazon, Microsoft, Swiggy"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
              classNames={{
                input: formData.companyName ? 'filled-input' : ''
              }}
              styles={{
                label: {
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                },
                input: {
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                  '&:focus': {
                    borderColor: '#000000',
                    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)',
                  },
                  '&:not(:placeholder-shown)': {
                    borderColor: '#000000',
                  },
                },
              }}
            />
          </Group>

          {/* Location and Job Type Row */}
          <Group grow>
            <Select
              label="Location"
              placeholder="Choose Preferred Location"
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
              value={formData.location}
              onChange={(value) => setFormData({ ...formData, location: value || '' })}
              rightSection={<IconChevronDown size={16} color="#6b7280" />}
              required
              classNames={{
                input: formData.location ? 'filled-input' : ''
              }}
              styles={{
                label: {
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                },
                input: {
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                  '&:focus': {
                    borderColor: '#000000',
                    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)',
                  },
                  '&:not(:placeholder-shown)': {
                    borderColor: '#000000',
                  },
                },
              }}
            />

            <Select
              label="Job Type"
              placeholder="Choose Job Type"
              data={[
                { value: 'full-time', label: 'Full Time' },
                { value: 'part-time', label: 'Part Time' },
                { value: 'contract', label: 'Contract' },
                { value: 'internship', label: 'Internship' },
              ]}
              value={formData.jobType}
              onChange={(value) => setFormData({ ...formData, jobType: value || '' })}
              rightSection={<IconChevronDown size={16} color="#6b7280" />}
              required
              classNames={{
                input: formData.jobType ? 'filled-input' : ''
              }}
              styles={{
                label: {
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                },
                input: {
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                  '&:focus': {
                    borderColor: '#000000',
                    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)',
                  },
                  '&:not(:placeholder-shown)': {
                    borderColor: '#000000',
                  },
                },
              }}
            />
          </Group>

          {/* Salary Range and Application Deadline Row */}
          <Group grow align="flex-end">
            <Box>
              <Text
                size="sm"
                fw={600}
                c="#374151"
                style={{
                  fontSize: '14px',
                  marginBottom: '8px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                }}
              >
                Salary Range
              </Text>
              <Group grow>
                <NumberInput
                  placeholder="↑↓ ₹0"
                  value={formData.salaryMin || ''}
                  onChange={(value) => setFormData({ ...formData, salaryMin: Number(value) || 0 })}
                  min={0}
                  classNames={{
                    input: formData.salaryMin ? 'filled-input' : ''
                  }}
                  styles={{
                    input: {
                      height: '48px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px',
                      fontFamily: 'Satoshi Variable, sans-serif',
                      '&:focus': {
                        borderColor: '#000000',
                        boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)',
                      },
                      '&:not(:placeholder-shown), &[data-filled="true"], &[value]:not([value=""]), &.filled-input': {
                        borderColor: '#000000',
                      },
                    },
                  }}
                />
                <NumberInput
                  placeholder="↑↓ ₹12,00,000"
                  value={formData.salaryMax || ''}
                  onChange={(value) => setFormData({ ...formData, salaryMax: Number(value) || 0 })}
                  min={0}
                  classNames={{
                    input: formData.salaryMax ? 'filled-input' : ''
                  }}
                  styles={{
                    input: {
                      height: '48px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px',
                      fontFamily: 'Satoshi Variable, sans-serif',
                      '&:focus': {
                        borderColor: '#000000',
                        boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)',
                      },
                      '&:not(:placeholder-shown), &[data-filled="true"], &[value]:not([value=""]), &.filled-input': {
                        borderColor: '#000000',
                      },
                    },
                  }}
                />
              </Group>
            </Box>

            <TextInput
              label="Application Deadline"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              type="date"
              required
              classNames={{
                input: formData.deadline ? 'filled-input' : ''
              }}
              styles={{
                label: {
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                },
                input: {
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable, sans-serif',
                  '&:focus': {
                    borderColor: '#000000',
                    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)',
                  },
                  '&:not(:placeholder-shown)': {
                    borderColor: '#000000',
                  },
                },
              }}
            />
          </Group>

          {/* Job Description */}
          <Textarea
            label="Job Description"
            placeholder="Please share a description to let the candidate know more about the job role."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            minRows={4}
            autosize
            required
            classNames={{
              input: formData.description ? 'filled-input' : ''
            }}
            styles={{
              label: {
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '8px',
                fontFamily: 'Satoshi Variable, sans-serif',
              },
              input: {
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '14px',
                fontFamily: 'Satoshi Variable, sans-serif',
                resize: 'vertical',
                '&:focus': {
                  borderColor: '#8b5cf6',
                  boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
                },
              },
            }}
          />

          {/* Action Buttons */}
          <Group justify="space-between" mt="xl">
            <Button
              variant="outline"
              size="lg"
              rightSection={
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px', lineHeight: '0.3' }}>
                  <IconArrowDown size={14} style={{ marginBottom: '-8px' }} />
                  <IconArrowDown size={14} />
                </Box>
              }
              style={{
                height: '48px',
                borderRadius: '8px',
                border: '1px solid #000000',
                color: '#000000',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'Satoshi Variable, sans-serif',
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onClick={onClose}
            >
              Save Draft
            </Button>
            <Button
              type="submit"
              size="lg"
              rightSection={
                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0px' }}>
                  <IconChevronRight size={14} />
                  <IconChevronRight size={14} style={{ marginLeft: '-8px' }} />
                </Box>
              }
              style={{
                height: '48px',
                borderRadius: '8px',
                backgroundColor: '#00AAFF',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'Satoshi Variable, sans-serif',
              }}
            >
              Publish
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
    </>
  );
}
