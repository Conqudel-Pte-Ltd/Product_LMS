<script setup>
const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    desc: 'Basic features, up to 100 students.',
    cta: 'Start Free Trial',
    href: '#cta',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    badge: 'Most Popular',
    desc: 'Up to 1,000 students, advanced features, and priority support.',
    cta: 'Start Free Trial',
    href: '#cta',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Unlimited students, custom features, and dedicated support.',
    cta: 'Contact Sales',
    href: '#',
    featured: false,
  },
]
</script>

<template>
  <section class="section" id="pricing">
    <div class="container">
      <h2 class="section-title">Simple, Transparent Pricing</h2>
      <p class="section-sub">Pick a plan that fits today—you can upgrade whenever you are ready.</p>
      <div class="grid">
        <article v-for="plan in plans" :key="plan.name" class="card" :class="{ featured: plan.featured }">
          <div v-if="plan.badge" class="badge">{{ plan.badge }}</div>
          <h3>{{ plan.name }}</h3>
          <p class="price">
            <span class="amount">{{ plan.price }}</span>
            <span v-if="plan.period" class="period">{{ plan.period }}</span>
          </p>
          <p class="desc">{{ plan.desc }}</p>
          <a :href="plan.href" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-outline'">{{ plan.cta }}</a>
        </article>
      </div>
      <p class="footer-link">
        <a href="#">
          View Full Pricing
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </p>
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
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}

.card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  text-align: center;
}

.card.featured {
  border-color: var(--brand);
  box-shadow: 0 12px 40px rgba(0, 102, 255, 0.15);
  transform: scale(1.02);
}

.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--brand);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 6px 14px;
  border-radius: 999px;
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.price {
  margin: 0 0 12px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.amount {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
}

.period {
  font-size: 15px;
  color: var(--text-muted);
}

.desc {
  flex: 1;
  margin: 0 0 24px;
  font-size: 15px;
  color: var(--text-muted);
}

.card .btn {
  width: 100%;
}

.footer-link {
  text-align: center;
  margin: 40px 0 0;
}

.footer-link a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--brand);
}

.footer-link a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .card.featured {
    transform: none;
  }
}
</style>
