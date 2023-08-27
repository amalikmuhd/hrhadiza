/* eslint-disable jsx-a11y/iframe-has-title */

import ReactPlayer from 'react-player';

// import videoo from '../assets/video.mp4'

const Location = () => {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 my-6" style={{ backgroundColor: '#16213e' }}>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          {/* <p className="text-1xl font-bold text-primary-light3 md:text-1xl mb-4 uppercase">Location</p> */}
          {/* <h2 className="text-6xl font-bold text-gray-900 md:text-3xl">Gwarinpa</h2> */}

          <p className=" text-5xl hidden italic font-bold text-white md:mt-4 md:block text-left">
            let your creativity run wild and explore
          </p>
          <p className=" text-5xl hidden text-white md:mt-4 md:block text-left">
            let your creativity run wild and expore the mesmerizing wolrd of resin from the comfort of your home.
          </p>
        </div>
      </div>

      <div className="h-full w-full object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]">
        {/* <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/watch?v=CEsse4w3Ytg"
          frameborder="0"
          allowfullscreen
        ></iframe> */}
        {/* <video class="w-full" controls>
          <source src="../assets/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </source>
        </video>
        <p>Heldwceihofjaliwjn</p> */}

        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        {/* <ReactPlayer url="../assets/video.mp4" height="100%" controls={true} /> */}
      </div>

      {/* <div class="w-full sm:w-1/2 md:w-1/3 h-0 relative">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/watch?v=CEsse4w3Ytg"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p>adasdasas</p>
      </div> */}

      {/* <img
        alt="Map"
        src={Map}
        // className="h-56 w-full object-cover sm:h-full"
        className="h-full w-full object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        width={300}
        height={300}
      /> */}
    </section>
  );
};

export default Location;
