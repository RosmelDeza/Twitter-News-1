import React, { useState, useEffect, Fragment } from "react";
import Data from "./results/inicio.json";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Fragment>
      <div className="card card-success">
        <div className="card-body bg-white">
          <div className="row">
            {/*Zona izquierda*/}
            <div className="col-xl-3">
              {/*Noticia 2*/}
              <div
                className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}
              >
                <a href={Data["news"][1].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][1].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                </a>
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto"
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][1].category}{" "}
                      <a href={Data["news"][1].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][1].title}</b> <br />
                      <p className="text" >Fuente: {Data["news"][1].name}
                    <p className="text float-right" >{Data["news"][1].date}</p>
                    </p>
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 4*/}
              <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
              <a href={Data["news"][3].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][3].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                </a>
                {/*Parte izquierda superior*/}
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",                    
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][3].category}{" "}
                      <a href={Data["news"][3].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][3].title}</b> <br />
                      <p className="text" >Fuente: {Data["news"][3].name}
                    <p className="text float-right" >{Data["news"][3].date}</p>
                    </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 1*/}
            <div className="col-md-12 col-lg-6 col-xl-6">
              
              <div className="card mb-2" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
              <a href={Data["news"][0].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][0].img}
                  alt="Dist Photo 2"
                  height="622"
                />
                 </a>
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",
                      textAlign: "justify",
                      height: "190px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                      scrollbarColor: "red"
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][0].category}{" "}
                      <a href={Data["news"][0].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <h5 className="card-text" >
                      <b>{Data["news"][0].title}</b>
                    </h5>
                    <p className="text" >Fuente: {Data["news"][0].name}
                    <p className="text float-right" >{Data["news"][0].date}</p>
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
            {/* NOTICIA 3*/}
            <div className="col-md-12 col-lg-6 col-xl-3">
              <div className="card mb-2" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
              <a href={Data["news"][2].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][2].img}
                  alt="Dist Photo 3"
                  height="250"
                />
                </a>
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][2].category}{" "}
                      <a href={Data["news"][2].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][2].title}</b> <br />
                      <p className="text" >Fuente: {Data["news"][2].name}
                    <p className="text float-right" >{Data["news"][2].date}</p>
                    </p>
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 5*/}
              <div className="card mb-2" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
              <a href={Data["news"][4].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][4].img}
                  alt="Dist Photo 3"
                  height="250"
                />
                </a>
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][4].category}{" "}
                      <a href={Data["news"][5].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][4].title}</b> <br />
                      <p className="text" >Fuente: {Data["news"][4].name}
                    <p className="text float-right" >{Data["news"][4].date}</p>
                    </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 6*/}
            <div className="col-md-12 col-lg-6 col-xl-4">
              <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
              <a href={Data["news"][5].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][5].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                </a>
                {/*Parte izquierda inferior*/}
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][5].category}{" "}
                      <a href={Data["news"][5].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][5].title}</b> <br />
                      <p className="text" >Fuente: {Data["news"][5].name}
                    <p className="text float-right" >{Data["news"][5].date}</p>
                    </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 7*/}
            <div className="col-md-12 col-lg-6 col-xl-4">
              <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
              <a href={Data["news"][6].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][6].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                </a>
                {/*Parte izquierda superior*/}
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][6].category}{" "}
                      <a href={Data["news"][6].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][6].title}</b> <br />
                      <p className="text" >Fuente: {Data["news"][6].name}
                    <p className="text float-right" >{Data["news"][6].date}</p>
                    </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 8 */}
            <div className="col-md-12 col-lg-6 col-xl-4">
              <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
              <a href={Data["news"][7].url[0]}>
                <img
                  className="card-img-top"
                  src={Data["news"][7].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                </a>
                {/*Parte izquierda superior*/}
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "lightgrey",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][7].category}{" "}
                      <a href={Data["news"][7].url[1]}>
                      <i class="fab fa-twitter" style={{color:"#00acee", borderColor:"white"}}></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][7].title}</b> <br />
                      <p className="text" >Fuente: {Data["news"][7].name}
                    <p className="text float-right" >{Data["news"][7].date}</p>
                    </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
