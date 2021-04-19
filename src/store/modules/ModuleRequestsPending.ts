import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

import store from '@/store';
import { CancelTokenSource } from 'axios';

export interface IRequestsPendingState {
  requestCancelTokens: CancelTokenSource[];
}

@Module({ store, dynamic: true, name: 'requestsPending' })
class ModuleRequestsPending
  extends VuexModule
  implements IRequestsPendingState {
  public requestCancelTokens: IRequestsPendingState['requestCancelTokens'] = [];

  @Mutation
  private ADD_CANCEL_TOKEN(token: CancelTokenSource) {
    this.requestCancelTokens.push(token);
  }

  @Mutation
  private CLEAR_CANCEL_TOKENS() {
    this.requestCancelTokens = [];
  }

  @Action({ commit: 'CLEAR_CANCEL_TOKENS' })
  public cancelPendingRequests() {
    this.requestCancelTokens.forEach((request) => {
      if (request.cancel) {
        request.cancel();
      }
    });
  }

  @Action({ commit: 'ADD_CANCEL_TOKEN' })
  public addCancelToken(token: CancelTokenSource) {
    return token;
  }
}

export const moduleRequestsPending = getModule(ModuleRequestsPending);
