import React, { useState, useEffect } from 'react';

const HashnodePosts = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://api.hashnode.com`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          user(username: "${username}") {
            publication {
              posts {
                title
                brief
                slug
                coverImage
                _id
              }
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => setPosts(data.data.user.publication.posts));
  }, [username]);

  return (
    <div>
      <h2>Blog Posts by {username}</h2>
      <ul>
        {posts.map((post) => (
          <div className="blog-post">
              <img className="cover-image" src={post.coverImage} alt={post.title} />
              <h2><a href={`https://blog.loganpashby.com//${post.slug}`} target="_blank" rel="noreferrer">{post.title}</a></h2>
              <p>{post.brief}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HashnodePosts;
