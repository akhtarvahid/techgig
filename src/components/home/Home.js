import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/auth";
import { Logout, Loading } from "../common/constants";
import { useNavigate } from "react-router-dom";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useFetch from "../hooks/useFetch";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadMoreRef, page } = useInfiniteScroll();
  const { loading, state } = useFetch(page);

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  const loadingStyle = { display: true ? "block" : "none" };
  if (loading) <h1 style={loadingStyle}>{Loading}</h1>;

  return (
    <div className="main-listing">
      <header className="main-listing__heading">
        <button onClick={handleLogout}>{Logout}</button>
      </header>
      <div className="main-listing__body">
        <div className="cards">
          {state.photos?.map((user) => (
            <div className="cards__image">
              <img
                key={`albumId:${user.albumId} + id:${user.id}`}
                src={user.url}
                alt={user.title}
              />
            </div>
          ))}
        </div>
        <div className="loadmore" ref={loadMoreRef}>
          <h1 style={loadingStyle}>{Loading}</h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
