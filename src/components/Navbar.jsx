import React, { Fragment } from "react";

function Navbar() {
  var meses = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  );
  var diasSemana = new Array(
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  );
  var f = new Date();
  var displayDate = `${diasSemana[f.getDay()]}${","} ${f.getDate()} ${"de"} ${
    meses[f.getMonth()]
  } ${"del"} ${f.getFullYear()}`;

  return (
    <Fragment>
      <header
        className="header navbar navbar-dark bg-navy"
        style={{ height: "2.3cm"}}
      >        
        <div className="container">
          <h1>   
          <img src="../dist/img/Tw-News.png" height={80} />
            <b>Twitter News</b>
          </h1>
          <h5>
            {displayDate}
          </h5>
        </div>
      </header>
      <nav
        className="header navbar navbar-expand navbar-dark bg-gray"
        style={{ height: "1cm", alignContent:"center" , paddingLeft:"5.5cm"}}
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="/cusco" className="nav-link">
                  Cusco
                </a>
              </li>
              <li className="nav-item">
                <a href="/salud" className="nav-link">
                  Salud
                </a>
              </li>
              <li className="nav-item">
                <a href="/economia" className="nav-link">
                  Economía
                </a>
              </li>
              <li className="nav-item">
                <a href="/politica" className="nav-link">
                  Política
                </a>
              </li>
              <li className="nav-item">
                <a href="/deporte" className="nav-link">
                  Deporte
                </a>
              </li>
              <li className="nav-item">
                <a href="/ciencia" className="nav-link">
                  Ciencia
                </a>
              </li>
              <li className="nav-item">
                <a href="/sociedad" className="nav-link">
                  Sociedad
                </a>
              </li>
              <li className="nav-item">
                <a href="/espectaculos" className="nav-link">
                  Espectáculos
                </a>
              </li>
              <li className="nav-item">
                <a href="/entretenimiento" className="nav-link">
                  Entretenimiento
                </a>
              </li>
            </ul>
            {/* SEARCH FORM */}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
