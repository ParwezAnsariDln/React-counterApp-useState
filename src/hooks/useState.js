import { useState } from "react";
import "./style.css";

const Counter = () => {
    const [myNum, setMyNum] = useState(0);


    return (
        <>
            <div className="main-div">
                <div className="counter-div">
                    <div>
                        <h1 className="counter">{myNum}</h1>
                    </div>
                    <div className="btn">
                        <button onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>DEC</button>
                        <button onClick={() => setMyNum(myNum + 1)}>INC</button>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Counter;