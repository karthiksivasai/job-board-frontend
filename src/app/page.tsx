'use client';

import { Container, Grid, Stack, LoadingOverlay, Box, Text } from '@mantine/core';
import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import SearchFilters from '@/components/SearchFilters';
import JobCard from '@/components/JobCard';
import { Job, JobQuery } from '@/services/api';

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 80]);

  const fetchJobs = useCallback(async (query: JobQuery = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      // Use mock data for now
      const mockJobs: Job[] = [
        {
          id: '1',
          title: 'Full Stack Developer',
          company: 'Amazon',
          location: 'mumbai',
          salaryMin: 10,
          salaryMax: 15,
          jobType: 'full-time',
          experience: '1-3',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized experiences.',
          logo: '/amazon.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Node Js Developer',
          company: 'Tesla',
          location: 'bangalore',
          salaryMin: 10,
          salaryMax: 15,
          jobType: 'full-time',
          experience: '1-3',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized',
          logo: '/tesla1.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'UX/UI Designer',
          company: 'Swiggy',
          location: 'delhi',
          salaryMin: 10,
          salaryMax: 15,
          jobType: 'full-time',
          experience: '1-3',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized',
          logo: '/swiggy.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '4',
          title: 'React Developer',
          company: 'Google',
          location: 'hyderabad',
          salaryMin: 8,
          salaryMax: 12,
          jobType: 'full-time',
          experience: '2-4',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized',
          logo: '/amazon.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '5',
          title: 'Python Developer',
          company: 'Netflix',
          location: 'pune',
          salaryMin: 12,
          salaryMax: 18,
          jobType: 'full-time',
          experience: '3-5',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized',
          logo: '/tesla1.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '6',
          title: 'Frontend Developer',
          company: 'Microsoft',
          location: 'chennai',
          salaryMin: 9,
          salaryMax: 14,
          jobType: 'full-time',
          experience: '2-4',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized',
          logo: '/swiggy.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '7',
          title: 'DevOps Engineer',
          company: 'Uber',
          location: 'kolkata',
          salaryMin: 15,
          salaryMax: 22,
          jobType: 'full-time',
          experience: '3-5',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized',
          logo: '/amazon.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '8',
          title: 'Mobile App Developer',
          company: 'Flipkart',
          location: 'mumbai',
          salaryMin: 3,
          salaryMax: 5,
          jobType: 'internship',
          experience: '0-1',
          description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized',
          logo: '/tesla1.png',
          deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      // Apply filters to mock data
      let filteredJobs = mockJobs;

      if (query.search) {
        const searchLower = query.search.toLowerCase();
        filteredJobs = filteredJobs.filter(job =>
          job.title.toLowerCase().includes(searchLower) ||
          job.company.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower)
        );
      }

      if (query.location) {
        filteredJobs = filteredJobs.filter(job => job.location === query.location);
      }

      if (query.jobType) {
        filteredJobs = filteredJobs.filter(job => job.jobType === query.jobType);
      }

      if (query.salaryMin !== undefined) {
        filteredJobs = filteredJobs.filter(job => job.salaryMax >= (query.salaryMin || 0));
      }

      if (query.salaryMax !== undefined) {
        filteredJobs = filteredJobs.filter(job => job.salaryMin <= (query.salaryMax || 0));
      }

      setJobs(filteredJobs);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
      setError('Failed to load jobs. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Load jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Filter jobs when search criteria change
  useEffect(() => {
    const query: JobQuery = {};
    
    if (searchTerm) query.search = searchTerm;
    if (selectedLocation) query.location = selectedLocation;
    if (selectedJobType) query.jobType = selectedJobType;
    if (salaryRange[0] !== 50 || salaryRange[1] !== 80) {
      query.salaryMin = salaryRange[0];
      query.salaryMax = salaryRange[1];
    }

    fetchJobs(query);
  }, [searchTerm, selectedLocation, selectedJobType, salaryRange, fetchJobs]);

  const handleApply = (jobId: string) => {
    console.log('Applying to job:', jobId);
    // In production, this would redirect to application page or show modal
  };

  const formatJobForCard = (job: Job) => {
    // Split description and ensure we have exactly 2 bullet points
    const descriptionParts = job.description.split('. ').filter(Boolean);
    const description = descriptionParts.slice(0, 2);
    
    // If we have less than 2 parts, pad with empty strings
    while (description.length < 2) {
      description.push('');
    }
    
    // If we have more than 2 parts, join the extra parts to the second one
    if (descriptionParts.length > 2) {
      description[1] = descriptionParts.slice(1).join('. ');
    }
    
    return {
      id: job.id,
      title: job.title,
      company: job.company,
      logo: job.logo || job.company.charAt(0).toUpperCase(),
      logoType: (job.id === '1' || job.id === '2' || job.id === '3' || job.id === '4' || job.id === '5' || job.id === '6' || job.id === '7' || job.id === '8') ? 'image' as const : 'text' as const,
      experience: `${job.experience} yr Exp`,
      workType: 'Onsite', // This could be added to the Job model
      salary: `${job.salaryMax}LPA`,
      description: description,
      postedTime: '24h Ago', // This could be calculated from createdAt
    };
  };

  return (
    <Stack gap={0}>
      <Navbar />
      <SearchFilters
        onSearchChange={setSearchTerm}
        onLocationChange={setSelectedLocation}
        onJobTypeChange={setSelectedJobType}
        onSalaryChange={setSalaryRange}
      />
      <Box
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#e5e7eb',
          margin: '0',
        }}
      />
      <Box
        style={{
          width: '100%',
          backgroundColor: '#f8fafc',
          minHeight: '60vh',
        }}
      >
        <Container size="xl" py="xl" pos="relative">
        <LoadingOverlay visible={loading} />
        
        {error && (
          <Box
            style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '24px',
            }}
          >
            <Text c="#dc2626" size="sm" fw={500}>
              {error}
            </Text>
          </Box>
        )}
        
        <Grid gutter="xl">
          {jobs?.map((job) => (
            <Grid.Col key={job.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <JobCard {...formatJobForCard(job)} onApply={handleApply} />
            </Grid.Col>
          ))}
        </Grid>
        {!loading && (!jobs || jobs.length === 0) && (
          <Box
            style={{
              textAlign: 'center',
              padding: '80px 20px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Text c="#6b7280" size="xl" fw={500} mb="sm">
              No jobs found matching your criteria
            </Text>
            <Text c="#9ca3af" size="sm">
              Try adjusting your search filters or check back later
            </Text>
          </Box>
            )}
          </Container>
        </Box>
      </Stack>
    );
  }