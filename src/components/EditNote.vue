<template>
  <div class="container">
    <div v-if="note">
      <v-form v-model="valid">
        <v-text-field :value="note.title" @input="updateNoteForm({ key: 'title', value: $event })" label="Title" required></v-text-field>        
        <v-textarea :value="note.content" @input="updateNoteForm({ key: 'content', value: $event })" label="Note"></v-textarea>        
      </v-form>
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
  },
  computed: {
    ...mapGetters({
      note: "selectedNote"
    })
  }
};
</script>