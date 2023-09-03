import { Link } from 'react-router-dom';

const CustomButton = () => {
  return (
    <div className="buttonContainer">
      <Link to={'/contact'} className="title">
        Click here to proccess
      </Link>
    </div>
  );
};

export default CustomButton;
