import  Link  from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import {gql} from "apollo-boost"
import {useQuery} from "@apollo/react-hooks"


const query = gql`
{
  fashions{
  id
  name
  image{
    url
  }
  }
}
`


const FashionList = (props) => {
  
  const {data, loading, error} = useQuery(query);
  

  if(error) return "ページの読み込みに失敗しました";

  if(loading) return <h1>ローディング....</h1>;
  
  if(data){

    const searchQuery = data.fashions.filter((fashion) => fashion.name.toLowerCase().includes(props.search))

    return (
      <Row>
        {searchQuery.map((fas) => (

       <Col xs="6" sm="3" style={{marginTop:"40px",padding:"0",}} key={fas.id}>
      <Link href={`/fashions?id=${fas.id}`} as={`/fashions/${fas.id}`}>
      <a> 
      <Card style={{margin:"0 5px 20px 5px",padding:"10px 10px 0 10px"}}>
      <CardImg src={`${process.env.NEXT_PUBLIC_API_URL}${fas.image[0].url}`} top={true} style={{height:"auto",width:"auto",}} />
      <CardTitle style={{margin:"5px auto",fontSize:"18px", paddingTop:"5px"}}>{fas.name}</CardTitle>
      </Card>
      </a>
      </Link>
      </Col>

        ))}
       
        <style jsx>
          {`
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
          `}
        </style>
  
      </Row>
    );

  } else {
    return <h1>見つかりませんでした</h1>
  }

  
}

export default FashionList;