<script setup>
import DashboardPreview from './DashboardPreview.vue'
</script>

<template>
  <section class="section" id="demo">
    <div class="container split">
      <div class="copy">
        <h2>Powerful Dashboard, Simple Experience.</h2>
        <p>
          Manage courses, students, and performance—all from one intuitive dashboard. See what
          matters at a glance with moderator analytics built for action.
        </p>
        <ul class="bullets">
          <li>Real-time enrollment and revenue</li>
          <li>Learner progress and cohort views</li>
          <li>Exports for finance and ops</li>
        </ul>
      </div>
      <div class="visual">
        <DashboardPreview variant="inline" />
        <p class="caption">Moderator analytics overview</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 0;
  background: linear-gradient(180deg, #fff 0%, #f0f5ff 100%);
}

.split {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 48px;
  align-items: center;
}

.copy h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 16px;
}

.copy p {
  margin: 0 0 20px;
  font-size: 1.05rem;
}

.bullets {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--text-muted);
  font-size: 15px;
}

.bullets li {
  margin-bottom: 8px;
}

.visual {
  position: relative;
}

.caption {
  margin: 12px 0 0;
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
}

@media (max-width: 900px) {
  .split {
    grid-template-columns: 1fr;
  }
}
</style>
