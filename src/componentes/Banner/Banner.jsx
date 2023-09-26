const Banner = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-5">
        I Grow By Helping People In Need
      </h2>
      <div className="join flex justify-center mt-5">
        <input
          className="input input-bordered join-item"
          placeholder="Search here...."
        />
        <button className="btn btn-error join-item -r-full text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
