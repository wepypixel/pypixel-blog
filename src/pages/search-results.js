import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import Link from 'next/link'
import Head from "next/head";
import styles from '../styles/CategoryPosts.module.css'
import Image from 'next/image'


export default function SearchResults({ blogPosts, query, currentPage, totalPages, count}) {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [posts, setPosts] = useState(blogPosts);


  useEffect(() => {
    
    if (query) {
      axios
        .get(`http://127.0.0.1:8000/api/blog-posts/search/?search=${query}&page=${currentPageState}`)
        .then((response) => {
          setPosts(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentPageState]);

  const handlePageChange = (pageNumber) => {
    setCurrentPageState(pageNumber);
  };

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    let truncated = str.slice(0, num + 1);
    let lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace === -1) {
      lastSpace = num;
    }
    return truncated.slice(0, lastSpace) + "...";
  }
  
  const searchTitle = "Search Results - " +  query

  return (
    <div className={styles["posts-list-container"]}>
      <Head>
        <title>{searchTitle}</title>
        <meta name="description" content="Search Results" />
      </Head>
      <h1 className={styles["category-posts-heading"]}>
        Found {count} Search Results for &quot;{query.charAt(0).toUpperCase() + query.slice(1)}&quot;
      </h1>
      <div className={styles["posts-grid-container"]}>
        {posts.map((post) => (
          <div key={post.id} className={styles["posts-grid-item"]}>
            <Link href={`/post/${post.slug}`} className={styles["blog-post-hero-link"]}>
              <Image
                src={"http://127.0.0.1:8000" + post.cover_image}
                className={styles["post-grid-item-img"]}
                alt={post.title}
                width={500}
                height={500}
              />

              <div className={styles["grid-post-date-div"]}>
                <p className={styles["post-date"]}>
                  {format(
                    new Date(post.updated_on.substring(0, 10)),
                    "dd MMMM yyyy"
                  )}
                </p>
              </div>
              <h2 className={styles["grid-card-post-title"]}>
                {truncateString(post.title, 70)}
              </h2>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles["prev-next-btn-div"]}>
        <button
          className={styles["previous-btn"]}
          onClick={() =>handlePageChange(currentPageState - 1)}
          disabled={currentPageState == 1}
        >
          &#x2190;&nbsp;Previous
        </button>
        <button
          className={styles["next-btn"]}
          onClick={() =>handlePageChange(currentPageState + 1)}
          disabled={currentPageState == totalPages}
        >
          Next&nbsp;&rarr;
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = context.query.search
  const currentPage = 1
  const res = await axios.get(`http://127.0.0.1:8000/api/blog-posts/search/?search=${query}`);
  const blogPosts = res.data.results;
  const totalPages = res.data.total_pages;
  const count = res.data.count;

  return {
    props: {
      blogPosts,
      query,
      currentPage,
      totalPages,
      count
    },
  };
}