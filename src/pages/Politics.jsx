import React , {Fragment} from 'react'
import Data from './results/politica.json'
import News from '../components/News';

function Politics() {
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

export default Politics
