<template>
  <v-row justify="center">
    <v-col cols="12" sm="6">
      <template v-if="isNoteDetailsLoaded">
        <v-card class="pa-2" outlined>
          <v-card-title>
            #{{ noteDetails.id }} {{ noteDetails.title }}
          </v-card-title>

          <v-card-subtitle> UserID: {{ noteDetails.userId }} </v-card-subtitle>

          <v-card-text>
            {{ noteDetails.body }}
          </v-card-text>

          <v-card-actions>
            <v-btn :to="{ name: 'ViewNotesList' }" exact> Back to list </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-skeleton-loader v-else type="card, actions" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  INoteDetailsState,
  moduleNoteDetails,
} from '@/store/modules/ModuleNoteDetails';
import { INote } from '@/services/serviceNotes/types';
import { NavigationGuardNext, Route } from 'vue-router/types/router';

Component.registerHooks(['beforeRouteLeave']);

@Component
export default class ViewNotesList extends Vue {
  @Prop({
    required: true,
    type: Number,
  })
  noteId!: INote['id'];

  async mounted() {
    await moduleNoteDetails.fetchNote(this.noteId);
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
