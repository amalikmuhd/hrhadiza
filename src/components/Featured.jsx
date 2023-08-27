import Slide from "../assets/slide.png";
import Groups from "../assets/groups.svg";

const Featured = () => {
  return (
    <div className="grid bg-primary-lightest px-6">
      <div className="h-full w-full rounded-lg flex justify-center">
        <img src={Slide} alt="Slide" width={1830} height={889} />
      </div>

      <div className="flex justify-center items-center mt-12 mb-8 gap-2">
        <img src={Groups} alt="logo2" width={100} height={40} />
        <p>Embrace the future of work - Calling all startups, remote workers, entrepreneurs and freelancers to join in now.</p>
      </div>
    </div>
  );
};

export default Featured;
