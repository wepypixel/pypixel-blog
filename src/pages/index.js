// import HeroContainer from "../components/HeroContainer";
import CategoryContainer from "../components/CategoryContainer";
import BlogPostList from "../components/BlogPostList";
import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const HeroContainer = dynamic(() => import("../components/HeroContainer"));

export default function Homepage({
  recentPosts,
  categories,
  posts,
  currentPage,
  totalPages,
}) 

{
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8045600134360394';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>PyPixel</title>
        <meta
          name="description"
          content="PyPixel is a technology and design blog featuring articles on AI, ML, web development, UI, UX, and design."
        />
        <meta property="og:title" content="PyPixel" />
        <meta property="og:url" content="https://pypixel.com" />
        <meta
          property="og:description"
          content="PyPixel is a technology and design blog featuring articles on AI, ML, web development, UI, UX, and design."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://pypixel.com" />
      </Head>

      <div>
        <HeroContainer posts={recentPosts} />
        <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-8045600134360394"
         data-ad-slot="2513454759"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
        <CategoryContainer categories={categories} />
        <BlogPostList
          initialPosts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const page = 1;
  const response = await axios.get(
    `https://pypixel.com/api/posts?page=${page}`
  );
  

  const posts = response.data.results;
  const totalPages = response.data.total_pages;

  const res = await axios.get("https://pypixel.com/api/recentposts");
  const recentPosts = res.data;

  const categoryRes = await axios.get("https://pypixel.com/api/categories");
  const categories = categoryRes.data;
  return {
    props: {
      recentPosts,
      categories,
      posts,
      currentPage: parseInt(page),
      totalPages: parseInt(totalPages),
    },
  };
}
