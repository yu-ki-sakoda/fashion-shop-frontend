import { useState } from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap"
import useMedia from "use-media";
import FashionList from "../components/FashionList";

const index = () => {

  const isWide = useMedia({minWidth:"600px"});

  const [query, setQuery] = useState("");
  return (
    <div className="container-fluid">
      <Row>
        <Col>
        {isWide ? (<div className="search">
        <InputGroup>
        <InputGroupText>探す</InputGroupText>
        <Input placeholder="何をお探しですか？" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}/>
        </InputGroup>
        </div>) : 
        (<div className="search2">
        <InputGroup style={{width:"300px",textAlign:"center"}}>
        <InputGroupText style={{ fontSize:"10px"}}>探す</InputGroupText>
        <Input style={{ fontSize:"10px"}} placeholder="何をお探しですか？" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}/>
        </InputGroup>
        </div>)}
        
        <FashionList search={query}/>
        
        </Col>
      </Row>

      <style jsx>
        {`
        .search{
          margin:20px;
          width:500px;
        }
        
        .search2{
          margin-top:20px;
        }

        .container{
          margin:0 160px;
          padding:0;
        }
    
        `}

      </style>

    </div>
  );
}

export default index;