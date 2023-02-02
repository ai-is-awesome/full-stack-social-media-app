import React from "react";
import Post from "../Post/Post";

export default function PostList({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          imageUrl={post.imageUrl}
          title={post.title}
          profileName={post?.authorFullName}
          profilePicUrl={post?.posterProfilePicURL}
          userRef={post?.userRef}
        />
      ))}
    </div>
  );
}
