<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-toolbar flat>
      <v-toolbar-title style="line-height: 50px;">
        <avatar username="Emanuel Tirado" style="float: left; margin: 5px 15px 0 0;" :size="40"></avatar>
        Emanuel Tirado
      </v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>
  
    <v-list>
      <v-list-tile 
        value="true"
        v-for="(note, i) in notes"
        :key="i"
        router :to="{ name: 'note-view', params: { id: note.id }}">
        <v-list-tile-action>
          <v-icon v-html="note.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="note.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Avatar from "vue-avatar";

export default {
  components: {
    Avatar
  },
  methods: {
    ...mapActions([
      "updateDrawer"
    ])
  },
  computed: {
    ...mapGetters([
      "editMode",
      "viewMode",
      "selectedNoteId"
    ]),
    ...mapGetters({
      notes: "notesSortedByTitle"
    }),
    drawer: {
      get() { 
        return this.$store.state.drawer;
      },
      set(newValue) {
        this.updateDrawer(newValue);
      }
    }
  }
}
</script>
