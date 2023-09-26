import Banner from "../Banner/Banner";
import Categories from "../Categorys/Categories";

const Home = () => {
  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZLtGs6c/download.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-5"></div>
        <Banner></Banner>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
