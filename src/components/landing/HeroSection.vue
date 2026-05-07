<script setup>
import DashboardPreview from './DashboardPreview.vue'
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <h1 class="hero-title">
          Launch Your Own LMS Platform <span class="accent">in Minutes</span>
        </h1>
        <p class="hero-lead">
          Create, manage, and scale your own branded learning platform—no coding, no setup hassle.
        </p>
        <div class="hero-ctas">
          <a href="#cta" class="btn btn-primary btn-lg">Start Free Trial</a>
          <a href="#demo" class="btn btn-outline btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            View Demo
          </a>
        </div>
        <ul class="trust">
          <li>
            <svg class="check" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M16.7 5.3a1 1 0 010 1.4l-7.1 7.1a1 1 0 01-1.4 0L3.3 9.9a1 1 0 111.4-1.4l3.6 3.6 6.4-6.4a1 1 0 011.4 0z"/></svg>
            No credit card required
          </li>
          <li>
            <svg class="check" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M16.7 5.3a1 1 0 010 1.4l-7.1 7.1a1 1 0 01-1.4 0L3.3 9.9a1 1 0 111.4-1.4l3.6 3.6 6.4-6.4a1 1 0 011.4 0z"/></svg>
            14-day free trial
          </li>
          <li>
            <svg class="check" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M16.7 5.3a1 1 0 010 1.4l-7.1 7.1a1 1 0 01-1.4 0L3.3 9.9a1 1 0 111.4-1.4l3.6 3.6 6.4-6.4a1 1 0 011.4 0z"/></svg>
            Cancel anytime
          </li>
        </ul>
      </div>
      <div class="hero-visual">
        <DashboardPreview variant="hero" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 56px 0 80px;
  background: linear-gradient(180deg, #fff 0%, #f8faff 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 48px;
  align-items: center;
}

.hero-title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.accent {
  color: var(--brand);
}

.hero-lead {
  font-size: 1.125rem;
  margin-bottom: 28px;
  max-width: 520px;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.btn-lg {
  padding: 14px 28px;
  font-size: 16px;
}

.trust {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
}

.trust li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.check {
  width: 18px;
  height: 18px;
  color: var(--brand);
  flex-shrink: 0;
}

.hero-visual {
  position: relative;
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .hero-visual {
    order: -1;
  }
}
</style>
