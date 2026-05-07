<script setup>
defineProps({
  variant: {
    type: String,
    default: 'hero',
  },
})
</script>

<template>
  <div class="dashboard" :class="variant">
    <div class="dash-top">
      <span class="dot" /><span class="dot" /><span class="dot" />
      <span class="dash-url">app.agilelms.io / analytics</span>
    </div>
    <div class="dash-body">
      <aside class="dash-side">
        <div class="side-item active" />
        <div class="side-item" />
        <div class="side-item" />
        <div class="side-item" />
      </aside>
      <main class="dash-main">
        <div class="dash-row stats">
          <div v-for="n in 4" :key="n" class="stat-card">
            <div class="stat-bar" />
            <div class="stat-line" />
          </div>
        </div>
        <div class="dash-row chart-row">
          <div class="chart">
            <div class="chart-bars">
              <div v-for="h in [40, 65, 45, 80, 55, 90, 70]" :key="h" class="bar" :style="{ height: h + '%' }" />
            </div>
          </div>
          <div class="widgets">
            <div class="widget" />
            <div class="widget" />
          </div>
        </div>
        <div class="dash-row table-mock">
          <div v-for="i in 3" :key="i" class="table-line" />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
  overflow: hidden;
}

.dashboard.hero {
  transform: perspective(1200px) rotateY(-6deg) rotateX(4deg);
}

@media (max-width: 900px) {
  .dashboard.hero {
    transform: none;
  }
}

.dash-top {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f4f6fb;
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
}

.dot:nth-child(1) {
  background: #ff5f57;
}
.dot:nth-child(2) {
  background: #febc2e;
}
.dot:nth-child(3) {
  background: #28c840;
}

.dash-url {
  margin-left: auto;
  font-size: 11px;
  color: var(--text-muted);
}

.dash-body {
  display: grid;
  grid-template-columns: 52px 1fr;
  min-height: 280px;
}

.dashboard:not(.hero) .dash-body {
  min-height: 320px;
}

.dash-side {
  background: #f8faff;
  border-right: 1px solid var(--border);
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.side-item {
  height: 8px;
  border-radius: 4px;
  background: #e0e6f0;
}

.side-item.active {
  background: var(--brand);
  width: 100%;
}

.dash-main {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.dash-row.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.stat-card {
  background: var(--surface);
  border-radius: 8px;
  padding: 10px;
  border: 1px solid var(--border);
}

.stat-bar {
  height: 6px;
  width: 45%;
  background: var(--brand);
  border-radius: 3px;
  margin-bottom: 8px;
  opacity: 0.85;
}

.stat-line {
  height: 4px;
  background: #e8ecf4;
  border-radius: 2px;
  width: 100%;
}

.chart-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 12px;
}

.chart {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px;
  min-height: 120px;
  display: flex;
  align-items: flex-end;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  height: 100px;
}

.bar {
  flex: 1;
  background: linear-gradient(180deg, var(--brand), #4d94ff);
  border-radius: 4px 4px 0 0;
  min-height: 20%;
}

.widgets {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.widget {
  flex: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  min-height: 52px;
}

.table-mock {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.table-line {
  height: 10px;
  background: #eef1f7;
  border-radius: 4px;
}

.table-line:nth-child(2) {
  width: 85%;
}
.table-line:nth-child(3) {
  width: 70%;
}

@media (max-width: 600px) {
  .dash-row.stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .chart-row {
    grid-template-columns: 1fr;
  }
}
</style>
