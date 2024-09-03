import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum, mulNum, divNum } from "./actions";

function App() {
  const myState = useSelector((state) => state.changeNum);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Arithmetic Counter</h1>
      <h2>Using React & Redux</h2>
      <div className="main">
        <div className="box1">
          <a
            className="plus"
            title="Increment"
            onClick={() => dispatch(incNum())}
          >
            +
          </a>
          <a
            className="minus"
            title="Increment"
            onClick={() => dispatch(decNum())}
          >
            -
          </a>
        </div>

        <div className="inputbox">
          <input
            type="text"
            value={myState}
            name="quantity"
            className="input"
          />
        </div>
        <div className="box2">
          <a
            className="minus"
            title="Increment"
            onClick={() => dispatch(mulNum())}
          >
            *
          </a>

          <a
            className="minus"
            title="Increment"
            onClick={() => dispatch(divNum())}
          >
            /
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
