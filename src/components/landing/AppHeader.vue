<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileOpen = ref(false)
const openDropdown = ref(null)

function toggleDropdown(id) {
  openDropdown.value = openDropdown.value === id ? null : id
}

function closeDropdowns() {
  openDropdown.value = null
}

function onDocClick(e) {
  if (!e.target.closest?.('[data-dropdown-root]')) {
    openDropdown.value = null
  }
}

onMounted(() => document.addEventListener('click', onDocClick))
onUnmounted(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#" class="logo" @click="mobileOpen = false">
        <img
          class="logo-img"
          src="/agile-asia-logo.png"
          alt="Agile ASIA"
          width="220"
          height="56"
          loading="eager"
          decoding="async"
        />
      </a>

      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="mobileOpen"
        aria-controls="site-nav"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Menu</span>
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
      </button>

      <nav id="site-nav" class="nav" :class="{ open: mobileOpen }">
        <a href="#features" @click="mobileOpen = false">Features</a>
        <a href="#pricing" @click="mobileOpen = false">Pricing</a>

        <div class="dropdown-wrap" data-dropdown-root>
          <button
            type="button"
            class="nav-dd"
            :aria-expanded="openDropdown === 'solutions'"
            @click.stop="toggleDropdown('solutions')"
          >
            Solutions
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 4.5 L6 7.5 L9 4.5" fill="none" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </button>
          <div v-if="openDropdown === 'solutions'" class="dropdown">
            <a href="#">For educators</a>
            <a href="#">For enterprises</a>
            <a href="#">For startups</a>
          </div>
        </div>

        <div class="dropdown-wrap" data-dropdown-root>
          <button
            type="button"
            class="nav-dd"
            :aria-expanded="openDropdown === 'resources'"
            @click.stop="toggleDropdown('resources')"
          >
            Resources
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 4.5 L6 7.5 L9 4.5" fill="none" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </button>
          <div v-if="openDropdown === 'resources'" class="dropdown">
            <a href="#">Blog</a>
            <a href="#">Help center</a>
            <a href="#">API docs</a>
          </div>
        </div>

        <a href="#about" @click="mobileOpen = false">About Us</a>

        <div class="nav-actions">
          <a href="#" class="link-login" @click="closeDropdowns">Log in</a>
          <a href="#cta" class="btn btn-primary btn-sm" @click="mobileOpen = false">Start Free Trial</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  gap: 24px;
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
  object-position: left center;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
}

.nav-toggle .bar {
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 1px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px 20px;
  flex-wrap: wrap;
}

.nav > a,
.nav-dd {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-muted);
  padding: 8px 4px;
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nav > a:hover,
.nav-dd:hover {
  color: var(--brand);
}

.dropdown-wrap {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  min-width: 200px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown a {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text);
}

.dropdown a:hover {
  background: var(--brand-soft);
  color: var(--brand);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid var(--border);
}

.link-login {
  font-weight: 600;
  color: var(--text);
  font-size: 15px;
}

.link-login:hover {
  color: var(--brand);
}

.btn-sm {
  padding: 10px 18px;
  font-size: 14px;
}

@media (max-width: 960px) {
  .nav-toggle {
    display: flex;
  }

  .nav {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: #fff;
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    align-items: stretch;
    padding: 16px 24px 24px;
    gap: 0;
    box-shadow: var(--shadow);
  }

  .nav.open {
    display: flex;
  }

  .nav > a,
  .dropdown-wrap {
    border-bottom: 1px solid var(--border);
    padding: 12px 0;
  }

  .nav-dd {
    width: 100%;
    justify-content: space-between;
  }

  .dropdown {
    position: static;
    margin-top: 8px;
    box-shadow: none;
    border: none;
    background: var(--surface);
  }

  .nav-actions {
    flex-direction: column;
    align-items: stretch;
    margin-left: 0;
    padding-left: 0;
    border: none;
    margin-top: 16px;
    gap: 12px;
  }

  .nav-actions .btn {
    width: 100%;
  }
}
</style>
