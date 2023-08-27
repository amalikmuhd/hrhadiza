import OVERVIEW_DATA from '../data/overviewData';

const SectionOverview = () => {
  return (
    <section className="text-white">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8  mx-auto">
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {OVERVIEW_DATA.map((item) => (
            <div className="block" key={item.id}>
              <img alt="Over" src={require(`../assets/${item.image}`)} className="w-full object-contain" />
              <h3 className="mt-4 text-lg font-bold text-gray-600 sm:text-xl">{item.title}</h3>
              <p className="mt-2 max-w-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOverview;
