import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "./redux/dataSlice";
const App = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const data = useSelector((state) => state.data.allData);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    const getData = async () => {
      dispatch(fetchDataStart());
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        dispatch(fetchDataSuccess(res));
      } catch (err) {
        dispatch(fetchDataFailure(err.toString()));
      }
    };

    getData();
  }, []);

  if (status === "loading") {
    return "loading";
  }

  if (status === "failed") {
    return <div>error : {error}</div>;
  }

  return (
    <>
      {data?.map((item) => {
        return <h1>{item.id}</h1>;
      })}
      <section>
        <div className="container">
          <div className="row">
            <h1>Salam</h1>
            <span>{counter}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
