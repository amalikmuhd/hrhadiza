import { Link } from 'react-router-dom';

const BannerOverview = () => {
  return (
    <section className="secondRow">
      <Link to={'/contact'} className="buttonContainer">
        Click here to proccess
      </Link>

      <h1 className="secondRowdescriptionContainer">
        Uncover the secrets of the second beauty of a treasure called resin art. Learn the step by step process, tips and
        techniques to start your resin art journey today
      </h1>
    </section>
  );
};

export default BannerOverview;
