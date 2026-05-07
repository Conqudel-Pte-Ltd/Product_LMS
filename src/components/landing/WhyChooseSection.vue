<template>
  <section class="section">
    <div class="container split">
      <div class="illustration" aria-hidden="true">
        <div class="laptop">
          <div class="screen">
            <div class="screen-glow" />
          </div>
          <div class="base" />
        </div>
        <div class="rocket">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 4L38 20h12L40 28l8 28-16-12L16 56l8-28-10-8h12L32 4z" fill="#0066ff" opacity="0.9" />
            <path d="M32 44v12" stroke="#e63946" stroke-width="3" stroke-linecap="round" />
            <circle cx="32" cy="24" r="4" fill="#fff" />
          </svg>
        </div>
      </div>
      <div class="copy">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <span class="check" aria-hidden="true">
              <svg viewBox="0 0 20 20"><path fill="currentColor" d="M16.7 5.3a1 1 0 010 1.4l-7.1 7.1a1 1 0 01-1.4 0L3.3 9.9a1 1 0 111.4-1.4l3.6 3.6 6.4-6.4a1 1 0 011.4 0z"/></svg>
            </span>
            Get your own dedicated LMS site
          </li>
          <li>
            <span class="check" aria-hidden="true">
              <svg viewBox="0 0 20 20"><path fill="currentColor" d="M16.7 5.3a1 1 0 010 1.4l-7.1 7.1a1 1 0 01-1.4 0L3.3 9.9a1 1 0 111.4-1.4l3.6 3.6 6.4-6.4a1 1 0 011.4 0z"/></svg>
            </span>
            No technical setup required
          </li>
          <li>
            <span class="check" aria-hidden="true">
              <svg viewBox="0 0 20 20"><path fill="currentColor" d="M16.7 5.3a1 1 0 010 1.4l-7.1 7.1a1 1 0 01-1.4 0L3.3 9.9a1 1 0 111.4-1.4l3.6 3.6 6.4-6.4a1 1 0 011.4 0z"/></svg>
            </span>
            Use your custom domain
          </li>
          <li>
            <span class="check" aria-hidden="true">
              <svg viewBox="0 0 20 20"><path fill="currentColor" d="M16.7 5.3a1 1 0 010 1.4l-7.1 7.1a1 1 0 01-1.4 0L3.3 9.9a1 1 0 111.4-1.4l3.6 3.6 6.4-6.4a1 1 0 011.4 0z"/></svg>
            </span>
            Scale as your business grows
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 0;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.illustration {
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.laptop {
  position: relative;
  width: 260px;
}

.screen {
  height: 160px;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border-radius: 12px 12px 0 0;
  border: 3px solid #c5cdd8;
  border-bottom: none;
  position: relative;
  overflow: hidden;
}

.screen-glow {
  position: absolute;
  inset: 12px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.35), rgba(230, 57, 70, 0.2));
  border-radius: 6px;
}

.base {
  height: 14px;
  background: #aeb8c4;
  border-radius: 0 0 10px 10px;
  margin: 0 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.base::after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 6px;
  background: #9aa5b3;
  border-radius: 0 0 6px 6px;
}

.rocket {
  position: absolute;
  right: 10%;
  top: 0;
  width: 72px;
  height: 72px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.copy h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 24px;
}

.copy ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.copy li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 16px;
}

.check {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  color: var(--brand);
}

.check svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 900px) {
  .split {
    grid-template-columns: 1fr;
  }
  .illustration {
    order: -1;
    min-height: 220px;
  }
}
</style>
