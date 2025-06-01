import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/molecules/Navbar";
import style from "@/components/molecules/Navbar.module.css";
import Carrusel from "@/components/organisms/carrusel";
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
    //import('bootstrap');
  }, []);

  const [hover, setHover] = useState(false);

  return (
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
      />
      <div className={`container-fluid p-0 m-0 ${style.idk}`}>
        <div className="row align-items-center gx-0" style={{ marginTop: "28px" }}>
          {/* Logo - izquierda */}
          <div className="col-6 col-lg-4 d-flex justify-content-start ps-4 order-1 order-lg-1">
            <img src="/img/logomax.png" alt="Logo" style={{ height: "40px" }} />
          </div>

          {/* Searchbar, user y favoritos - derecha */}
          <div className="col-6 col-lg-4 d-flex justify-content-end pe-4 order-2 order-lg-3">
            <h1 style={{ color: "white" }}>algo mas</h1>
          </div>

          {/* Navbar - centro */}
          <div className="col-12 col-lg-4 d-flex justify-content-center order-3 order-lg-2 navbar-up-desktop " style={{ marginTop: '10px', color: "white", fontWeight: "bolder" }}>
            <Navbar /> 
          </div>
        </div>
      </div>
      <div >
        <Carrusel /> {/* fokin jel me duele la espalda */}
      </div>
    </center>

  );
}
