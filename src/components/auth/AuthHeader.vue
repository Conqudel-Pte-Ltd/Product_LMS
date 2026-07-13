<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="auth-header">
    <div class="container auth-header-inner">
      <RouterLink to="/" class="logo">
        <img
          class="logo-img"
          src="/ci-cd-logo.png"
          alt="CI/CD"
          width="160"
          height="44"
        />
      </RouterLink>
      <RouterLink to="/" class="back-link">Back to home</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.auth-header {
  border-bottom: 1px solid var(--border);
  background: #fff;
}

.auth-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  line-height: 0;
}

.logo-img {
  height: 44px;
  width: auto;
  max-width: min(260px, 58vw);
  object-fit: contain;
}

.back-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--brand);
}

.back-link:hover {
  color: var(--brand-hover);
}
</style>
