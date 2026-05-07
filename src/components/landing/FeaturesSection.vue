<script setup>
const features = [
  {
    title: 'Create & Manage Courses',
    text: 'Drag-and-drop builder, modules, quizzes, and drip schedules.',
    icon: 'book',
  },
  {
    title: 'Student Management',
    text: 'Enrollments, groups, messaging, and attendance in one roster.',
    icon: 'users',
  },
  {
    title: 'Live Classes',
    text: 'HD video with recording, breakout rooms, and calendar sync.',
    icon: 'video',
  },
  {
    title: 'Analytics & Reports',
    text: 'Completion, engagement, and revenue insights you can export.',
    icon: 'chart',
  },
  {
    title: 'Custom Branding',
    text: 'Your logo, colors, domain, and email templates—fully on-brand.',
    icon: 'palette',
  },
  {
    title: 'Secure & Scalable',
    text: 'SSO, encryption at rest, and infrastructure that grows with you.',
    icon: 'shield',
  },
]
</script>

<template>
  <section class="section" id="features">
    <div class="container">
      <h2 class="section-title">Everything You Need to Run a Successful LMS</h2>
      <p class="section-sub">
        From your first course to your thousandth learner, the tools stay simple and powerful.
      </p>
      <div class="grid">
        <article v-for="f in features" :key="f.title" class="feature">
          <div class="icon" aria-hidden="true">
            <svg v-if="f.icon === 'book'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
            <svg v-else-if="f.icon === 'users'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <svg v-else-if="f.icon === 'video'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="6" width="14" height="12" rx="2" />
              <path d="M16 10l6-3v10l-6-3z" />
            </svg>
            <svg v-else-if="f.icon === 'chart'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
            <svg v-else-if="f.icon === 'palette'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div class="body">
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 0;
  background: var(--surface);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.feature {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
}

.icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--brand-soft);
  color: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  width: 26px;
  height: 26px;
}

.body h3 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.body p {
  margin: 0;
  font-size: 15px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
