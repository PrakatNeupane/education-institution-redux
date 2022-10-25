import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  deleteData,
  setDataFromApi,
  setDataToDisplay,
  setIsLoading,
} from "../state-management/appSlice";
import { fetchDataFromApi } from "../helper/axiosHelper";
import Spin from "./Spin";

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
  const handleOnDelete = () => {
    dispatch(deleteData());
  };

  const handleOnAdd = () => {
    dispatch(addData());
  };
  return (
    <div>
      {isLoading && <Spin />}

      <div className="buttons">
        <Button className="btn btn-primary me-1" onClick={handleOnLoad}>
          LOAD
        </Button>
        <Button className="btn btn-danger me-1" onClick={handleOnDelete}>
          DELETE
        </Button>
        <Button className="btn btn-info" onClick={handleOnAdd}>
          ADD
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Institution Name</th>
            <th>Website</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>
                <a href={item.web_pages[0]} target="none">
                  {item.web_pages[0]}
                </a>
              </td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default DisplayTable;
