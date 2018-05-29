<template>
  <div class="container">
    <div v-if="note">
      <h1>{{ note.title }}</h1>

      <div class="content" v-html="note.content"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      note: "selectedNote"
    })
  }
};
</script>