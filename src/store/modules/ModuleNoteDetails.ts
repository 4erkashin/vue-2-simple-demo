import {
  getModule,
  Module,
  MutationAction,
  VuexModule,
} from 'vuex-module-decorators';

import store from '@/store';
import { INote } from '@/services/serviceNotes/types';
import { getNote } from '@/services/serviceNotes';

export interface INoteDetailsState {
  noteDetails: INote | null;
}

@Module({ store, dynamic: true, name: 'noteDetails' })
class ModuleNoteDetails extends VuexModule implements INoteDetailsState {
  public noteDetails: INoteDetailsState['noteDetails'] = null;

  get isNoteDetailsLoaded(): boolean {
    return this.noteDetails !== null;
  }

  @MutationAction
  public async fetchNote(id: INote['id']) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const { data: noteDetails } = await getNote(id);
      return { noteDetails };
    } catch (e) {
      // todo do an error handling
      console.error(e);
    }
  }

  @MutationAction
  public async resetState() {
    return { noteDetails: null as INoteDetailsState['noteDetails'] };
  }
}

export const moduleNoteDetails = getModule(ModuleNoteDetails);
