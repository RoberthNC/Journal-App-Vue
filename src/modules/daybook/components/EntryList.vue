<template lang="">
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar Entrada"
        v-model="term"
      />
    </div>

    <div class="mt-2 d-flex flex-column">
      <button
        class="btn btn-primary mx-3"
        @click="$router.push({ name: 'entry', params: { id: 'new' } })"
      >
        <i class="fa fa-plus-circle"></i>Nueva Entrada
      </button>
    </div>
    <div class="entry-scrollarea">
      <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      term: "",
    };
  },
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
  computed: {
    ...mapGetters("journal", ["getEntriesByTerm"]),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  margin-top: 10px;
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 85px);
}
.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
