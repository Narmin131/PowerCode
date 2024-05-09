import React, { useEffect, useState } from "react";
import WishBtn from "./components/WishBtn";

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
  return (
    <>
      <section>
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
