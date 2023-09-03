/* eslint-disable jsx-a11y/iframe-has-title */

const Location = () => {
  return (
    <section className="firstRow">
      <div className="leftRow">
        <p className="leftRowTitle">let your creativity run wild and explore</p>
        <p className="leftRowSubtitle">Expore the mesmerizing world of resin from the comfort of your home.</p>
      </div>

      <div className="rightRow">
        <iframe
          width="560"
          height="315"
          src={'https://youtu.be/17DMn8SI-rE?si=4JjCvpUy1n0Iw23d'}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="video"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
