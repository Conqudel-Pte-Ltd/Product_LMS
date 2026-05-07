<script setup>
const audiences = [
  {
    title: 'Online Educators',
    text: 'Teach at scale with courses, assignments, and progress tracking.',
    icon: 'cap',
  },
  {
    title: 'Coaching Institutes',
    text: 'Run batches, live sessions, and student reports from one place.',
    icon: 'people',
  },
  {
    title: 'EdTech Startups',
    text: 'Launch fast with white-label branding and an API-ready foundation.',
    icon: 'rocket',
  },
  {
    title: 'Corporate Training Teams',
    text: 'Onboard employees with compliance paths and manager dashboards.',
    icon: 'briefcase',
  },
]
</script>

<template>
  <section class="section" id="about">
    <div class="container">
      <h2 class="section-title">Built for Modern Educators &amp; Teams</h2>
      <p class="section-sub">
        Whether you train five students or five thousand, Agile LMS adapts to how you work.
      </p>
      <div class="grid">
        <article v-for="item in audiences" :key="item.title" class="card">
          <div class="icon-wrap" aria-hidden="true">
            <svg v-if="item.icon === 'cap'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4 10l8-4 8 4-8 4-8-4z M4 10v6l8 4 8-4v-6" />
              <path d="M12 14v7" />
            </svg>
            <svg v-else-if="item.icon === 'people'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <svg v-else-if="item.icon === 'rocket'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  box-shadow: var(--shadow);
  transition: box-shadow 0.2s, border-color 0.2s;
}

.card:hover {
  border-color: rgba(0, 102, 255, 0.25);
  box-shadow: var(--shadow-lg);
}

.icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--brand-soft);
  color: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.icon-wrap svg {
  width: 26px;
  height: 26px;
}

.card h3 {
  font-size: 1.125rem;
  margin-bottom: 8px;
}

.card p {
  margin: 0;
  font-size: 15px;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
