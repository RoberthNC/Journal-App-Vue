<template>
  <div class="d-flex justify-content-center container">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab @on:click="goToCreateNewEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  methods: {
    goToCreateNewEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
