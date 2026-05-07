<script setup>
const items = [
  {
    quote:
      'We launched our academy in a weekend. Students love the clean UI and we finally have analytics that make sense.',
    name: 'Priya Sharma',
    role: 'Founder, LearnPro Academy',
    initials: 'PS',
  },
  {
    quote:
      'Our coaching center moved 12 batches online without hiring a single engineer. Support has been outstanding.',
    name: 'Rahul Mehta',
    role: 'Director, BrightPath Institute',
    initials: 'RM',
  },
  {
    quote:
      'Custom domain and SSO were must-haves. Agile LMS checked every enterprise box on our security review.',
    name: 'Elena Park',
    role: 'Head of L&D, Northwind Logistics',
    initials: 'EP',
  },
]
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">What Our Customers Say</h2>
      <p class="section-sub">Teams around the world trust us to power learning at scale.</p>
      <div class="grid">
        <article v-for="t in items" :key="t.name" class="card">
          <p class="quote">&ldquo;{{ t.quote }}&rdquo;</p>
          <div class="person">
            <div class="avatar" aria-hidden="true">{{ t.initials }}</div>
            <div>
              <p class="name">{{ t.name }}</p>
              <p class="role">{{ t.role }}</p>
            </div>
          </div>
          <div class="stars" aria-label="5 out of 5 stars">
            <span v-for="s in 5" :key="s" class="star">★</span>
          </div>
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
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
}

.quote {
  font-style: italic;
  color: var(--text);
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 1.65;
  flex: 1;
}

.person {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand), #4d94ff);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  margin: 0;
  font-weight: 600;
  color: var(--text);
  font-size: 15px;
}

.role {
  margin: 2px 0 0;
  font-size: 13px;
  color: var(--text-muted);
}

.stars {
  color: #e6b422;
  font-size: 14px;
  letter-spacing: 2px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
