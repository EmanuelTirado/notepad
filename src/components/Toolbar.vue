<template>
  <v-toolbar fixed app dark dense>
    <!-- Hamburger Menu Toggle -->
    <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>

    <v-toolbar-title>My Notes</v-toolbar-title>
    
    <v-spacer></v-spacer>

    <!-- Home Button -->
    <v-btn flat router to="/" icon>
      <v-icon>home</v-icon>
    </v-btn>
    
    <!-- Edit Note Button -->
    <v-btn icon router :to="editLinkPath" v-if="viewMode">
      <v-icon>edit</v-icon>
    </v-btn>
    
    <!-- Save Note Button -->
    <v-btn icon v-if="editMode" :loading="loading" :disabled="loading" @click="saveNoteAndReturnToEditMode()">
      <v-icon>save</v-icon>
    </v-btn>

    <!-- Right three-dot menu -->
    <v-menu offset-y bottom left>
      <v-btn icon slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Send Message</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>      
  </v-toolbar>    
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState([
      "drawer"
    ]),
    ...mapGetters([
      "loading",
      "editMode",
      "viewMode",
      "selectedNoteId"
    ]),
    editLinkPath() {
      return { 
        name: "note-edit", 
        params: { id: this.selectedNoteId }
      };
    }    
  },
  methods: {
    ...mapActions([
      "saveNote",
      "toggleDrawer"
    ]),
    saveNoteAndReturnToEditMode() {
      this.saveNote().then(() => {
        this.$router.push({
          name: "note-view",
          params: { id: this.selectedNoteId }
        });
      });
    }
  }  
}
</script>
