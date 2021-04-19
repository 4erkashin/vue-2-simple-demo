import {
  getModule,
  Module,
  MutationAction,
  VuexModule,
} from 'vuex-module-decorators';

import store from '@/store';
import { INote } from '@/services/serviceNotes/types';
import { getNotes } from '@/services/serviceNotes';

export interface INotesState {
  notes: INote[] | null;
}

@Module({ store, dynamic: true, name: 'notes' })
class ModuleNotes extends VuexModule implements INotesState {
  public notes: INotesState['notes'] = null;

  get isNotesLoaded(): boolean {
    return Boolean(this.notes?.length);
  }

  @MutationAction
  public async fetchNotes() {
    try {
      const { data: notes } = await getNotes();
      return { notes };
    } catch (e) {
      // todo do an error handling
      console.error(e);
    }
  }
}

export const moduleNotes = getModule(ModuleNotes);
