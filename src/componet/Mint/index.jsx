import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Mint = () => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <div className="mint">
        <div className="container">
          <div className="mint-wrapper">
            <div className="mint-left">
              <img src="./images/mint.gif" alt="" />
            </div>
            <div className="mint-right">
              <div className="mint-title">mint your nft</div>
              <div className="mint-box">
                <div className="total-supply">
                  <h1>total Minted </h1>
                  <div className="total-supply-title">
                    <h1>
                      <span>1</span> / 10000
                    </h1>
                  </div>
                </div>
                <div className="mint-price">
                  <h1>Mint Price</h1>
                  <div className="mint-price-title">
                    <h1>0.05 MATIC</h1>
                  </div>
                </div>
                <div className="buy-nft">
                  <div className="buy-title">
                    <h1>buy</h1>
                  </div>
                  <div className="counter">
                    <div className="counter-increment">
                      <button onClick={() => setCounter(counter >= 100 ? counter : counter + 1)}>
                        <FaPlus />
                      </button>
                    </div>
                    <div className="counter-show">
                      <h1>{counter}</h1>
                    </div>
                    <div className="counter-dicrement">
                      <button
                        onClick={() =>
                          setCounter(counter > 1 ? counter - 1 : counter)
                        }
                      >
                        <FaMinus />
                      </button>
                    </div>
                  </div>
                  {/* <div className="buy-title">
                    <h1> NFT FSGC</h1>
                  </div> */}
                </div>

                <div className="set-counter">
                    <div className="set-counter-title">
                        <h1>set quantity:</h1>
                    </div>
                  <div className="num">
                    <button onClick={() => setCounter(10)}>10</button>
                    <button onClick={() => setCounter(25)}>25</button>
                    <button onClick={() => setCounter(50)}>50</button>
                    <button onClick={() => setCounter(75)}>75</button>
                    <button onClick={() => setCounter(100)}>100</button>
                  </div>
                </div>
                <div className="mint-btn">
                  <button>Mint Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;
