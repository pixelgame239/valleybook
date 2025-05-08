import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getTop3LikedPosts } from "../backend/forumData";
import "./CarouselPosts.css";

const CarouselPosts = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getTop3LikedPosts();
      setTopPosts(data);
    }
    fetchPosts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {topPosts.map((post, index) => (
          <div key={index} className="carousel-slide">
            {post.topic_image && (
              <img
                src={post.topic_image}
                alt="post"
                className="carousel-image"
              />
            )}
            <div className="carousel-content">
              <h3>{post.topic}</h3>
              <p>
                <strong>Username:</strong> {post.username}
              </p>
              <p>
                <strong>Created at:</strong>{" "}
                {new Date(post.created_at).toLocaleString()}
              </p>
              <p>
                <strong>Likes:</strong> {post.like_count?.length || 0}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselPosts;
