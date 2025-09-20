# SearchFilters Component Usage Example

## Complete Implementation

### 1. SearchFilters Component (`components/SearchFilters.tsx`)

The component is already implemented with the following features:

- **Pixel-perfect Figma design** with rounded white container and shadow
- **Vertical separators** between filter sections
- **Black icons** for search, location, and job type
- **Responsive design** that stacks vertically on mobile
- **Salary range slider** with ₹50k-₹80k range and 5k steps
- **Clean placeholder text** with proper styling

### 2. Integration in Next.js Page (`app/page.tsx`)

```tsx
'use client';

import { Container, Grid, Title, Stack, LoadingOverlay, Box, Text } from '@mantine/core';
import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import SearchFilters from '@/components/SearchFilters';
import JobCard from '@/components/JobCard';
import { apiService, Job, JobQuery } from '@/services/api';

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 80]);

  // Filter handlers
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    // Add debouncing logic here if needed
  };

  const handleLocationChange = (value: string | null) => {
    setSelectedLocation(value);
  };

  const handleJobTypeChange = (value: string | null) => {
    setSelectedJobType(value);
  };

  const handleSalaryChange = (value: [number, number]) => {
    setSalaryRange(value);
  };

  return (
    <Stack gap={0}>
      <Navbar />
      <SearchFilters
        onSearchChange={handleSearchChange}
        onLocationChange={handleLocationChange}
        onJobTypeChange={handleJobTypeChange}
        onSalaryChange={handleSalaryChange}
      />
      <Container size="xl" py="xl">
        <Title order={1} mb="xl">
          Available Jobs ({jobs.length})
        </Title>
        
        <Grid gutter="xl">
          {jobs.map((job) => (
            <Grid.Col key={job.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <JobCard {...job} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
```

### 3. Key Features

#### Design Features:
- ✅ **Rounded white container** with subtle shadow
- ✅ **Vertical separators** between filter sections
- ✅ **Black icons** (search, location, job type)
- ✅ **Subtle gray placeholder text**
- ✅ **Salary range display** (₹50k - ₹80k)
- ✅ **Pixel-perfect spacing** matching Figma

#### Responsive Features:
- ✅ **Desktop**: Horizontal layout with vertical separators
- ✅ **Mobile**: Vertical stack with hidden separators
- ✅ **Flexible widths** with proper min/max constraints

#### Filter Options:
- ✅ **Search**: "Search By Job Title, Role"
- ✅ **Location**: "Preferred Location" with Indian cities
- ✅ **Job Type**: "Job type" with Full-time, Part-time, Contract, Internship
- ✅ **Salary**: Range slider from ₹50k to ₹80k with 5k steps

### 4. Props Interface

```tsx
interface SearchFiltersProps {
  onSearchChange?: (value: string) => void;
  onLocationChange?: (value: string | null) => void;
  onJobTypeChange?: (value: string | null) => void;
  onSalaryChange?: (value: [number, number]) => void;
}
```

### 5. Styling Details

- **Container**: White background, 16px border radius, subtle shadow
- **Inputs**: Transparent background, no borders, clean focus states
- **Icons**: 18px size, #374151 color
- **Typography**: 14px font size, proper font weights
- **Spacing**: Consistent padding and margins
- **Colors**: Mantine color palette with custom overrides

The component is fully functional and ready to use in your Next.js application!
