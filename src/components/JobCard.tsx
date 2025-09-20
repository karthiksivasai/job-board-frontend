'use client';

import { Card, Text, Group, Badge, Button, Box, Stack } from '@mantine/core';
import { IconUser, IconBuilding, IconCurrencyRupee } from '@tabler/icons-react';
import Image from 'next/image';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  logo: string;
  logoType?: 'text' | 'image';
  experience: string;
  workType: string;
  salary: string;
  description: string[];
  postedTime: string;
  onApply: (jobId: string) => void;
}

export default function JobCard({
  id,
  title,
  company,
  logo,
  logoType = 'text',
  experience,
  workType,
  salary,
  description,
  postedTime,
  onApply,
}: JobCardProps) {
  return (
    <Card
      shadow="sm"
      padding={0}
      radius="12px"
      withBorder={false}
      style={{
        width: '316px',
        height: '360px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        backgroundColor: 'white',
        boxShadow: '0px 0px 14px 0px rgba(211, 211, 211, 0.15)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0px 0px 20px 0px rgba(211, 211, 211, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0px 0px 14px 0px rgba(211, 211, 211, 0.15)';
      }}
    >
      {/* Company Logo Section */}
      <Box
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          width: '83.46px',
          height: '82px',
          background: 'linear-gradient(180deg, rgba(254, 254, 253, 1) 0%, rgba(241, 241, 241, 1) 100%)',
          borderRadius: '13.18px',
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 10.25px 0px rgba(148, 148, 148, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#1f2937',
          overflow: 'hidden',
        }}
      >
        {logoType === 'image' ? (
          <Image
            src={logo}
            alt={`${company} logo`}
            width={65.89}
            height={65.89}
            style={{
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        ) : (
          logo
        )}
      </Box>

      {/* Time Badge */}
      <Box
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          backgroundColor: '#B0D9FF',
          borderRadius: '10px',
          padding: '7px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          size="sm"
          fw={500}
          c="#000000"
          style={{
            fontSize: '14px',
            lineHeight: '1.35',
            fontFamily: 'Satoshi Variable, sans-serif',
          }}
        >
          {postedTime}
        </Text>
      </Box>

      {/* Job Title */}
      <Box
        style={{
          position: 'absolute',
          top: '117px',
          left: '16px',
          width: '284px',
          height: '27px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text
          fw={700}
          c="#000000"
          style={{
            fontSize: '20px',
            lineHeight: '1.35',
            fontFamily: 'Satoshi Variable, sans-serif',
            textAlign: 'left',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Text>
      </Box>

      {/* Job Details Section */}
      <Box
        style={{
          position: 'absolute',
          top: '160px',
          left: '16px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        {/* Experience */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '0.9px' }}>
            <IconUser size={17.1} color="#5A5A5A" strokeWidth={1.6} />
          </Box>
          <Text
            size="sm"
            fw={500}
            c="#5A5A5A"
            style={{
              fontSize: '16px',
              lineHeight: '1.35',
              fontFamily: 'Satoshi Variable, sans-serif',
            }}
          >
            {experience}
          </Text>
        </Box>

        {/* Work Type */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8.64px', padding: '0.86px' }}>
            <IconBuilding size={17.27} color="#5A5A5A" strokeWidth={1.6} />
          </Box>
          <Text
            size="sm"
            fw={500}
            c="#5A5A5A"
            style={{
              fontSize: '16px',
              lineHeight: '1.35',
              fontFamily: 'Satoshi Variable, sans-serif',
            }}
          >
            {workType}
          </Text>
        </Box>

        {/* Salary */}
        <Box style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
          <Box style={{ display: 'flex', gap: '9.09px', padding: '0.91px' }}>
            <IconCurrencyRupee size={16.36} color="#5A5A5A" strokeWidth={1.6} />
          </Box>
          <Text
            size="sm"
            fw={500}
            c="#5A5A5A"
            style={{
              fontSize: '16px',
              lineHeight: '1.35',
              fontFamily: 'Satoshi Variable, sans-serif',
            }}
          >
            {salary}
          </Text>
        </Box>
      </Box>

      {/* Description */}
      <Box
        style={{
          position: 'absolute',
          top: '202px',
          left: '9px',
          width: '300px',
          height: '76px',
        }}
      >
        <Text
          size="sm"
          fw={500}
          c="#555555"
          style={{
            fontSize: '14px',
            lineHeight: '1.35',
            fontFamily: 'Satoshi Variable, sans-serif',
            textAlign: 'left',
          }}
        >
          {description.join(' ')}
        </Text>
      </Box>

      {/* Apply Button */}
      <Button
        fullWidth
        size="lg"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          width: '284px',
          height: '46px',
          backgroundColor: '#00AAFF',
          borderRadius: '10px',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '1.35',
          fontFamily: 'Satoshi Variable, sans-serif',
          color: 'white',
          border: '1px solid #00AAFF',
          boxShadow: '0px 0px 14px 0px rgba(93, 93, 93, 0.15)',
          transition: 'all 0.2s ease',
        }}
        onClick={() => onApply(id)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0099E6';
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0px 0px 18px 0px rgba(93, 93, 93, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#00AAFF';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0px 0px 14px 0px rgba(93, 93, 93, 0.15)';
        }}
      >
        Apply Now
      </Button>
    </Card>
  );
}
