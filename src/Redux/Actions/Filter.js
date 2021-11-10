import { UPDATE_SORT } from "../../redux/ActionTypes";

export function updateSort(sortOption) {
  return (dispatch) => {
    return dispatch({
      type: UPDATE_SORT,
      payload: sortOption,
    });
  };
}
