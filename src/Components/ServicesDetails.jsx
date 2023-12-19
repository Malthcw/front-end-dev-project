const ServicesDetails = (props) => {
  return (
    <div className={props.cName}>
      <div className="des-text">
        <h2>{props.heading}</h2>

        <p>{props.text}</p>
        <button>Learn More</button>
      </div>
      <div className="image">
        <img alt="img" src={props.img1} />
      </div>
    </div>
  );
};

export default ServicesDetails;
