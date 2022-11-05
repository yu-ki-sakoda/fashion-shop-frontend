import  Link  from "next/link";

const finish = () => {
  return (

    <div className="finish">
      <div className="complete"> 
        <span>注文が完了しました</span>
      </div>
      <div className="link">
      <Link href="/">
        <a>shoppingを続ける→</a>
      </Link>
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
         
          a{
            color:#333;
            opacity:0.7;
          }
          a:hover{
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