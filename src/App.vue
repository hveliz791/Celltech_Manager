<template>
  <div :class="['layout', { dark: darkMode }]">
    <!-- SIDEBAR -->
    <aside :class="['sidebar', { open: menuOpen }]">
      <h2 class="logo">📱 Celltech</h2>

      <nav>
        <router-link to="/" @click="cerrarMenu">👥 Clientes</router-link>
        <router-link to="/reparaciones" @click="cerrarMenu">🛠 Reparaciones</router-link>
        <router-link to="/entregas" @click="cerrarMenu">📦 Entregas</router-link>
      </nav>
    </aside>

    <!-- OVERLAY -->
    <div v-if="menuOpen" class="overlay" @click="cerrarMenu"></div>

    <!-- MAIN -->
    <main class="main">
      <div class="header">
        <button class="menu-btn" @click="menuOpen = true">☰</button>

        <h3>Panel de Control</h3>

        <button class="dark-btn" @click="darkMode = !darkMode">
          {{ darkMode ? '☀️' : '🌙' }}
        </button>
      </div>

      <!-- DASHBOARD -->
      <div class="dashboard">
        <div class="card stat">👥 Clientes <strong>10</strong></div>
        <div class="card stat">🛠 En proceso <strong>5</strong></div>
        <div class="card stat">📦 Listos <strong>3</strong></div>
      </div>

      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const darkMode = ref(false)

const cerrarMenu = () => {
  menuOpen.value = false
}
</script>

<style>
/* ========================= */
/* VARIABLES */
/* ========================= */
.layout {
  --bg: #f1f5f9;
  --card: white;
  --text: #1e293b;
  --sidebar: #0f172a;
}

.layout.dark {
  --bg: #0f172a;
  --card: #1e293b;
  --text: #f1f5f9;
  --sidebar: #020617;
}

/* ========================= */
/* LAYOUT */
/* ========================= */
.layout {
  display: flex;
  height: 100vh;
  background: var(--bg);
  color: var(--text);
}

/* SIDEBAR */
.sidebar {
  width: 220px;
  background: var(--sidebar);
  color: white;
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 1001;
}

.sidebar a {
  display: block;
  color: #cbd5f5;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 5px;
}

.sidebar a.router-link-active {
  background: #3b82f6;
  color: white;
}

/* MAIN */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--card);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* DASHBOARD */
.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
}

.stat {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

/* CONTENT */
.content {
  padding: 20px;
  overflow-y: auto;
}

/* CARD */
.card {
  background: var(--card);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

/* BOTONES */
.menu-btn {
  display: none;
  font-size: 20px;
  border: none;
  background: none;
}

.dark-btn {
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}

/* OVERLAY */
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    height: 100%;
  }

  .sidebar.open {
    left: 0;
  }

  .menu-btn {
    display: block;
  }

  .dashboard {
    grid-template-columns: 1fr;
  }
}
</style>