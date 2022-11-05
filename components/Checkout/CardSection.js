import {CardElement} from "@stripe/react-stripe-js"
import { Button } from "reactstrap";

const CardSection = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="card-element">クレジット/デビットカード</label>
        <div>
          <fieldset>
            <div className="form-row">
              <div id="card-element" style={{width:"100%"}}>
                <CardElement options={{
                    style: { width: "100%", base: { fontSize: "12px" }},}}/>
              </div>
              <br />
              <div className="order-button-wrapper">
                <Button outline onClick={props.submitOrder}>注文確認</Button>
              </div>
              {props.error ? <div>{props.error}</div> :null}
              
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>
        {`
        .order-button-wrapper{
          display:flex;
          width:100%;
          align-items:flex-end;
          justify-content:flex-end;
          margin-top:10px;
        }
        `}
      </style>
    </div>
  );
}

export default CardSection;