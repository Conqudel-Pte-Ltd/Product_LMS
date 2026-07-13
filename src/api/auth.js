const API_BASE_URL = import.meta.env.VITE_API_URL || ''

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    let message = data.detail || data.message || 'Something went wrong. Please try again.'
    if (Array.isArray(message)) {
      message = message.map((item) => item.msg || item).join(', ')
    }
    throw new Error(typeof message === 'string' ? message : 'Request failed.')
  }

  return data
}

export function registerTrial(payload) {
  return request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function loginUser(payload) {
  return request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function getCurrentUser() {
  const token = localStorage.getItem('access_token')
  if (!token) {
    return Promise.reject(new Error('Not logged in.'))
  }

  return request('/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export function saveSession(authResponse) {
  localStorage.setItem('access_token', authResponse.access_token)
  localStorage.setItem('user', JSON.stringify(authResponse.user))
}

export function clearSession() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('user')
}
