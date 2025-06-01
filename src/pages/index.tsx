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
  {/* Fondo fijo detrás */}
  <div
    style={{
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

  {/* Fila fija del header */}
  <div
    className="container-fluid p-0 m-0"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 999,
      backgroundColor: "rgba(0, 0, 0, 0.6)"
    }}
  >
    <div className="row align-items-center gx-0" style={{ padding: "10px 0" }}>
      {/* Logo */}
      <div className="col-6 col-lg-4 d-flex justify-content-start ps-4 order-1 order-lg-1">
        <img src="/img/logomax.png" alt="Logo" style={{ height: "40px" }} />
      </div>

      {/* Algo mas */}
      <div className="col-6 col-lg-4 d-flex justify-content-end pe-4 order-2 order-lg-3">
        <h1 style={{ color: "white" }}>algo más</h1>
      </div>

      {/* Navbar */}
      <div className="col-12 col-lg-4 d-flex justify-content-center order-3 order-lg-2 navbar-up-desktop" style={{ marginTop: '10px', color: "white", fontWeight: "bolder" }}>
        <Navbar />
      </div>
    </div>
  </div>

  {/* Espacio para que el contenido de abajo no quede oculto por la barra fija */}
  <div style={{ height: "100px" }}></div>

  {/* Carrusel */}
  <div className="container-fluid p-0 m-0">
    <div className="row align-items-center gx-0">
      <Carrusel />
    </div>
  </div>
</center>

  );
}
