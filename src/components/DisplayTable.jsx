import React from "react";
import {
  setDataFromApi,
  setDataToDisplay,
  setIsLoading,
} from "../state-management/appSlice";
import { fetchDataFromApi } from "../helper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";

const DisplayTable = () => {
  const dispatch = useDispatch();
  const { isLoading, dataToDisplay } = useSelector((state) => state.apiData);

  const handleOnLoad = () => {
    dispatch(setIsLoading(true));
    fetchDataFromApi().then((data) => {
      dispatch(setDataFromApi(data));
      dispatch(setDataToDisplay(data));
      dispatch(setIsLoading(false));
    });
  };
  return <div></div>;
};
export default DisplayTable;
