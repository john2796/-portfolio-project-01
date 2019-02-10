import { LOADING, GET_PROPERTY_SUCCESS } from "../actions/propertyActions";
const initialState = {
  data: [],
  loading: false
};
export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    default:
      return state;
  }
}
