import React, { useState } from "react";
import "./Feed.css";

function Feed({ userPosts }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % userPosts.images.length);
  };

  const getPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + userPosts.images.length) % userPosts.images.length
    );
  };

  return (
    <div className="feed">
      <div className="post">
        <div className="profile-info">
          <img
            src={userPosts.profile_image}
            alt={`${userPosts.insta_id}'s Profile`}
            className="profile-image"
          />
          <p className="insta-id">{userPosts.insta_id}</p>
        </div>
        <p className="location">{userPosts.location}</p>
        <div className="post-images">
          {userPosts.images
            .slice(currentImageIndex, currentImageIndex + 1)
            .map((image, idx) => (
              <div key={idx} className="image-container">
                <img
                  src={image.url}
                  alt={`Post ${idx + 1}`}
                  className="post-photo"
                />
                {userPosts.images.length > 1 && (
                  <div className="image-buttons">
                    {currentImageIndex > 0 && (
                      <button onClick={getPrevImage}>&lt;</button>
                    )}
                    {currentImageIndex < userPosts.images.length - 1 && (
                      <button onClick={getNextImage}>&gt;</button>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="post-icons">
          <span className="like-icon">❤️ {userPosts.like_num}</span>
          <span className="comment-icon">💬 {userPosts.comment_num}</span>
        </div>
        <div className="comments">
          {userPosts.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p className="comment-user">{comment.c_insta_id}</p>
              <p className="comment-content">{comment.reply}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
