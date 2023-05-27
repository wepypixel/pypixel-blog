import styles from "../styles/HeroContainer.module.css";
import Link from "next/link";
import {useState, useEffect} from 'react'
import Image from 'next/image'


export default function HeroContainer({ posts }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % posts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);


  return (
    
    <div className={styles["hero-container"]}>
      {posts.slice(0, 1).map((post) => (
        <div key={post.id} className={styles["recent-posts-major"]}>
          <div className={styles["fade-bottom"]}></div>
          <Link
            href={`/post/${post.slug}`}
            className={styles["blog-post-hero-link"]}
          >
            <Image
              src={post.cover_image}
              className={styles["hero-container-post-cover-image"]}
              alt={post.title}
              width={800}
              height={800}
            ></Image>
            <h2 className={styles["hero-container-post-title"]}>
              {post.title}
            </h2>
          </Link>
        </div>
      ))}

        {/* Hero Container For Mobile Devices */}
      <div className={styles["hero-container-mobile"]}>
      {posts.slice(activeIndex, activeIndex + 1).map((post) => (
        <div key={post.id} className={styles['recent-posts-major-mobile']}>
          <div className={styles["fade-bottom-mobile"]}></div>
          <Link
            href={`/post/${post.slug}`}
            className={styles["blog-post-hero-link-mobile"]}
          >
            <Image
              src={post.cover_image}
              className={styles["hero-container-post-cover-image-mobile"]}
              alt={post.title}
              width={300}
              height={300}
            ></Image>
            <h2 className={styles["hero-container-post-title-mobile"]}>
              
              {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>

      <div className={styles["hero-container-sideposts"]}>
        {posts.slice(1, 3).map((post) => (
          <div key={post.id} className={styles["recent-posts-minor"]}>
            <div className={styles["fade-bottom-minor"]}></div>

            <Link
              href={`/post/${post.slug}`}
              className={styles["blog-post-hero-link"]}
            >
              <Image
                src={post.cover_image}
                className={styles["hero-container-post-cover-image"]}
                alt={post.title}
                width={350}
                height={350}
              ></Image>
              <h2 className={styles["hero-container-post-title"]}>
                {post.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
