import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

function Blogs() {
  const [recentPosts, setRecentPosts] = useState([]);

  const convertToOldFormat = (fetchedPosts) => {
    return fetchedPosts.map((post, index) => {
    const date = new Date(post.dateAdded);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);

    return {
        id: index + 1,
        title: post.title,
        filesource: `https://blog.loganpashby.com//${post.slug}`,
        image: post.coverImage,
        author: "Logan Pashby",
        category: "Project",
        date: formattedDate,
      };
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        query {
          user(username: "pashbyl") {
            publication {
              posts {
                title
                brief
                coverImage
                slug
                dateAdded
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      const allPosts = convertToOldFormat(data.data.user.publication.posts);
      const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      const topThreePosts = sortedPosts.slice(0, 3);
      setRecentPosts(topThreePosts);
    };

    fetchPosts(); 
  }, []);

  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {recentPosts.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blog" className="btn btn-default">
           See all my posts 
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
