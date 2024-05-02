import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./home.scss";
import { v4 as uuidv4 } from "uuid";
import { logoutUser } from "../../actions/auth";
import { Logout, Loading } from "../common/constants";
import { useNavigate } from "react-router-dom";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadMoreRef, page } = useInfiniteScroll();
  const { loading, state } = useFetch(page);

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  if (loading) <h1 style={loadingStyle}>{Loading}</h1>;

  const loadingStyle = { display: true ? "block" : "none" };
  return (
    <>
      <div className="main-listing">
        <header className="main-listing__heading">
          <button onClick={handleLogout}>{Logout}</button>
        </header>
        <div className="main-listing__body">
          <div className="cards">
            {state.photos?.map((user) => (
              <div className="cards__image">
                <img key={uuidv4()} src={user.url} alt={user.title} />
              </div>
            ))}
          </div>
          <div className="loadmore" ref={loadMoreRef}>
            <h1 style={loadingStyle}>{Loading}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
