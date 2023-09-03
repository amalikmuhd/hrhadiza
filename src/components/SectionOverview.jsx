import OVERVIEW_DATA from '../data/overviewData';

const SectionOverview = () => {
  return (
    <section className="mediaContainer">
      {OVERVIEW_DATA.map((item) => (
        <div className="mediaItem" key={item.id}>
          <img alt="Over" src={require(`../assets/${item.image}`)} className="image" />
          <h3 className="mt-4 text-lg font-bold text-gray-600 sm:text-xl">{item.title}</h3>
          <p className="mt-2 max-w-sm text-gray-400">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default SectionOverview;
