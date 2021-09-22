import React, { Fragment } from "react";
import News from "../components/News";
import Data from "./results/entretenimiento.json";
function Entertainment() {
  const data = Data["news"]
  return (
    <Fragment>
      <div className="card card-success">
        <div className="card-body">
          <div className="row">
            {data.map((item, index) => (
              <News data={item} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Entertainment;
