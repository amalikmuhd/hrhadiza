import { Link } from 'react-router-dom';

const CustomButton = () => {
  return (
    <div className="buttonContainer">
      <Link to={'https://wa.link/l046yq'} className="title" target="_blank">
        Click here to proccess
      </Link>
    </div>
  );
};

export default CustomButton;
