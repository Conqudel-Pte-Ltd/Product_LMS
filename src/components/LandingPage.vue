<script setup>
import AppHeader from './landing/AppHeader.vue'
import HeroSection from './landing/HeroSection.vue'
import AudienceSection from './landing/AudienceSection.vue'
import FeaturesSection from './landing/FeaturesSection.vue'
import StepsSection from './landing/StepsSection.vue'
import DashboardFeatureSection from './landing/DashboardFeatureSection.vue'
import WhyChooseSection from './landing/WhyChooseSection.vue'
import PricingSection from './landing/PricingSection.vue'
import TestimonialsSection from './landing/TestimonialsSection.vue'
import FaqSection from './landing/FaqSection.vue'
import FinalCtaSection from './landing/FinalCtaSection.vue'
</script>

<template>
  <div class="landing">
    <AppHeader />
    <main>
      <HeroSection />
      <AudienceSection />
      <FeaturesSection />
      <StepsSection />
      <DashboardFeatureSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>&copy; {{ new Date().getFullYear() }} Agile LMS. All rights reserved.</p>
        <nav class="footer-nav">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.site-footer {
  border-top: 1px solid var(--border);
  background: #fff;
  padding: 24px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  color: var(--text-muted);
}

.footer-inner p {
  margin: 0;
}

.footer-nav {
  display: flex;
  gap: 20px;
}

.footer-nav a {
  color: var(--text-muted);
  font-weight: 500;
}

.footer-nav a:hover {
  color: var(--brand);
}
</style>
