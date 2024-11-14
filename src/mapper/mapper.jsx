import { useState } from 'react';
import MapperDetails from './mapperDetails/mapperDetails';
import './mapper.scss';

const Mapper = ({ data, type }) => {
  const dataToMap = data[type];
  const [selectedDetail, setSelectedDetail] = useState(null);

  return dataToMap.map((x, key) => {
    return (
      <div key={key} className="mapper-wrapper">
        <div className="mapper-container">
          <img className={`${x?.sizing}`} src={x.img} />
          <div className="mapper-info">
            <span>
              {x.name}
              <div className="underline-container">
                <span className="underline" />
              </div>
              <div>
                {x?.extra && (
                  <span>
                    {x?.extra ?? x.extra}
                    <br />
                  </span>
                )}
                <span className="tech">
                  {type !== 'skillsData' ? x.technologyUsed : x.yearsUsed}
                </span>
              </div>
            </span>
            {type !== 'skillsData' && (
              <div className="btn-container">
                <button onClick={() => setSelectedDetail(key)}>
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
        {selectedDetail === key && (
          <MapperDetails
            key={key}
            setSelectedDetail={setSelectedDetail}
            details={x}
          />
        )}
      </div>
    );
  });
};

export default Mapper;
