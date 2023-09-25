import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
