import React, { useContext } from "react";
import Head from "next/head"
import {Nav, NavItem,Container} from "reactstrap"
import Link from "next/link"
import AppContext from "../context/AppContext";
import useMedia from "use-media";


const Layout = (props) => {

  const {user,userOut} = useContext(AppContext);

  const isWide = useMedia({minWidth:"600px"}); 

  
  return (
    <div>
     <Head>
      <title>fashion site</title>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
     </Head>
     <header>
      <style jsx>
        {`
        a{
          color:white;
        }

        .nav-link{
          padding:0;
          margin:0 10px 0 0;
        }

        .nav-links{
          font-size:12px;
          padding:0;
          margin:0 5px 0 0;
        }
        .min{
          display:flex;
          align-items:center;
          justify-contents:space-between;
          width:100%;
        }

        .max{
          display:flex;
          align-items:center;
          justify-contents:space-between;
          width:100%;
        }

        .log{
          display:flex;
          align-items:center;
        }

        .top-name{
          font-size:16px;
        }


        `}
      </style>

     <Nav className="navbar navbar-dark bg-dark">    
      <>

      {isWide ? 
      (
      <div className="max">
  
      <NavItem>
         <Link href="/"><a className="navbar-brand" >Fashion Online Shop</a></Link>
      </NavItem>
    

        <NavItem className="ml-auto">
        {user ? (<Link href="/"><a className="nav-link" onClick={() => {userOut();}}>ログアウト</a></Link>) : (<Link href="/login"><a className="nav-link">ログイン</a></Link>)}
      </NavItem >
      <NavItem>
        {user ? (<a style={{color:"white"}}>ユーザー名&nbsp;:&nbsp;{user.username}</a>) : ( <Link href="/register"><a className="nav-link">登録</a></Link>)}
      </NavItem>
      </div>
      ) 
      : 
      (
      <div className="min">
        <NavItem>
         <Link href="/"><a className="navbar-brand top-name">Fashion Online Shop</a></Link>
        </NavItem>
        <NavItem className="ml-auto">
        {user ? (<Link href="/"><a className="nav-links" onClick={() => {userOut();}}>ログアウト</a></Link>) : (<Link href="/login"><a className="nav-links">ログイン</a></Link>)}
      </NavItem >
      <NavItem>
        {user ? (<a className="nav-links" style={{color:"white"}}>ユーザー名&nbsp;:&nbsp;{user.username}</a>) : ( <Link href="/register"><a className="nav-links">登録</a></Link>)}
      </NavItem>
      </div>
      )}
      
      </>
     </Nav>

     <Container>{props.children}</Container>
     </header>

     <footer>
     <Nav className="navbar navbar-dark bg-dark">
     <NavItem>
         <Link href="/"><a className="navbar-brand" >Fashion Online Shop</a></Link>
      </NavItem>
      </Nav>

      <style jsx>
        {`
        footer{
          position:fixed;
          width:100%;
          bottom:0;
        }
        footer a{
          font-size:12px;
        }
        `}
      </style>
     </footer>
    </div>
    );
      }

export default Layout;