import { FormGroup, Input, Label } from "reactstrap";
import CardSection from "./CardSection";
import Cookies from "js-cookie"
import AppContext from "../../context/AppContext";
import { useContext, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useMedia from "use-media";

const CheckOutForm = () => {

  const [data, setData] = useState({
    address:"",
    stripe_id:"",
  });

  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")

  const elements = useElements();
  const stripe = useStripe();
  const isWide = useMedia({minWidth:"600px"});

  const handleChange = (e) => {

   const updateItem = (data[e.target.value] = e.target.value);
    setData({...data, updateItem});
  }

const appContext = useContext(AppContext);

const submitOrder = async () => {
  const cardElement = elements.getElement(CardElement);
  const token = await stripe.createToken(cardElement);
  const userToken = Cookies.get("token")

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`,{
    method:"POST",
    headers: userToken && {
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      amount: Number(appContext.cart.total),
      items: appContext.cart.items,
      address:data.address,
      token: token.token.id,
    }),
  });
  
  if(response.ok){
    console.log("注文に成功しました");
    setSuccess("注文に成功しました");
    window.location.href = '/finish';
  }else{
    console.log("注文に失敗しました");
    setError("注文に失敗しました<hr>もう一度お試しください。");
  }
}

  return (
<>
{isWide ? 

( <div className="paper">
      <h5>あなたの情報</h5>
      <hr />
      <FormGroup>
        <div>
          <Label>住所</Label>
          <Input name="address" onChange={(e) => handleChange(e)}/>
        </div>
      </FormGroup>

      <CardSection submitOrder={submitOrder} error={error} />

      <style jsx global>
        {`
        .paper{
          border:1px double lightgray;
          padding:30px;
          margin-top:70px;
          border-radius:3px;
          height:360px;
        }
        .paper h5{
          font-size:18px;
        }
        label {
          color: #6b7c93;
          font-weight: 300;
          letter-spacing: 0.025em;
          font-size:14px;
        }

        .form-half {
          flex: 0.5;
        }
        * {
        box-sizing: border-box;
      }

      button {
        white-space: nowrap;
        border: 0;
        outline: 0;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        color: #333;
        border-radius: 4px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        background-color: #lightgray;
        text-decoration: none;
        -webkit-transition: all 150ms ease;
        transition: all 150ms ease;
      }

       form {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 3px solid #e6ebf1;
          }

          input,
          .StripeElement {
            display: block;
            background-color: #f8f9fa !important;
            margin: 0 0 12px 0;
            max-width: 500px;
            padding: 10px 14px;
            font-size: 16px;
            font-family: "Source Code Pro", monospace;
            box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
              rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
            border: 0;
            outline: 0;
            border-radius: 4px;
            background: white;
          }

        
        `}

      </style>
     

    </div>
    ) : (
      
    <div className="paper">
      <h5>あなたの情報</h5>
      <hr />
      <FormGroup>
        <div>
          <Label>住所</Label>
          <Input name="address" onChange={(e) => handleChange(e)}/>
        </div>
      </FormGroup>

      <CardSection submitOrder={submitOrder} error={error} success={success} />

      <style jsx global>
        {`
        .paper{
          border:1px double lightgray;
          padding:20px;
          border-radius:3px;
          height:320px;
        }
        .paper h5{
          font-size:18px;
        }
        label {
          color: #6b7c93;
          font-weight: 300;
          letter-spacing: 0.025em;
          font-size:14px;
        }

        .form-half {
          flex: 0.5;
        }
        * {
        box-sizing: border-box;
      }

      button {
        white-space: nowrap;
        border: 0;
        outline: 0;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        color: #333;
        border-radius: 4px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        background-color: #lightgray;
        text-decoration: none;
        -webkit-transition: all 150ms ease;
        transition: all 150ms ease;
      }

       form {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 3px solid #e6ebf1;
          }

          input,
          .StripeElement {
            display: block;
            background-color: #f8f9fa !important;
            margin: 0 0 12px 0;
            max-width: 500px;
            padding: 10px 14px;
            font-size: 14px;
            font-family: "Source Code Pro", monospace;
            box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
              rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
            border: 0;
            outline: 0;
            border-radius: 4px;
            background: white;
          }

        
        `}

      </style>
     

    </div>)}
   
  </>
  );
}

export default CheckOutForm;