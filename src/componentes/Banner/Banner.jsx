import { useEffect } from "react";
import { useState } from "react";

const Banner = () => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    fetch("donationData.json")
      .then((res) => res.json())
      .then((data) => setInput(data));
  }, []);
  console.log(input);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-5">
        I Grow By Helping People In Need
      </h2>
      <div className="join flex justify-center mt-5">
        <form onSubmit={handleSearch} className="flex">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="input input-bordered join-item w-full max-w-xs"
            placeholder="Search here...."
          />
          <button className="btn btn-error join-item -r-full text-white block">
            <input type="submit" value="Search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
