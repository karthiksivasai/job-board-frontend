'use client';

import { Container, Group, Button, Text, Box } from '@mantine/core';
import { IconSearch, IconUser, IconBriefcase } from '@tabler/icons-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box
      style={{
        position: 'relative',
        width: '100%',
        height: '120px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          top: '21px',
          left: '275px',
          width: '890px',
          height: '80px',
          backgroundColor: 'white',
          borderRadius: '122px',
          border: '1px solid #e5e7eb',
          padding: '0 40px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          opacity: 1,
        }}
      >
        {/* Logo */}
        <Box
          style={{
            width: 44,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/logo.svg"
            alt="Logo"
            style={{
              width: '44px',
              height: '45px',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* All Navigation Links */}
        <Group gap="11.14px" align="center">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box
              style={{
                width: '102px',
                height: '48px',
                borderRadius: '12px',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f7fafc';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#1a202c';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#2d3748';
                }
              }}
            >
              <Text 
                size="sm" 
                fw={500}
                c="#2d3748" 
                style={{ 
                  fontSize: '14px',
                  letterSpacing: '0.025em',
                }}
              >
                Home
              </Text>
            </Box>
          </Link>
          <Link href="/jobs" style={{ textDecoration: 'none' }}>
            <Box
              style={{
                width: '102px',
                height: '48px',
                borderRadius: '12px',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f7fafc';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#1a202c';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#2d3748';
                }
              }}
            >
              <Text 
                size="sm" 
                fw={500}
                c="#2d3748" 
                style={{ 
                  fontSize: '14px',
                  letterSpacing: '0.025em',
                }}
              >
                Find Jobs
              </Text>
            </Box>
          </Link>
          
          <Link href="/talents" style={{ textDecoration: 'none' }}>
            <Box
              style={{
                width: '102px',
                height: '48px',
                borderRadius: '12px',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f7fafc';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#1a202c';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#2d3748';
                }
              }}
            >
              <Text 
                size="sm" 
                fw={500}
                c="#2d3748" 
                style={{ 
                  fontSize: '14px',
                  letterSpacing: '0.025em',
                }}
              >
                Find Talents
              </Text>
            </Box>
          </Link>
          
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <Box
              style={{
                width: '102px',
                height: '48px',
                borderRadius: '12px',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f7fafc';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#1a202c';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#2d3748';
                }
              }}
            >
              <Text 
                size="sm" 
                fw={500}
                c="#2d3748" 
                style={{ 
                  fontSize: '14px',
                  letterSpacing: '0.025em',
                }}
              >
                About us
              </Text>
            </Box>
          </Link>
          
          <Link href="/testimonials" style={{ textDecoration: 'none' }}>
            <Box
              style={{
                width: '102px',
                height: '48px',
                borderRadius: '12px',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f7fafc';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#1a202c';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                const textElement = e.currentTarget.querySelector('span');
                if (textElement) {
                  textElement.style.color = '#2d3748';
                }
              }}
            >
              <Text 
                size="sm" 
                fw={500}
                c="#2d3748" 
                style={{ 
                  fontSize: '14px',
                  letterSpacing: '0.025em',
                }}
              >
                Testimonials
              </Text>
            </Box>
          </Link>
        </Group>

        {/* Create Jobs Button */}
        <Link href="/create-job" style={{ textDecoration: 'none' }}>
          <Box
            style={{
              width: '140px',
              height: '38px',
              background: 'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)',
              borderRadius: '30px',
              paddingTop: '8px',
              paddingRight: '24px',
              paddingBottom: '8px',
              paddingLeft: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              opacity: 1,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(180deg, #8B1FFF 0%, #4A0080 113.79%)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Text 
              size="sm" 
              fw={600}
              c="#FFFFFF" 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.35em',
                fontFamily: 'Satoshi Variable, sans-serif',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Create Jobs
            </Text>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
