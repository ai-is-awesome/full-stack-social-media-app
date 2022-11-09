import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { fetchUserData } from "../../services/getUserData";
import { fetchUserPosts } from "../../services/postsFetch";
import { getImageFallbackURL } from "../../utils";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import Loading from "../ResuableComponents/Loading/Loading";
import UserProfileDisplay from "./UserProfileDisplay";

export default function UserProfile() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [userData, setUserdata] = useState(null);
  const [invalidUser, setInvalidUser] = useState(false);

  // const fun = async (userId) => {
  //   const userRef = doc(db, "users", "kDW5PlpJxLXC0WTrq6AufXZmcDg1");
  //   console.log("user ref: ", userRef);
  //   console.log(userRef);
  //   const q = query(
  //     collection(db, "posts"),
  //     where("userRef", "==", userRef),
  //     orderBy("timeCreated", "desc"),
  //     limit(10)
  //   );
  //   console.log("hello");
  //   console.log("q: ", q);
  //   const docs = await getDocs(q);
  //   docs.docs.map((doc) => console.log(doc.data()));
  //   console.log("docs: ", docs);

  // docs.forEach((doc) => {
  //   console.log("doc: ", doc.data());
  // });

  // console.log("docs: ", docs);
  // };

  const fun2 = async (userId) => {
    fetchUserData(userId)
      .then((data) => {
        console.log("user data: ", data);
        setUserdata(data);
      })
      .catch((e) => setInvalidUser(true));
  };
  useEffect(() => {
    if (userId) {
      fetchUserPosts(userId).then((posts) => setPosts(posts));
      fun2(userId);
    }
  }, [userId]);

  //   const snapshot = await getDocs(q )

  if (!invalidUser && userData !== null) {
    return (
      <>
        <Navbar />
        <UserProfileDisplay
          name="UWU"
          imageURL={
            posts.length ? posts[0].posterProfilePicURL : getImageFallbackURL()
          }
        />
        <div className="posts m-auto">
          {posts.map((post) => (
            <Post
              {...post}
              profileName={post.authorFullName}
              profilePicUrl={post.posterProfilePicURL}
            />
          ))}
        </div>
      </>
    );
  } else if (userData === null) {
    return <Loading />;
  } else {
    return (
      <>
        NO user FOUND!<Link to={"/"}>Go back to home?</Link>
      </>
    );
  }
}
