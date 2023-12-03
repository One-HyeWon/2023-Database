// Feed.js

import React, { useState } from "react";
import "./Feed.css";

function Feed({ loggedInUser }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 다음 이미지 가져오기
  const getNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allPosts.length);
  };

  // 이전 이미지 가져오기
  const getPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + allPosts.length) % allPosts.length
    );
  };

  // 팔로잉 중인 사용자들의 정보를 가져오기
  const followings = loggedInUser.user_data.followings || [];

  // 팔로잉 중인 사용자들의 게시물과 현재 사용자의 게시물을 합치기
  const allPosts = [loggedInUser.user_data, ...followings].reduce(
    (posts, user) => posts.concat(user[user.insta_id] || []),
    []
  );

  return (
    <div className="feed">
      {allPosts.map((post) => (
        <div key={post.post_id} className="post">
          <div className="profile-info">
            <img
              src={post.profile_image}
              alt={`${post.insta_id}'s Profile`}
              className="profile-image"
            />
            <p className="insta-id">{post.insta_id}</p>
          </div>
          <p className="location">{post.location}</p>
          {/* 이미지 렌더링 */}
          <div className="post-images">
            {post.images.map((image, idx) => (
              <div key={idx} className="image-container">
                <img
                  src={image.url}
                  alt={`Post ${idx + 1}`}
                  className="post-photo"
                />
              </div>
            ))}
            {post.images.length > 1 && (
              <div className="image-buttons">
                {currentImageIndex > 0 && (
                  <button onClick={getPrevImage}>&lt;</button>
                )}
                {currentImageIndex < post.images.length - 1 && (
                  <button onClick={getNextImage}>&gt;</button>
                )}
              </div>
            )}
          </div>
          {/* 게시물의 내용 및 기타 정보 렌더링 */}
          <div className="post-icons">
            <span className="like-icon">❤️ {post.like_num}</span>
            <span className="comment-icon">💬 {post.comment_num}</span>
          </div>
          <div className="comments">
            {post.comments.map((comment, index) => (
              <div key={index} className="comment">
                <p className="comment-user">{comment.c_insta_id}</p>
                <p className="comment-content">{comment.reply}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
