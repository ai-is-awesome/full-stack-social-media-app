import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularProfiles } from "../../services/getUserData";
import { getImageFallbackURL, getUserProfilePageURL } from "../../utils";
import "./ActiveUsers.scss";

export default function ActiveUsers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPopularProfiles().then((d) => setData(d));
  }, []);

  const imgUrl = getImageFallbackURL();
  return (
    <div className="ac__container">
      <p className="title">Top profiles!</p>
      <div className="profile_container">
        {data.map((profileInfo) => {
          return (
            <Link
              className="profile"
              to={getUserProfilePageURL(profileInfo.firebaseUID)}
            >
              <img
                src={
                  profileInfo.profilePicURL ? profileInfo.profilePicURL : imgUrl
                }
                alt="profile_pic"
              />
              <div className="profile_info">
                <p>{profileInfo.fullName}</p>
                <p>Posts: {profileInfo.numOfPosts}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
