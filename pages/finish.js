

const finish = () => {

  const handleLink = () => {
    window.location.href="/";
  }



  return (

    <div className="finish">
      <div className="complete"> 
        <span>注文が完了しました</span>
      </div>
      <div className="link">
      <button onClick={ () => handleLink()}>
        shoppingを続ける→
      </button>
      </div>
      
      <style jsx>
        {
          `
          .finish{
            text-align:center;
            margin:0 auto;
          }

          .container{
            padding:0 30px;
          }

          .complete{
            display:inline-block;
            padding:30px 10px;
            background-color:lightgray;
            opacity:0.8;
            margin:60px 0 10px;
            border-radius:4px;
            width:100%;
            text-align:center;
          }
          .link{
            display:flex;
            align-items:flex-end;
            justify-content:flex-end;
          }

          button{
            color:#333;
            opacity:0.7;
            cursor:pointer;
            padding:5px;
            border-radius:3px;
          }
         
          button:hover{
            opacity:1;
          }
          }



          
          `
        }
      </style>
    </div>
    
  );
}

export default finish;