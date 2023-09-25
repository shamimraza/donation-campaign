import { Link } from "react-router-dom";

const Category = ({ donation }) => {
  const {
    picture,
    card_bg_color,
    category,
    Description,
    category_bg_color,
    text_color,
    id,
  } = donation;
  console.log(donation);
  return (
    <Link to={`/education/${id}`}>
      <div
        style={{ backgroundColor: card_bg_color }}
        className="card card-compact bg-base-100"
      >
        <figure>
          <img className="w-full h-60" src={picture} alt="donate img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span
              style={{ backgroundColor: category_bg_color, color: text_color }}
            >
              {category}{" "}
            </span>{" "}
          </h2>
          <p className="font-semibold" style={{ color: text_color }}>
            {Description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Category;
