<template>
  <layout-view>
    <template v-if="isNotesLoaded">
      <v-row v-for="note in notes" :key="note.id" no-gutters>
        <note-item
          :title="`#${note.id} ${note.title}`"
          :text="note.body"
          class="my-2 pa-2"
        >
          <template #actions>
            <v-btn
              :to="{ name: 'ViewNoteDetails', params: { noteId: note.id } }"
            >
              Go to details
            </v-btn>
          </template>
        </note-item>
      </v-row>
    </template>
  </layout-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { INotesState, moduleNotes } from '@/store/modules/ModuleNotes';

import LayoutView from '@/layout/LayoutView.vue';
import NoteItem from '@/components/NoteItem.vue';

@Component({
  components: {
    LayoutView,
    NoteItem,
  },
})
export default class ViewNotesList extends Vue {
  async created() {
    await moduleNotes.getNotes();
  }

  get isNotesLoaded(): boolean {
    return moduleNotes.isNotesLoaded;
  }

  get notes(): INotesState['notes'] {
    return moduleNotes.notes;
  }
}
</script>
