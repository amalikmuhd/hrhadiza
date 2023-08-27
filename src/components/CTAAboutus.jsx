import { Link } from 'react-router-dom';

const CTAAboutus = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-3xl font-bold text-gray-900 md:text-3xl">About us, our mission and our vision</h2>

          <div className="mt-4 md:mt-8">
            <Link
              to="/contact"
              className="inline-block rounded bg-primary-light3 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-light1 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <p className="text-1xl font-bold text-primary-light3 md:text-1xl mb-4 uppercase">About Us</p>
          <p className=" text-gray-500 md:mt-4 md:block text-left">
            BoldSpace is a vibrant community of like-minded entrepreneurs; We provide a supportive environment where members
            benefit from coworking by sharing knowledge, ideas, connections and forming long lasting friendships as well as
            opportunities to grow their respective businesses in comfortable work stations, designed to meet specific individual
            needs.
          </p>
          <p className="text-1xl font-bold text-primary-light3 md:text-1xl mb-4 uppercase mt-4">Our Mission</p>
          <p className=" text-gray-500 md:mt-4 md:block text-left">
            From brainstorming to breakthrough! join our thriving community of teams, entrepreneurs, remote workers & freelancers
            to access productivity-enhancing workspaces that prioritize your privacy and comfort.
          </p>
          <p className="text-1xl font-bold text-primary-light3 md:text-1xl mb-4 uppercase mt-4">Our Vision</p>
          <p className=" text-gray-500 md:mt-4 md:block text-left">
            We are a collaborative and inclusive coworking space that nurtures innovation, growth & success by providing a serene
            environment, embodied with the best amenities that guarantees your total satisfaction and worthwhile stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAAboutus;
