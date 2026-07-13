<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import AuthHeader from '../components/auth/AuthHeader.vue'
import { registerTrial, saveSession } from '../api/auth.js'

const router = useRouter()

const form = ref({
  full_name: '',
  email: '',
  company: '',
  password: '',
})

const loading = ref(false)
const error = ref('')
const success = ref('')

async function handleSubmit() {
  error.value = ''
  success.value = ''
  loading.value = true

  try {
    const response = await registerTrial({
      full_name: form.value.full_name,
      email: form.value.email,
      company: form.value.company || null,
      password: form.value.password,
    })
    saveSession(response)
    success.value = 'Your free trial account has been created!'
    setTimeout(() => router.push('/'), 1500)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <AuthHeader />
    <main class="auth-main">
      <section class="auth-card">
        <h1>Start your free trial</h1>
        <p class="subtitle">Create your account in minutes. No credit card required.</p>

        <form class="auth-form" @submit.prevent="handleSubmit">
          <label>
            Full name
            <input
              v-model="form.full_name"
              type="text"
              name="full_name"
              autocomplete="name"
              required
              placeholder="Jane Doe"
            />
          </label>

          <label>
            Work email
            <input
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              placeholder="you@company.com"
            />
          </label>

          <label>
            Company <span class="optional">(optional)</span>
            <input
              v-model="form.company"
              type="text"
              name="company"
              autocomplete="organization"
              placeholder="Your organization"
            />
          </label>

          <label>
            Password
            <input
              v-model="form.password"
              type="password"
              name="password"
              autocomplete="new-password"
              required
              minlength="8"
              placeholder="At least 8 characters"
            />
          </label>

          <p v-if="error" class="form-message error">{{ error }}</p>
          <p v-if="success" class="form-message success">{{ success }}</p>

          <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
            {{ loading ? 'Creating account...' : 'Start Free Trial' }}
          </button>
        </form>

        <p class="switch-link">
          Already have an account?
          <RouterLink to="/login">Log in</RouterLink>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff 0%, #f8faff 100%);
}

.auth-main {
  display: flex;
  justify-content: center;
  padding: 48px 24px 80px;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  padding: 32px;
}

.auth-card h1 {
  font-size: 1.75rem;
  margin-bottom: 8px;
}

.subtitle {
  margin: 0 0 28px;
  color: var(--text-muted);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.auth-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

.optional {
  font-weight: 500;
  color: var(--text-muted);
}

.auth-form input {
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  font: inherit;
  color: var(--text);
  background: #fff;
}

.auth-form input:focus {
  outline: 2px solid var(--brand-soft);
  border-color: var(--brand);
}

.btn-block {
  width: 100%;
  margin-top: 8px;
}

.btn-block:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-message {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}

.form-message.error {
  color: #d92d20;
}

.form-message.success {
  color: #027a48;
}

.switch-link {
  margin: 24px 0 0;
  text-align: center;
  font-size: 14px;
  color: var(--text-muted);
}

.switch-link a {
  color: var(--brand);
  font-weight: 600;
}
</style>
