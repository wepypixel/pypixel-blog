import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-parent"]}>
        <div className={styles["footer-div1"]}>
          <div>
            <Link href="/">
              <h2>PyPixel</h2>
            </Link>
            <p className={styles.footerPara}>
              PyPixel is a technology and design blog that aims to bring the
              latest insights and trends in the world of ML, AI, web
              development, Python, UI/UX design, and more.
            </p>
          </div>
          <div className={styles["footer-tagline"]}>
            Sharing resources for tech and design.
            <span>&#169; 2023 PyPixel. All Rights Reserved</span>
          </div>
        </div>
        <div className={styles["footer-div2"]}>
          <h3>Overview</h3>{" "}
          <Link href="/category/technology">
            <p className={styles["footer-site-links"]}>Technology</p>
          </Link>
          <Link href="/category/design">
            <p className={styles["footer-site-links"]}>Design</p>
          </Link>
          <Link href="/about-us">
            <p className={styles["footer-site-links"]}>About Us</p>
          </Link>
          <Link href="/contact-us">
            <p className={styles["footer-site-links"]}>Contact Us</p>
          </Link>
          <Link href="/privacy-policy">
          <p className={styles["footer-site-links"]}>Privacy Policy</p>
          </Link>
        </div>
        <div className={styles["footer-div3"]}>
          <h3>Social Links</h3>
          <Link href="https://www.instagram.com/wepypixel" target="_blank"><p className={styles["footer-social-links"]}>Instagram</p></Link>
          <Link href="https://www.twitter.com/wepypixel" target="_blank"><p className={styles["footer-social-links"]}>Twitter</p></Link>
          <Link href="https://medium.com/@wepypixel" target="_blank"><p className={styles["footer-social-links"]}>Medium</p></Link>
          <Link href="mailto:wepypixel@gmail.com" target="_blank"><p className={styles["footer-social-links"]}>Email</p></Link>
        </div>
      </div>
    </footer>
  );
}
