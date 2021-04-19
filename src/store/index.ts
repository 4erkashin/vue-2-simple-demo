import Vue from 'vue';
import Vuex from 'vuex';
import { INotesState } from '@/store/modules/ModuleNotes';
import { INoteDetailsState } from '@/store/modules/ModuleNoteDetails';
import { IRequestsPendingState } from '@/store/modules/ModuleRequestsPending';

Vue.use(Vuex);

export interface IRootState {
  notes: INotesState;
  noteDetails: INoteDetailsState;
  moduleRequestsPending: IRequestsPendingState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
