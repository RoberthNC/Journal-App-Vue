<template>
  <div class="d-flex justify-content-center container">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
