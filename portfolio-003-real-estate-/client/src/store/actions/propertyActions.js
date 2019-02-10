import axios from "axios";
export const LOADING = "LOADING";
export const GET_PROPERTY_SUCCESS = "GET_PROPERTY_SUCCESS";
export const GET_ERRORS = "GET_ERRORS";

const Zillow = require("node-zillow");
const ZWSID = "X1-ZWz1844rdoqk97_85kuc";
const x = process.env.ZWSID;
const zillow = new Zillow(ZWSID);
const params = {
  address: "2512 Mapleton Ave.",
  citystatezip: "80304"
};
export const getPropertyInfo = () => dispatch => {
  dispatch(setLoading());
  zillow
    .get("GetSearchResults", params)
    .then(res =>
      dispatch({
        type: GET_PROPERTY_SUCCESS,
        data: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};
export const setLoading = () => {
  return {
    type: LOADING
  };
};
