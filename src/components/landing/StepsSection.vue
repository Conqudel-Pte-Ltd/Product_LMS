<script setup>
const steps = [
  {
    n: 1,
    title: 'Sign Up',
    text: 'Create your account and choose a plan.',
  },
  {
    n: 2,
    title: 'Create Your LMS',
    text: 'Your dedicated LMS site is ready instantly.',
  },
  {
    n: 3,
    title: 'Start Teaching',
    text: 'Add courses, invite students, and go live.',
  },
]
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">Get Started in 3 Simple Steps</h2>
      <p class="section-sub">From signup to first lesson—most teams are live the same day.</p>
      <div class="steps">
        <template v-for="(step, i) in steps" :key="step.n">
          <article class="step-card">
            <div class="num">{{ step.n }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
          <div v-if="i < steps.length - 1" class="arrow" aria-hidden="true">
            <svg width="32" height="24" viewBox="0 0 32 24">
              <path d="M4 12h18M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 0;
}

.steps {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
}

.step-card {
  flex: 1 1 220px;
  max-width: 300px;
  text-align: center;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: var(--shadow);
}

.num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.step-card h3 {
  font-size: 1.125rem;
  margin-bottom: 8px;
}

.step-card p {
  margin: 0;
  font-size: 15px;
  color: var(--text-muted);
}

.arrow {
  display: flex;
  align-items: center;
  color: var(--brand);
  padding: 0 8px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .arrow {
    display: none;
  }
  .steps {
    flex-direction: column;
    align-items: center;
  }
  .step-card {
    max-width: 100%;
    width: 100%;
  }
}
</style>
