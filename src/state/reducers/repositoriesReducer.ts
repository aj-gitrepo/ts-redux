interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

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

type Action = 
  | RepositoriesSearchAction
  | RepositoriesSuccessAction
  | RepositoriesErrorAction;

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

const reducer = (
  state: RepositoriesState, 
  action: Action //instead of writing the 3 lines here
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state;
  }
};

export default reducer;

// return type RepositoriesState - so that it always returns 
// of that type

// interface Action {
//   type: string;
//   payload?: any;
// }