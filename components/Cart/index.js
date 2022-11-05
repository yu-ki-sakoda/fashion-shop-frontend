import  Link  from "next/link";
import { useContext } from "react";
import { Badge, Button, Card, CardBody, CardTitle, Col } from "reactstrap";
import { useMedia } from "use-media";
import AppContext from "../../context/AppContext";

const Cart = () => {

  const appContext = useContext(AppContext);
  const {user, cart} = appContext;
  const isWide = useMedia({minWidth:"600px"});

  return (
<>
<div>
  {isWide ? 
  
  ( <div className="max">
      <Card xs="6">
        <CardTitle style={{margin:"auto",padding:"15px 0",fontWeight:"600", fontSize:"25"}}>Shopping Cart</CardTitle>
        <hr style={{margin:"0"}}/>
        <CardBody style={{padding:"15px"}}>

      
     

          <div className="item">
            <small>item：</small>
          </div>

          <div>

          {cart.items ? 
            cart.items.map((item) => {
              if(item.quantity > 0){
                return(

                  <div className="items-one" key={item.id}>

                  <div>
                  <span id="item-name">&nbsp; {item.name}</span>
                  <span id="item-price">&nbsp; ￥{item.price}</span>
                  </div>

                <div className="button">
                  <Button style={{fontSize:"8px",margin:"0 4px 0 16px",padding:"3px",border:"solid 1px #333"}} color="none" onClick={() => appContext.addItem(item)}>+1</Button>
                  <Button style={{fontSize:"8px",padding:"3px",border:"solid 1px #333"}} color="none"  onClick={() => appContext.removeItem(item)}>-1</Button>
                  <span id="item-quantity">{item.quantity}つ</span>
                </div>

              </div>
                   
                )
              }
            }) : null}


          
        
            <div>

              <Badge style={{width:"100%",padding:"10px",margin:"20px 0"}} color="light">
                <div className="total">
                <h5>total：</h5>
                <h4>￥{cart.total}</h4>
                </div>
              </Badge>

              <div className="order">
                
                  <Button style={{width:"100%"}}>
                    <a href="/check">注文確定</a>
                  </Button>
                
              </div>

            </div>
          </div>

        
        </CardBody>
      </Card>

      <style jsx>
        {`
        
        .total{
          display:flex;
          margin-right:15px;
          align-items:center;
        }

        .item{
          font-size:18px;
        }
        .items-one{
          font-size:16px;
        }

        .button{
          margin-bottom:5px;
          padding-bottom:5px;
          border-bottom:dotted 1px #333;
        }

        #item-quantity{
          align-items:center;
          font-size:14px;
          padding:6px;
        }

        .order a{
          color:white;
          text-decoration:none;
          
        }

        .order {
          opacity:0.8;
        }

        .order:hover{
          opacity:1;
        }
    
        `}
      </style>
  </div>) :
  
  ( <div className="min">

        <Card  style={{margin:"0 auto 30px", width:"300px"}}>
        <CardTitle style={{margin:"auto",padding:"15px 0",fontWeight:"600", fontSize:"25"}}>Shopping Cart</CardTitle>
        <hr style={{margin:"0"}}/>
        <CardBody style={{padding:"20px"}}>


          <div className="item">
            <small>item：</small>
          </div>

          <div>

          {cart.items ? 
            cart.items.map((item) => {
              if(item.quantity > 0){
                return(
          
           <div className="items-one" key={item.id}>

            <div>
                <span id="item-name">&nbsp; {item.name}</span>
                <span id="item-price">&nbsp; ￥{item.price}</span>
            </div>

       

              <div className="button">
                <Button style={{fontSize:"9px",margin:"0 4px 0 16px",padding:"4px",border:"solid 1px #333"}} color="none" onClick={() => appContext.addItem(item)}>+1</Button>
                <Button style={{fontSize:"8px",padding:"3px",border:"solid 1px #333"}} color="none"  onClick={() => appContext.removeItem(item)}>-1</Button>
                <span id="item-quantity">{item.quantity}つ</span>
              </div>

            </div>

)
}
}) : null}


            
            <div>


              <Badge style={{width:"100%",padding:"10px",margin:"20px 0"}} color="light">
                <div className="total">
                <h5>total：</h5>
                <h4>￥{cart.total}</h4>
                </div>
              </Badge>

              <div> 
                  <Button style={{width:"100%"}}>
                    <a href="/check">注文確定</a>
                  </Button>
              </div>

            </div>
           </div>

        
        </CardBody>
      </Card>
      

      <style jsx>
        {`
        
        .total{
          display:flex;
          margin-right:15px;
          align-items:center;
        }
        
        .item{
          font-size:18px;
        }
        .items-one{
          font-size:16px;
        }

        .button{
          margin-bottom:5px;
          padding-bottom:5px;
          border-bottom:dotted 1px #333;
        }

        #item-quantity{
          align-items:center;
          font-size:14px;
          padding:6px;
        }
        
        .order a{
          color:white;
          text-decoration:none;
          
        }

        .order {
          opacity:0.8;
        }

        .order:hover{
          opacity:1;
        }
    
        `}
      </style>
  </div>)}
</div>
 

</>
    
  );
}

export default Cart;