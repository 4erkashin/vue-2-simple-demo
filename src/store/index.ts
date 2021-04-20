import Vue from 'vue';
import Vuex from 'vuex';
import type { INotesState } from '@/store/modules/ModuleNotes';
import type { INoteDetailsState } from '@/store/modules/ModuleNoteDetails';
import type { IRequestsPendingState } from '@/store/modules/ModuleRequestsСancellation';

Vue.use(Vuex);

export interface IRootState {
  notes: INotesState;
  noteDetails: INoteDetailsState;
  moduleRequestsPending: IRequestsPendingState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
