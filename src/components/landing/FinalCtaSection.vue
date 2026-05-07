<template>
  <section class="cta" id="cta">
    <div class="decor left" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 4l6 14h14L32 26l8 18-16-10L8 44l8-18-10-10h14L24 4z" fill="#0066ff" opacity="0.35" />
      </svg>
    </div>
    <div class="decor right" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" stroke="#0066ff" stroke-width="2" opacity="0.4">
        <path d="M8 20l16-8 16 8-16 8-16-8z M8 20v10l16 8 16-8V20" />
      </svg>
    </div>
    <div class="container inner">
      <h2>Ready to Launch Your Own LMS?</h2>
      <p>Start building your learning platform today.</p>
      <div class="actions">
        <a href="#" class="btn btn-primary btn-lg">Start Free Trial</a>
        <a href="#demo" class="btn btn-outline btn-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          View Demo
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  padding: 80px 0;
  background: linear-gradient(135deg, #e8f0ff 0%, #f5f9ff 50%, #e6f2ff 100%);
  overflow: hidden;
}

.inner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.inner h2 {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin-bottom: 12px;
}

.inner > p {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin: 0 0 28px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.btn-lg {
  padding: 14px 28px;
  font-size: 16px;
}

.decor {
  position: absolute;
  width: 80px;
  height: 80px;
  pointer-events: none;
}

.decor.left {
  left: 8%;
  bottom: 20%;
}

.decor.right {
  right: 8%;
  top: 18%;
  width: 72px;
  height: 72px;
}

@media (max-width: 768px) {
  .decor {
    opacity: 0.5;
  }
}
</style>
