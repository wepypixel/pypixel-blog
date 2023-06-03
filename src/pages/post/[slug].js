import axios from "axios";
import { format } from "date-fns";
import { useEffect } from "react";
import { AiFillClockCircle, AiFillTwitterCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Head from "next/head";
import { RxDotFilled } from "react-icons/rx";
import styles from "../../styles/BlogPostDetail.module.css";
import gridStyles from "../../styles/BlogPostList.module.css";
import Image from "next/image";
import * as ga from "../../lib/ga";
import { useRouter } from "next/router";

export default function Post({ blogPost, relatedPosts, popularPosts }) {
  const description = blogPost ? blogPost.meta_description : "";
  const sanitizedContent = DOMPurify.sanitize(blogPost.content);
  const router = useRouter();

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

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={styles["blog-post-detail-screen-body"]}>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://pypixel.com/post/${blogPost.slug}`} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={blogPost.cover_image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={blogPost.cover_image} />
        <link rel="canonical" href={`https://pypixel.com/post/${blogPost.slug}`} />
      </Head>
      <div className={styles["blog-post-detail-upper-body"]}>
        <main className={styles["blog-post-detail-main"]}>
          <p className={styles["blog-post-detail-category"]}>
            {blogPost.category.name}
          </p>
          <h1 className={styles["blog-post-detail-title"]}>{blogPost.title}</h1>
          <h4 className={styles["blog-post-detail-published-date"]}>
            <AiFillClockCircle className={styles["clock-icon"]} /> Published on{" "}
            {format(
              new Date(blogPost.created_on.substring(0, 10)),
              "dd MMMM yyyy"
            )}
          </h4>
          <div>

          {/* <AiFillTwitterCircle/>
          <BsWhatsapp/>
          <BsTelegram/> */}
          </div>
          <Image
            src={blogPost.cover_image}
            className={styles["blog-post-detail-img"]}
            alt={blogPost.title}
            width={700}
            height={400}
            priority
          />

          <div
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className={styles["blog-post-content"]}
          ></div>
        </main>
      </div>
      <hr className={styles['hr-style']}></hr>
      <section className={gridStyles["posts-list-container"]}>
        
        <h2 className={styles["popular-posts-heading"]}>
          Popular Posts in {blogPost.category.name}
        </h2>
        <div className={gridStyles["posts-grid-container"]}>
          {popularPosts.slice(0, 13).map((post) => {
            if (post.id != blogPost.id) {
              return (
                <div key={post.id} className={gridStyles["posts-grid-item"]}>
                  <Link
                    href={`/post/${post.slug}`}
                    className={gridStyles["blog-post-hero-link"]}
                  >
                    <Image
                      src={post.cover_image}
                      className={gridStyles["post-grid-item-img"]}
                      alt={post.title}
                      width={350}
                      height={350}
                    />
                    <div className={gridStyles["grid-post-date-div"]}>
                      <RxDotFilled className={gridStyles["dot-icon"]} />
                      <p className={gridStyles["post-date"]}>
                        {format(
                          new Date(post.created_on.substring(0, 10)),
                          "dd MMMM yyyy"
                        )}
                      </p>
                    </div>
                    <h2 className={gridStyles["grid-card-post-title"]}>
                      {truncateString(post.title, 70)}
                    </h2>
                    <p className={gridStyles["grid-post-meta-descr"]}>{post.meta_description}</p>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const blogPostResponse = await axios.get(
    `https://pypixel.com/api/post/${slug}`
  );
  const blogPost = blogPostResponse.data;
  const relatedPostsResponse = await axios.get(
    `https://pypixel.com/api/category/${blogPostResponse.data.category.name}`
  );
  const relatedPosts = relatedPostsResponse.data.results;
  const popularPostsResponse = await axios.get(
    `https://pypixel.com/api/popular/${blogPostResponse.data.category.name}`
  );
  const popularPosts = popularPostsResponse.data;

  return {
    props: {
      blogPost,
      relatedPosts,
      popularPosts,
      slug,
    },
  };
}
