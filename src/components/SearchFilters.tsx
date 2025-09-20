'use client';

import { Container, Group, TextInput, Select, Slider, Text, Box, Divider, RangeSlider } from '@mantine/core';
import { IconSearch, IconMapPin, IconUser, IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';

interface SearchFiltersProps {
  onSearchChange?: (value: string) => void;
  onLocationChange?: (value: string | null) => void;
  onJobTypeChange?: (value: string | null) => void;
  onSalaryChange?: (value: [number, number]) => void;
}

export default function SearchFilters({
  onSearchChange = () => {},
  onLocationChange = () => {},
  onJobTypeChange = () => {},
  onSalaryChange = () => {},
}: SearchFiltersProps) {
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 65]);

  const handleSalaryChange = (value: number | number[]) => {
    const newRange = Array.isArray(value) ? value as [number, number] : [value, value];
    setSalaryRange(newRange);
    onSalaryChange(newRange);
  };

  return (
    <Box
      style={{
        backgroundColor: '#FFFFFF',
        padding: '24px 0',
        marginTop: '20px',
      }}
    >
      <Container size="xl">
        <Group 
          gap={0} 
          align="center" 
          wrap="wrap"
          justify="space-between"
          style={{ width: '100%' }}
        >
          {/* Search Input */}
          <Box style={{ flex: 1, minWidth: '280px', height: '48px' }}>
            <TextInput
              placeholder="Search By Job Title, Role"
              leftSection={<IconSearch size={18} color="#6b7280" />}
              onChange={(event) => onSearchChange(event.currentTarget.value)}
                  styles={{
                    input: {
                      border: 'none',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      height: '48px',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#374151',
                      '&:focus': {
                        borderColor: 'transparent',
                        boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
                      },
                      '&::placeholder': {
                        color: '#9ca3af',
                        fontSize: '14px',
                        fontWeight: 400,
                      },
                    },
                  }}
            />
          </Box>

          {/* Vertical Separator */}
          <Box
            style={{
              width: '1px',
              height: '32px',
              backgroundColor: '#e5e7eb',
              margin: '0 16px',
            }}
          />

          {/* Location Dropdown */}
          <Box style={{ flex: 1, minWidth: '250px' }}>
            <Select
              placeholder="Preferred Location"
              leftSection={<IconMapPin size={18} color="#6b7280" />}
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
              onChange={onLocationChange}
              rightSection={<IconChevronDown size={16} color="#6b7280" />}
              styles={{
                input: {
                  border: 'none',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  height: '48px',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#374151',
                  '&:focus': {
                    borderColor: 'transparent',
                    boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
                  },
                  '&::placeholder': {
                    color: '#9ca3af',
                    fontSize: '14px',
                    fontWeight: 400,
                  },
                },
                dropdown: {
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            />
          </Box>

          {/* Vertical Separator */}
          <Box
            style={{
              width: '1px',
              height: '32px',
              backgroundColor: '#e5e7eb',
              margin: '0 16px',
            }}
          />

          {/* Job Type Dropdown */}
          <Box style={{ flex: 1, minWidth: '220px' }}>
            <Select
              placeholder="Job type"
              leftSection={<IconUser size={18} color="#6b7280" />}
              data={[
                { value: 'full-time', label: 'Full-time' },
                { value: 'part-time', label: 'Part-time' },
                { value: 'contract', label: 'Contract' },
                { value: 'internship', label: 'Internship' },
              ]}
              onChange={onJobTypeChange}
              rightSection={<IconChevronDown size={16} color="#6b7280" />}
              styles={{
                input: {
                  border: 'none',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  height: '48px',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#374151',
                  '&:focus': {
                    borderColor: 'transparent',
                    boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
                  },
                  '&::placeholder': {
                    color: '#9ca3af',
                    fontSize: '14px',
                    fontWeight: 400,
                  },
                },
                dropdown: {
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            />
          </Box>

          {/* Vertical Separator */}
          <Box
            style={{
              width: '1px',
              height: '32px',
              backgroundColor: '#e5e7eb',
              margin: '0 16px',
            }}
          />

          {/* Salary Range Slider */}
          <Box style={{ flex: 1, minWidth: '280px' }}>
            <Group justify="space-between" mb="xs">
              <Text size="sm" fw={500} c="#374151" style={{ fontSize: '14px' }}>
                Salary Per Month
              </Text>
              <Text size="sm" fw={500} c="#222222" style={{ fontSize: '14px' }}>
                ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
              </Text>
            </Group>
            <RangeSlider
              value={salaryRange}
              onChange={handleSalaryChange}
              min={50}
              max={80}
              step={5}
              size="sm"
              styles={{
                root: {
                  position: 'relative',
                },
                thumb: {
                  border: 'none',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#000000',
                  borderRadius: '50%',
                  boxShadow: 'none',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                },
                track: {
                  backgroundColor: '#e5e7eb',
                  height: '2px',
                  borderRadius: '1px',
                  position: 'relative',
                },
                bar: {
                  backgroundColor: '#000000',
                  borderRadius: '1px',
                  height: '2px',
                },
                mark: {
                  display: 'none',
                },
              }}
            />
            <style jsx global>{`
              .mantine-Slider-thumb::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 4px;
                height: 4px;
                background-color: white;
                border-radius: 50%;
                z-index: 1;
              }
            `}</style>
          </Box>
        </Group>
      </Container>
    </Box>
  );
}
