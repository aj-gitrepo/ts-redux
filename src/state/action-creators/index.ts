import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES,
  });

  try {
    const { data } = await axios.get(
      'https://registry.npmjs.org/-/v1/search', 
      {
        params: {
          text: term,
        },
      }
    );

    const names = data.objects.map((result: any) => {
      return result.package.name;
    }); //objects is an array

    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names
    })

  } catch (err: any) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: err.message,
    });
  }
}
