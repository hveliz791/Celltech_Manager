<template>
  <div class="container py-4">
    <h3>Teléfonos reparados</h3>

    <table class="table">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Teléfono</th>
          <th>Acción</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="t in reparados" :key="t.id">
          <td>{{ t.cliente }}</td>
          <td>{{ t.marca }} {{ t.modelo }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="entregar(t)">
              Entregar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reparados = ref([]);

const entregar = (t) => {
  console.log("Entregado", t);
};
</script>