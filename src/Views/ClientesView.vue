<template>
  <div class="container py-4">
    <h3>Clientes</h3>

    <!-- FORMULARIO -->
    <div class="card p-3 mb-4">
      <h5>Nuevo cliente</h5>

      <div class="row">
        <div class="col-md-4">
          <input v-model="form.nombre" class="form-control mb-2" placeholder="Nombre" />
        </div>

        <div class="col-md-4">
          <input v-model="form.telefono" class="form-control mb-2" placeholder="Teléfono" />
        </div>

        <div class="col-md-4">
          <input v-model="form.correo" class="form-control mb-2" placeholder="Correo" />
        </div>
      </div>

      <button class="btn btn-primary mt-2" @click="agregarCliente">
        Guardar cliente
      </button>
    </div>

    <!-- TABLA -->
    <div class="card p-3">
      <h5>Lista de clientes</h5>

      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="c in clientes" :key="c.id">
            <td>{{ c.nombre }}</td>
            <td>{{ c.telefono }}</td>
            <td>{{ c.correo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// lista de clientes (simulación)
const clientes = ref([
  {
    id: 1,
    nombre: "Juan Pérez",
    telefono: "5555-5555",
    correo: "juan@gmail.com",
  },
]);

// formulario
const form = reactive({
  nombre: "",
  telefono: "",
  correo: "",
});

// agregar cliente
const agregarCliente = () => {
  if (!form.nombre || !form.telefono) {
    alert("Nombre y teléfono son obligatorios");
    return;
  }

  clientes.value.push({
    id: Date.now(),
    ...form,
  });

  // limpiar formulario
  form.nombre = "";
  form.telefono = "";
  form.correo = "";
};
</script>