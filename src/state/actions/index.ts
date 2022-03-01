import { ActionType } from '../action-types'

interface RepositoriesSearchAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface RepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface RepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = 
  | RepositoriesSearchAction
  | RepositoriesSuccessAction
  | RepositoriesErrorAction;