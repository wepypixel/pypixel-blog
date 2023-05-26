import DOMPurify from "isomorphic-dompurify";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import styles from "../styles/about-us.module.css";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";

export default function AboutUs({ aboutUs }) {
  const sanitizedContent = DOMPurify.sanitize(aboutUs?.content);

  return (
    <div className={styles["about-us-body"]}>
      <Head>
        <title>About PyPixel</title>
        <meta
          name="description"
          content="Pypixel, the intersection of technology and design. Our blog is dedicated to exploring the latest trends, and concepts in both technology and design."
        />
      </Head>

      <div className={styles["about-us-heading-container"]}>
        <h4 className={styles["about-us-heading"]}>About Us</h4>
        <h1 className={styles["about-us-title"]}>{aboutUs?.title}</h1>
        <span>
          Follow us on:{" "}
          <Link href="https://www.instagram.com/wepypixel" target="_blank">
            {<BsInstagram className={styles["social-icons-about-us"]} />}
          </Link>
          <Link href="https://www.twitter.com/wepypixel" target="_blank">
            {<FiTwitter className={styles["social-icons-about-us"]} />}
          </Link>
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        className={styles["about-us-content"]}
      ></div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("/api/about-us");
  const aboutUs = response.data;

  return {
    props: {
      aboutUs,
    },
  };
}
