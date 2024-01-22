<template lang="">
  <Navbar />

  <div class="d-flex">
    <div class="col-3">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
  },
};
</script>

<style lang=""></style>
