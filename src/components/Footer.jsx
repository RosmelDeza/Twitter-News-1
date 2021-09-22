import { React, Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <footer className="footer bg-navy text-center ">
        <div className="container p-3 pb-0">
          <div className="text text-center">
            <h6>
              <b>2021 © PROCESAMIENTO DE LENGUAJE NATURAL</b>
            </h6>
          </div>
          {/* <div className="col-md-12 col-lg-6 col-xl-12">
            <div className="text">CONTACTO </div>
            <i
              class="fas fa-phone-alt"
              style={{ paddingTop: "0.3cm", paddingLeft: "0.3cm" }}
            />{" "}
            <i class="fas fa-envelope" style={{ paddingLeft: "5.3cm" }} />{" "}
            <i class="fab fa-github" style={{ paddingLeft: "5.3cm" }}></i>
          </div> */}
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
