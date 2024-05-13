import React, { useEffect, useState } from "react";
import WishBtn from "./components/WishBtn";
import { useSelector, useDispatch } from "react-redux";
import { incrementFunc, decrementFunc, reset } from "./redux/action/index";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  });

  // const location = useNavigate()

  // location('/login')
  // window.location.assign('/login')

  const dispatch = useDispatch();
  const counter = useSelector((store) => store.AppReducer);
  console.log(counter);

  return (
    <>
      <section className="m-5">
        <span>{counter}</span>
        <button onClick={() => dispatch(incrementFunc())}>+</button>
        <button onClick={() => dispatch(decrementFunc())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <div className="container">
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-lg-3 p-3">
                  <div
                    className="card"
                    style={{ width: "100%", height: "600px" }}
                  >
                    <img
                      src={item.thumbnail}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <WishBtn myProduct={item} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
