const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  jobType: string;
  experience: string;
  description: string;
  logo?: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobQuery {
  search?: string;
  location?: string;
  jobType?: string;
  salaryMin?: number;
  salaryMax?: number;
  page?: number;
  limit?: number;
}

export interface JobsResponse {
  jobs: Job[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface CreateJobData {
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  jobType: string;
  experience: string;
  description: string;
  logo?: string;
  deadline: string;
}

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getJobs(query: JobQuery = {}): Promise<JobsResponse> {
    const searchParams = new URLSearchParams();
    
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, value.toString());
      }
    });

    const queryString = searchParams.toString();
    const endpoint = queryString ? `/jobs?${queryString}` : '/jobs';
    
    return this.request<JobsResponse>(endpoint);
  }

  async getJob(id: string): Promise<Job> {
    return this.request<Job>(`/jobs/${id}`);
  }

  async createJob(data: CreateJobData): Promise<Job> {
    return this.request<Job>('/jobs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteJob(id: string): Promise<Job> {
    return this.request<Job>(`/jobs/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();
