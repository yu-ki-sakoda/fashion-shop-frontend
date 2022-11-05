import  Link  from "next/link";
import { Button, Card, CardBody, CardImg, CardTitle, Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import {gql} from "apollo-boost"
import {useQuery} from "@apollo/react-hooks"
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Cart from "../components/Cart";
import useMedia from "use-media";
import AppContext from "../context/AppContext";
import Login from "./login";



const ItemQuery = gql`
 query ($id : ID!) {
  fashion(id : $id){
    id
    name
    items{
      id
      name
      brand
      price
      image{
        url
      }
    }
  }  
 }
`

const Fashions = (props) => {

  const appContext = useContext(AppContext);
  const router = useRouter();
  const isWide = useMedia({minWidth:"600px"});
  const {user} = useContext(AppContext);

  const {data, loading, error} = useQuery(ItemQuery,
    {variables:{id: router.query.id}});

    console.log(data);

  if(error) return "ページの読み込みに失敗しました";

  if(loading) return <h1>ローディング....</h1>;
  
  if(data){
    const { fashion } = data;

   

    return (
      <>


      <h1 style={{margin:"30px 0"}}>{fashion.name}</h1>



      <Row>
      
        {fashion.items.map((fas) => (
       <Col xs="6" sm="3" style={{padding:"0",}} key={fas.id}>
      
      <Card style={{margin:"0 5px 20px 5px",padding:"15px 15px 15px 15px"}}>
      <CardImg src={`${process.env.NEXT_PUBLIC_API_URL}${fas.image.url}`} top={true} style={{height:"auto",width:"auto",}} />
      <div className="title">
      <CardTitle style={{margin:"5px auto",fontSize:"16px", paddingTop:"5px"}}>item：{fas.name}</CardTitle>
      <CardTitle style={{margin:"5px auto",fontSize:"16px", paddingTop:"5px"}}>brand：{fas.brand}</CardTitle>
      <CardTitle style={{margin:"5px auto",fontSize:"16px", paddingTop:"5px"}}>price：￥{fas.price}</CardTitle>
      </div>
      <div className="btn">
        {user ? (<Button outline style={{width:"100%",margin:"20px auto 0 auto",}} 
         onClick={() => appContext.addItem(fas)}>
        カートに入れる
        </Button>) : (
        <Button outline style={{width:"100%",margin:"20px auto 0 auto",}}>
        <a href="/login">
        カートに入れる
        </a>
        </Button>)}
      </div>
      
      </Card>
    
      </Col>

        ))}
       
        <style jsx>
          {`
         .title{
          margin:15px auto 0 auto;
       
         }
          .search{
            margin:20px;
            width:500px;
          }
          {
            a{
              color:#333;
            }
          }
          a:link{
            text-decoration:none;
            color:#333;
          }
      
          a:hover{
            opacity:0.7;
          }

          .cart{
            margin:0 auto;
          }
          .btn{
            text-align:center;
            padding:0;
          }
          `}
        </style>
        
        <>
        {isWide ? (<div>
        <Col xs="12" style={{padding:0}}>
        <div>
          <Cart />
        </div>
        </Col>
        </div>) : (
          
        <div className="cart">
          <Cart />
        </div>)}
        
        </>
        
  
      </Row>

      </>
    );

  } else {
    return <h1>見つかりませんでした</h1>
  }

  
}

export default Fashions;