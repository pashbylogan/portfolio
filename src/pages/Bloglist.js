import React, { useState, useEffect } from "react";
import Header from "../components/layouts/Header";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";


function Bloglist() {
  document.body.classList.add("dark");

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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
      const formattedPosts = convertToOldFormat(data.data.user.publication.posts);
      setPosts(formattedPosts);
    };

    fetchPosts(); 
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="/images/logo.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              {currentPosts.map((blogItem) => (
                <div className="col-md-6" key={blogItem.id}>
                  <Blog blogData={blogItem} />
                </div>
              ))}
            </div>
            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Bloglist;
