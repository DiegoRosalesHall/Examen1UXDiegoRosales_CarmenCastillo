  import Head from "next/head";
  import Image from "next/image";
  import { Geist, Geist_Mono } from "next/font/google";
  import styles from "@/styles/Home.module.css";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { useEffect, useState } from 'react';
  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export default function Home() {
    //BackEnd
     useEffect(() => {
    import('bootstrap');
  }, []);

  const [hover, setHover] = useState(false);

    return(
      //FrontEnd
      
      <center>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/img/fondo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          }}
        >
        </div> 

        <div className="container-fluid p-0 m-0">
          <div className="row m-0">
            <div className="col-auto p-0 " style={{ marginLeft: '4vw', marginTop:'28px'} } >
              <img
              src = "/img/logomax.png"
              width={"110px"}
              height={"30px"}
              sizes="30px"
              className="img-fluid"
              />
            </div>
            <div className = "col">
              <h1 style={{color: "white"}}> aqui ira navbar</h1>
            </div>
            <div className = "col">
              <h1 style={{color: "white"}}> aqui iran  ajustes</h1>
            </div>
          </div>
        </div>
      </center>
    );
  }
