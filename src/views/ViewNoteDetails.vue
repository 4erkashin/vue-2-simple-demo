<template>
  <layout-view>
    <note-item
      v-if="isNoteDetailsLoaded"
      :text="noteDetails.body"
      :title="`#${noteDetails.id} ${noteDetails.title}`"
      class="pa-2"
    >
      <template #subtitle> UserID: {{ noteDetails.userId }} </template>

      <template #actions>
        <v-btn :to="{ name: 'ViewNotesList' }" exact> Back to list </v-btn>
      </template>
    </note-item>
    <v-skeleton-loader v-else type="card, actions" />
  </layout-view>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  INoteDetailsState,
  moduleNoteDetails,
} from '@/store/modules/ModuleNoteDetails';

import type { INote } from '@/services/serviceNotes/types';
import type { NavigationGuardNext, Route } from 'vue-router/types/router';

import LayoutView from '@/layout/LayoutView.vue';
import NoteItem from '@/components/NoteItem.vue';

Component.registerHooks(['beforeRouteLeave']);

@Component({
  components: {
    LayoutView,
    NoteItem,
  },
})
export default class ViewNotesList extends Vue {
  @Prop({
    required: true,
    type: Number,
  })
  noteId!: INote['id'];

  async mounted() {
    await moduleNoteDetails.getNote(this.noteId);
  }

  get isNoteDetailsLoaded(): boolean {
    return moduleNoteDetails.isNoteDetailsLoaded;
  }

  get noteDetails(): INoteDetailsState['noteDetails'] {
    return moduleNoteDetails.noteDetails;
  }

  async beforeRouteLeave(
    to: Route,
    from: Route,
    next: NavigationGuardNext,
  ): Promise<void> {
    await moduleNoteDetails.resetState();
    next();
  }
}
</script>
