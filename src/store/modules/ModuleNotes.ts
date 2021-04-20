import {
  Module,
  MutationAction,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';

import store from '@/store';
import { getNotes } from '@/services/serviceNotes';
import type { INote } from '@/services/serviceNotes/types';

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
  public async getNotes(): Promise<{ notes: INote[] } | undefined> {
    try {
      const { data: notes } = await getNotes();
      return { notes };
    } catch (e) {
      // todo a better error handling
      console.error(e);
    }
  }
}

export const moduleNotes = getModule(ModuleNotes);
