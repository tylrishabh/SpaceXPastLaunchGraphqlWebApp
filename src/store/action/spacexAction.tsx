export const GET_SPACEX = "GET_SPACEX";
export const SET_SPACEX = "SET_SPACEX";

export const getSpacexData = () => ({
  type: GET_SPACEX,
});

export const setSpacexData = (data: any) => ({
  type: SET_SPACEX,
  data,
});
