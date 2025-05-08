import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingHomepage from "./HeadingHomepage";
import { getTop3LikedPosts } from "../backend/forumData";
import "./BestSellerCarousel.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

function CarouselPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchTopPosts() {
      const data = await getTop3LikedPosts();
      setPosts(data);
    }
    fetchTopPosts();
  }, []);

  // Custom arrows
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: "block", right: 0 }}
        onClick={onClick}
      >
        <i className="fa fa-angle-right fa-2x" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: "block", left: 0, zIndex: 0 }}
        onClick={onClick}
      >
        <i className="fa fa-angle-left fa-2x" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, posts.length),
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(2, posts.length) },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Truncate text to a certain length
  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="my-5 mx-5">
      <div className="w-100" style={{ maxWidth: "85%", margin: "0 auto" }}>
        <HeadingHomepage title="Bài viết được yêu thích" />
      </div>

      {posts.length > 0 ? (
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.id} className="p-3">
              <div className="bg-white rounded shadow-sm hover-shadow-lg transition overflow-hidden h-100 d-flex flex-column">
                <Link
                  to={`/forum/${post.id}`}
                  className="text-decoration-none text-dark"
                >
                  {post.topic_image && (
                    <div className="position-relative">
                      <img
                        src={post.topic_image}
                        alt="Post"
                        className="img-fluid w-100"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <h6 className="fw-semibold mb-2">
                      {truncateText(post.topic, 50)}
                    </h6>
                    <p className="text-muted small mb-2">
                      {truncateText(post.topic, 100)}
                    </p>
                  </div>
                </Link>
                <div className="mt-auto p-3 border-top d-flex justify-content-between align-items-center">
                  <div className="text-muted small">
                    {post.username || "Ẩn danh"}
                  </div>
                  <div className="d-flex align-items-center">
                    {/* <FaHeart className="text-danger me-1" /> */}
                    <span>{post.like_count?.length || 0}</span>
                    <div style={{ color: "green" }}>
                      {" "}
                      <ThumbUpAltIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center py-4">
          <p>Chưa có bài viết nào được yêu thích</p>
        </div>
      )}
    </div>
  );
}

export default CarouselPosts;
