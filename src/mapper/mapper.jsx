import './mapper.scss';

const Mapper = ({ data, type }) => {
  const dataToMap = data[type];
  return dataToMap.map((x, key) => {
    return (
      <div className="mapper-container" key={key}>
        <img className={`${x?.sizing}`} src={x.img} />
        <div className="mapper-info">
          <span>
            {x.name}
            <div className="underline-container">
              <span className="underline" />
            </div>
            <div>
              {x?.extra ? (
                <span>
                  {x?.extra ?? x.extra}
                  <br />
                </span>
              ) : (
                <></>
              )}
              <span className="tech">
                {type !== 'skillsData' ? x.technologyUsed : x.yearsUsed}
              </span>
            </div>
          </span>
          {type !== 'skillsData' ? (
            <div className="btn-container">
              <button onClick={() => window.open(x.gitHub)}>Learn More</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  });
};

export default Mapper;
