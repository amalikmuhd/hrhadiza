import { Link } from 'react-router-dom';

const CustomButton = () => {
  return (
    <div className="buttonContainer">
      <Link to={'https://wa.link/9cn3c4'} className="title" target="_blank">
        Click here to access
      </Link>
    </div>
  );
};

export default CustomButton;
