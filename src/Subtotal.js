import React from "react"
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal(){
    return(
        <div
            className="subtotal">
                <CurrencyFormat renderTexxt={(value)=>(
                 <>
                    <p>
                        Subtotal (0 items):
                        <strong>{` ${value}`}</strong>
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                 </>   
                )}

                decimalScale= {2}
                value={0}
                displayType={"test"}
                thousandSeparator={true}
                prefix={"#"}
                />
        </div>
    )
}

export default Subtotal;