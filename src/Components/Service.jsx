
import './services.css';
import servicedata from '../Data/serviceData.js';
import ServicesDetails from './ServicesDetails.jsx';

const Services = () => {
  return (
    <div className="services">
      {servicedata.products.map((products) => (
        <div>
          <ServicesDetails
            cName={products.cName}
            heading={products.heading}
            text={products.text}
            img1={products.img1}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
