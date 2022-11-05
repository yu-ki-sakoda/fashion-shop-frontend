import { useContext, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import AppContext from "../context/AppContext";
import { registerUser } from "../lib/auth";





const register = () => {

  const appContext = useContext(AppContext);
  const [data, setData] = useState({username:"", email:"", password:""});

  
  const handleRegister = () => {
    registerUser(data.username,data.email,data.password).then((res) => {
      appContext.setUser(res.data.user);
      console.log(res.data.user);
    }).catch((err) => console.log(err));
  }

  return (
    <Container>
      <Row>
        <Col>
        <div className="paper">
          <div className="header">
            <h2>Sign Up</h2>
          </div>
        </div>
        <section className="wrapper">
          <Form>
            <fieldset>
              <FormGroup>
                <Label>username：</Label>
                <Input type="text" name="username" style={{height:50, fontSize:"1.2rem"}} onChange={(e) => setData({...data, username: e.target.value})} />
              </FormGroup>
              <FormGroup>
                <Label>e-mail：</Label>
                <Input type="email" name="email" style={{height:50, fontSize:"1.2rem"}} onChange={(e) => setData({...data, email: e.target.value})} />
              </FormGroup>
              <FormGroup>
                <Label>password：</Label>
                <Input type="password" name="password" style={{height:50, fontSize:"1.2rem"}} onChange={(e) => setData({...data, password: e.target.value})} />
              </FormGroup>
              <span>
                <a href="">
                <small>
                  パスワードをお忘れですか
                </small>
                </a>
              </span>
            </fieldset>

            <Button style={{float:"right", width:"120px"}} onClick={() => {handleRegister();}}>Sign Up</Button>
          </Form>

        </section>
        </Col>
      </Row>
      <style jsx>
        {`
           .paper{
            text-align:center;
            margin-top:50px;
           }
          .header{
            width:100%;
            margin-buttom:30px;
          }
          .wrapper{
            padding:10px 30px 20px 30px;
          }
        }
        `}
      </style>
    </Container>
   
  );
}

export default register;