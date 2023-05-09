import HeroContainer from "../components/HeroContainer";
import CategoryContainer from "../components/CategoryContainer";
import BlogPostList from "../components/BlogPostList";
import Head from "next/head";
import axios from "axios";

export default function Homepage({
  recentPosts,
  categories,
  posts,
  currentPage,
  totalPages,
}) {
  return (
    <>
      <Head>
        <title>PyPixel</title>
        <meta
          name="description"
          content="PyPixel is a technology and design blog featuring articles on AI, ML, web development, UI, UX, and design."
        />
      </Head>

      <div>
        <HeroContainer posts={recentPosts} />
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
    `/api/posts?page=${page}`
  );
  const posts = response.data.results;
  const totalPages = response.data.total_pages;

  const res = await axios.get("/api/recentposts");
  const recentPosts = res.data;

  const categoryRes = await axios.get("/api/categories");
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
