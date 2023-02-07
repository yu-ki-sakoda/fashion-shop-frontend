import { Col, Row } from "reactstrap";
import Cart from "../components/Cart/index";
import {loadStripe} from "@stripe/stripe-js"
import CheckOutForm from "../components/Checkout/CheckOutForm"
import { Elements } from "@stripe/react-stripe-js";
import useMedia from "use-media";

const check = () => {
  const stripePromise = loadStripe(
    "pk_test_51LjKcjDGXEv1Ev4pYI1PZVZqqja0lK50RZeP0rlFDdX0bftoinyHOnz6nAnnuMDif9z37D8BIJT2PNrqcnozdPQW00pUT42IVc"
  );
  const isWide = useMedia({minWidth:"780px"});
  return (

    <>

    {isWide ? 
    (
    <Row style={{display:"flex", maxWidth:"800px",margin:"30px auto 0"}}>

    <Col style={{paddingRight:"0px"}}>
    <h1 style={{ textAlign:"center",fontSize:"24px",margin:"20px"}}>
      CheckOut
    </h1>
    <Cart />
    </Col>

    <Col style={{paddingLeft:10}} sm={{size:6, order:2}}>
    <Elements stripe={stripePromise}>
    <CheckOutForm />
    </Elements>
    </Col>
    
   </Row>
   )
    :
  (
    <Row style={{height:"auto"}}>
    <Col sm="4" xs="12" style={{padding:0}}>
    <h1 style={{textAlign:"center", fontSize:"24px",margin:"30px"}}>
      CheckOut
    </h1>
    <Cart />
    </Col>

    <Col sm={{size:4, order:2}} style={{margin:"30px 0 80px 0"}}>
    <Elements stripe={stripePromise}>
    <CheckOutForm />
    </Elements>
    </Col>
    
   </Row>
   )}

   </>
  );
}

export default check;