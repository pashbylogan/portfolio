import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Blog({ blogData }) {
  const { category, title, date, author, image, filesource } = blogData;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="blog-item rounded bg-white shadow-dark">
        <div className="thumb">
          <a href="!#">
            <span className="category">{category}</span>
          </a>
          <Link to={`${filesource}`}>
            <img src={image} alt="blog-title" />
          </Link>
        </div>
        <div className="details">
          <h4 className="my-0 title">
            <Link
              to={`${filesource}`}
            >
              {title}
            </Link>
          </h4>
          <ul className="list-inline meta mb-0 mt-2">
            <li className="list-inline-item">{date}</li>
            <li className="list-inline-item">{author}</li>
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Blog;
