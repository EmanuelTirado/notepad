<template>
  <div class="container">
    <div v-if="note">
      <v-form v-model="valid">
        <v-text-field :value="note.title" @input="updateNoteForm({ key: 'title', value: $event })" label="Title" required></v-text-field>        
        <v-text-field :value="note.content" @input="updateNoteForm({ key: 'content', value: $event })" label="Note" multi-line></v-text-field>        
      </v-form>
      <div class="content">
        {{ note.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true
    };
  },
  methods: {
    ...mapActions(["updateNoteForm"]),
    // updateNoteForm({ key, value }) {
    //   this.$store.dispatch("updateNoteForm", { key, value });
    // }
  },
  computed: {
    ...mapGetters({
      note: "selectedNote"
    })
  }
};
</script>