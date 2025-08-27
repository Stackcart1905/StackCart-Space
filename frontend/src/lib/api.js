// API configuration for StackCart
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// API endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    CHECK_AUTH: '/auth/checkAuth'
  },
  
  // Portfolio
  PORTFOLIO: {
    GET_ALL: '/portfolio',
    CREATE: '/portfolio',
    UPDATE: (id) => `/portfolio/${id}`,
    DELETE: (id) => `/portfolio/${id}`
  },
  
  // Services
  SERVICES: {
    GET_ALL: '/services',
    CREATE: '/services',
    UPDATE: (id) => `/services/${id}`,
    DELETE: (id) => `/services/${id}`
  },
  
  // Testimonials
  TESTIMONIALS: {
    GET_ALL: '/testimonials',
    CREATE: '/testimonials',
    UPDATE: (id) => `/testimonials/${id}`,
    DELETE: (id) => `/testimonials/${id}`
  },
  
  // Blog
  BLOG: {
    GET_ALL: '/blog',
    GET_BY_ID: (id) => `/blog/${id}`,
    CREATE: '/blog',
    UPDATE: (id) => `/blog/${id}`,
    DELETE: (id) => `/blog/${id}`
  },
  
  // Contact
  CONTACT: {
    SEND_MESSAGE: '/contact'
  }
};

// HTTP request helper functions
const apiRequest = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      // Add auth token if available
      ...(localStorage.getItem('authToken') && {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }),
      ...options.headers
    }
  };

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...defaultOptions,
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// API methods
export const api = {
  // GET request
  get: (url, options = {}) => apiRequest(url, { method: 'GET', ...options }),
  
  // POST request
  post: (url, data, options = {}) => apiRequest(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options
  }),
  
  // PUT request
  put: (url, data, options = {}) => apiRequest(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options
  }),
  
  // PATCH request
  patch: (url, data, options = {}) => apiRequest(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    ...options
  }),
  
  // DELETE request
  delete: (url, options = {}) => apiRequest(url, { method: 'DELETE', ...options }),
  
  // Upload file (multipart/form-data)
  upload: (url, formData, options = {}) => {
    const headers = { ...options.headers };
    delete headers['Content-Type']; // Let browser set it for multipart
    
    return apiRequest(url, {
      method: 'POST',
      body: formData,
      headers,
      ...options
    });
  }
};

// Specific API functions for common operations
export const authAPI = {
  login: (credentials) => api.post(API_ENDPOINTS.AUTH.LOGIN, credentials),
  signup: (userData) => api.post(API_ENDPOINTS.AUTH.SIGNUP, userData),
  logout: () => api.post(API_ENDPOINTS.AUTH.LOGOUT),
  checkAuth: () => api.get(API_ENDPOINTS.AUTH.CHECK_AUTH)
};

export const portfolioAPI = {
  getAll: () => api.get(API_ENDPOINTS.PORTFOLIO.GET_ALL),
  create: (portfolioData) => api.post(API_ENDPOINTS.PORTFOLIO.CREATE, portfolioData),
  update: (id, portfolioData) => api.patch(API_ENDPOINTS.PORTFOLIO.UPDATE(id), portfolioData),
  delete: (id) => api.delete(API_ENDPOINTS.PORTFOLIO.DELETE(id))
};

export const servicesAPI = {
  getAll: () => api.get(API_ENDPOINTS.SERVICES.GET_ALL),
  create: (serviceData) => api.post(API_ENDPOINTS.SERVICES.CREATE, serviceData),
  update: (id, serviceData) => api.patch(API_ENDPOINTS.SERVICES.UPDATE(id), serviceData),
  delete: (id) => api.delete(API_ENDPOINTS.SERVICES.DELETE(id))
};

export const testimonialsAPI = {
  getAll: () => api.get(API_ENDPOINTS.TESTIMONIALS.GET_ALL),
  create: (testimonialData) => api.post(API_ENDPOINTS.TESTIMONIALS.CREATE, testimonialData),
  update: (id, testimonialData) => api.patch(API_ENDPOINTS.TESTIMONIALS.UPDATE(id), testimonialData),
  delete: (id) => api.delete(API_ENDPOINTS.TESTIMONIALS.DELETE(id))
};

export const blogAPI = {
  getAll: () => api.get(API_ENDPOINTS.BLOG.GET_ALL),
  getById: (id) => api.get(API_ENDPOINTS.BLOG.GET_BY_ID(id)),
  create: (blogData) => api.post(API_ENDPOINTS.BLOG.CREATE, blogData),
  update: (id, blogData) => api.patch(API_ENDPOINTS.BLOG.UPDATE(id), blogData),
  delete: (id) => api.delete(API_ENDPOINTS.BLOG.DELETE(id))
};

export const contactAPI = {
  sendMessage: (messageData) => api.post(API_ENDPOINTS.CONTACT.SEND_MESSAGE, messageData)
};

// Error handling helper
export const handleAPIError = (error) => {
  if (error.message.includes('401')) {
    // Unauthorized - redirect to login
    localStorage.removeItem('authToken');
    window.location.hash = 'login';
  } else if (error.message.includes('403')) {
    // Forbidden
    console.error('Access denied');
  } else if (error.message.includes('404')) {
    // Not found
    console.error('Resource not found');
  } else if (error.message.includes('500')) {
    // Server error
    console.error('Server error');
  }
  
  return error;
};

export default api;
