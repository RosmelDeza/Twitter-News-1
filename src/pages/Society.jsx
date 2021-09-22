import React , {Fragment} from 'react'
import Data from './results/sociedad.json'
import News from '../components/News';

function Society() {
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

export default Society
