import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("donationData.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-40 my-3">
      {donations.map((donation) => (
        <Category key={donation.id} donation={donation}></Category>
      ))}
    </div>
  );
};

export default Categories;
