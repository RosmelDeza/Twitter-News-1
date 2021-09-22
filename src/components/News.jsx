import React, { Fragment } from "react";

function News({ data }) {
  return (
    <Fragment>
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div
          className="card mb-2 bg-gradient-dark"
          style={{
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "black",
          }}
        ><a href={data.url[0]}>
          <img className="card-img-top" src={data.img} height="350" />
          </a>
          <div className="card-img d-flex flex-column justify-content-end">
            <div
              className="card-text pt-3 pr-3 pl-3"
              style={{
                color: "#000000",
                backgroundColor: "white",
                opacity: "0.8",
                textAlign: "justify",
                height: "150px",
                borderTop: "2px solid #000000",
                overflow: "auto",
              }}
            >
              <h5 className="card-title" style={{ textTransform: "uppercase" }}>
                {data.category} {" "}
                <a href={data.url[1]}>
                  <i
                    class="fab fa-twitter"
                    style={{
                      color: "#00acee",
                      borderColor: "white",
                    }}
                  ></i>
                </a>
              </h5>
              <p className="card-text">
                <b>{data.title}</b> <br />
                <p className="text">
                  Fuente: {data.name}
                  <p className="text float-right">{data.date}</p>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default News;
