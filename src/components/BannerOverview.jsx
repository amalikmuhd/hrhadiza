import { Link } from 'react-router-dom';

const BannerOverview = () => {
  return (
    <section style={{ marginTop: '40px' }}>
      <div className="mx-auto max-w-screen-2xl px-4 py-4 lg:flex lg:items-center">
        <div className="mx-auto max-w-full text-center">
          {/* <h1 className="text-xl sm:text-4xl text-white" style={{ marginBottom: '80px' }}>
            Uncover the secrets of the second beauty of a treasure called resin art. Learn the step by step process, tips and
            techniques to start your resin art journey today
          </h1> */}
          {/* <p className="mt-4 mb-4 text-base sm:text-xl/relaxed py-4 text-black-dark" style={{ width: '30%', margin: 'auto' }}>
            Uncover the secrets of the second beauty of a treasure called resin art. Learn the step by step process, tips and
            techniques to start your resin art journey today
          </p> */}

          <Link to={'/contact'} className="bg-blue-400 py-4 px-12 text-white transition hover:bg-blue-600">
            Click here to proccess
          </Link>

          <h1 className="text-xl sm:text-2xl text-white" style={{ marginTop: '60px', width: '50%', margin: 'auto' }}>
            Uncover the secrets of the second beauty of a treasure called resin art. Learn the step by step process, tips and
            techniques to start your resin art journey today
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BannerOverview;
