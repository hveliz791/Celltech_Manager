<template>
  <div class="container py-4">
    <h3>Nuevo ingreso de teléfono</h3>

    <form @submit.prevent="guardar">
      <!-- CLIENTE -->
      <div class="card p-3 mb-3">
        <h5>Datos del cliente</h5>

        <input v-model="form.nombre" class="form-control mb-2" placeholder="Nombre" />
        <input v-model="form.telefono" class="form-control mb-2" placeholder="Teléfono" />
        <input v-model="form.correo" class="form-control" placeholder="Correo" />
      </div>

      <!-- TELEFONO -->
      <div class="card p-3 mb-3">
        <h5>Datos del teléfono</h5>

        <input v-model="form.marca" class="form-control mb-2" placeholder="Marca" />
        <input v-model="form.modelo" class="form-control mb-2" placeholder="Modelo" />
        <textarea v-model="form.problema" class="form-control" placeholder="Problema"></textarea>
      </div>

      <button class="btn btn-primary">Guardar</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  nombre: "",
  telefono: "",
  correo: "",
  marca: "",
  modelo: "",
  problema: "",
});

const guardar = () => {
  console.log("Guardar en backend", form);
};
</script>