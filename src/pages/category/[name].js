import axios from "axios";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { RxDotFilled } from "react-icons/rx";
import styles from "../../styles/CategoryPosts.module.css";
import Image from "next/image";

export default function Category({
  blogPosts,
  name,
  currentPage,
  totalPages,
  description,
}) {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [posts, setPosts] = useState(blogPosts);

  const handlePageChange = (pageNumber) => {
    setCurrentPageState(pageNumber);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pypixel.com/api/category/${name}?page=${currentPageState}`
        );
        setPosts(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPageState]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pypixel.com/api/category/${name}`
        );
        setPosts(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [name]);

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

  const pageTitle = name.charAt(0).toUpperCase() + name.slice(1) + " Resources";

  return (
    <div className={styles["posts-list-container"]}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`${description}`} />
        <link rel="canonical" href={`https://pypixel.com/category/${name}`} />
      </Head>

      <h2 className={styles["category-posts-heading"]}>
        See what&apos;s trending in&nbsp;
        {name ? name.charAt(0).toUpperCase() + name.slice(1) : ""}
      </h2>
      <div className={styles["posts-grid-container"]}>
        {posts.map((post) => (
          <div key={post.id} className={styles["posts-grid-item"]}>
            <Link
              href={`/post/${post.slug}`}
              className={styles["blog-post-hero-link"]}
            >
              <Image
                src={post.cover_image}
                className={styles["post-grid-item-img"]}
                alt={post.title}
                width={350}
                height={350}
              />

              <div className={styles["grid-post-date-div"]}>
                <RxDotFilled className={styles["dot-icon"]} />
                <p className={styles["post-date"]}>
                  {format(
                    new Date(post.created_on.substring(0, 10)),
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
          onClick={() => handlePageChange(currentPageState - 1)}
          disabled={currentPageState == 1}
        >
          &#x2190;&nbsp;Previous
        </button>
        <button
          className={styles["next-btn"]}
          onClick={() => handlePageChange(currentPageState + 1)}
          disabled={currentPageState == totalPages}
        >
          Next&nbsp;&rarr;
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const name = context.params.name;
  const currentPage = 1;
  const res = await axios.get(
    `https://pypixel.com/api/category/${name}?page=${currentPage}`
  );
  const blogPosts = res.data.results;
  const description = res.data.results[0]
    ? res.data.results[0].category.description
    : "";
  const totalPages = res.data.total_pages;

  return {
    props: {
      blogPosts,
      name,
      currentPage,
      totalPages,
      description,
    },
  };
}
