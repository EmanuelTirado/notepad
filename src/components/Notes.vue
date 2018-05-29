<template>
  <div class="container">
    
    <!-- Floating 'Add Note' button -->
    <v-btn color="primary" fab id="btnAddNote">
      <v-icon>add</v-icon>
    </v-btn>

    <!-- List of Notes -->
    <v-list two-line subheader>
      <v-subheader>Uncategorized</v-subheader>
      
      <v-list-tile avatar 
        v-for="note in notes" :key="note.id"
        router :to="{ name: 'note-view', params: { id: note.id }}">
        
        <v-list-tile-avatar>
          <v-icon :class="[note.color]">{{ note.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ note.title }}</v-list-tile-title>
          <v-list-tile-sub-title>Last Modified: {{ format(note.lastMod, 'M/D/YYYY') }}</v-list-tile-sub-title>
        </v-list-tile-content>
      
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import format from "date-fns/format";

export default {
  computed: {
    ...mapGetters([
      "getNoteById",
      "noteCount"
    ]),
    ...mapGetters({
      notes: "notesSortedByTitle"
    })
  },
  methods: {
    format
  }
};
</script>

<style lang="scss">
  #btnAddNote {
    position: fixed;
    bottom: 50px;
    right: 10px;
  }
</style>
