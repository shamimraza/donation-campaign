import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonateApplication } from "../utility/localstorage";

const Donation = () => {
  const donations = useLoaderData();

  const [donationApply, setDonationApply] = useState([]);

  useEffect(() => {
    const storedDonationIds = getStoredDonateApplication();
    if (donations.length > 0) {
      const donationApplied = [];
      for (const id of storedDonationIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donations) {
          donationApplied.push(donation);
        }
      }
      console.log(donations);
      setDonationApply(donationApplied);
    }
  }, [donations]);
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mt-9 my-5">
      {donationApply.map((donation) => (
        <div key={donation.id}>
          <span>
            <div
              style={{ backgroundColor: donation.card_bg_color }}
              className="card card-side bg-base-100 shadow-xl "
            >
              <figure>
                <img
                  className="h-52 w-72"
                  src={donation.picture}
                  alt="picture"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <span
                    className="text-white px-2 rounded"
                    style={{ backgroundColor: donation.text_color }}
                  >
                    {donation.category}
                  </span>
                </h2>
                <p style={{ color: donation.text_color }}>
                  {donation.Description}
                </p>
                <p style={{ color: donation.text_color }}>{donation.Price}</p>
                <div className="card-actions">
                  <Link to="/">
                    {" "}
                    <button
                      style={{ backgroundColor: donation.text_color }}
                      className="btn btn-primary text-white"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Donation;
