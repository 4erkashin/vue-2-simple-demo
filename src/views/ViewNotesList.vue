<template>
  <v-row justify="center">
    <v-col cols="12" sm="6">
      <template v-if="isNotesLoaded">
        <v-row v-for="note in notes" :key="note.id" no-gutters>
          <v-card class="my-2 pa-2" outlined>
            <v-card-title> #{{ note.id }} {{ note.title }} </v-card-title>

            <v-card-text>
              {{ note.body }}
            </v-card-text>

            <v-card-actions>
              <v-btn
                :to="{ name: 'ViewNoteDetails', params: { noteId: note.id } }"
              >
                Go to details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { INotesState, moduleNotes } from '@/store/modules/ModuleNotes';

@Component
export default class ViewNotesList extends Vue {
  async created() {
    await moduleNotes.fetchNotes();
  }

  get isNotesLoaded(): boolean {
    return moduleNotes.isNotesLoaded;
  }

  get notes(): INotesState['notes'] {
    return moduleNotes.notes;
  }
}
</script>
