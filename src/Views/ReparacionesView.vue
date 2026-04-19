<template>
  <div class="container py-4">
    <h3>Teléfonos en reparación</h3>

    <table class="table">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Teléfono</th>
          <th>Problema</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="t in telefonos" :key="t.id">
          <td>{{ t.cliente }}</td>
          <td>{{ t.marca }} {{ t.modelo }}</td>
          <td>{{ t.problema }}</td>
          <td>{{ t.estado }}</td>
          <td>
            <button class="btn btn-success btn-sm" @click="marcarReparado(t)">
              Marcar reparado
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const telefonos = ref([
  {
    id: 1,
    cliente: "Juan Perez",
    marca: "Samsung",
    modelo: "A20",
    problema: "Pantalla rota",
    estado: "pendiente",
  },
]);

const marcarReparado = (t) => {
  t.estado = "reparado";

  // Aquí luego llamas tu API
  console.log("Enviar correo...");
};
</script>