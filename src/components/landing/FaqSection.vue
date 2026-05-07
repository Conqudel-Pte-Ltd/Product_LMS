<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'Do I need technical skills?',
    a: 'No. Agile LMS is fully managed—you pick a plan, customize branding, and start adding courses. Our team can help with domain and SSO if you need it.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We use encryption in transit and at rest, regular backups, and compliance-minded infrastructure. Enterprise plans include advanced controls and SLAs.',
  },
  {
    q: 'Can I use my own domain?',
    a: 'Absolutely. Point your custom domain to your LMS site and send branded emails so learners always see your name—not ours.',
  },
  {
    q: 'Can I upgrade later?',
    a: 'You can move between plans anytime. When you outgrow a tier, upgrading takes a few clicks and preserves your content and learners.',
  },
]

const open = ref(null)

function toggle(i) {
  open.value = open.value === i ? null : i
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-sub">Quick answers to what teams ask before they go live.</p>
      <div class="grid">
        <div
          v-for="(item, i) in faqs"
          :key="item.q"
          class="faq"
          :class="{ open: open === i }"
        >
          <button type="button" class="faq-q" :aria-expanded="open === i" @click="toggle(i)">
            {{ item.q }}
            <span class="chev" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>
          <div v-show="open === i" class="faq-a">
            <p>{{ item.a }}</p>
          </div>
        </div>
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
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}

.faq {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  color: var(--text);
  background: #fff;
  border: none;
}

.faq-q:hover {
  background: var(--brand-soft);
}

.chev {
  flex-shrink: 0;
  color: var(--brand);
  transition: transform 0.2s;
}

.faq.open .chev {
  transform: rotate(180deg);
}

.faq-a {
  padding: 0 20px 18px;
  border-top: 1px solid var(--border);
}

.faq-a p {
  margin: 14px 0 0;
  font-size: 15px;
  color: var(--text-muted);
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
