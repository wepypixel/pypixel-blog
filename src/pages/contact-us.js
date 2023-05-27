import styles from "../styles/contact-us.module.css";
import Link from "next/link";
import Head from "next/head";

export default function ContactUs() {

  return (
    <div className={styles["contact-us-body"]}>
      <Head>
        <title>Contact PyPixel</title>
        <meta
          name="description"
          content="Contact Pypixel, a leading blog about technology and design, including AI, ML, web development, UI/UX, and more."
        />
        <link rel="canonical" href="https://pypixel.com/contact-us" />
      </Head>
      <div className={styles["contact-us-heading-container"]}>
        <h4 className={styles["contact-us-heading"]}>Contact Us</h4>
        <h1 className={styles["contact-us-title"]}>
          We&apos;d Love to hear you out, reach us with your thoughts
        </h1>
        <span>
          Would like to know more about us?
          <Link href="/about-us">Click here</Link>
        </span>
      </div>
      <div className={styles["contact-us-content"]}>
        If you have any queries, suggestions, or feedback regarding our
        technology and design blog, please feel free to get in touch with us. We
        value your feedback and are always eager to hear from our readers.
        <br /> <br />
        We are committed to providing you with
        the best possible user experience. If you have any questions related to
        our content or want to collaborate with us, you can contact us via
        email or social media.
        <br />
        <br />
        We are constantly striving to improve our blog and appreciate any
        suggestions you may have for us. Whether it&apos;s a new topic you want us to
        cover, a feature you&apos;d like to see on our website, or general feedback,
        we are always happy to hear from you.
        <br />
        <br />
        Your satisfaction is our top priority, and we want to ensure that your
        experience with our technology and design blog is as enjoyable as
        possible. So, don&apos;t hesitate to reach out to us if you have any
        questions or comments. We look forward to hearing from you soon! <br />
        <br /> 
        <p className={styles['email-p']}>Drop us an email: <a href="mailto:wepypixel@gmail.com" target="_blank" className={styles['email-href']}>wepypixel@gmail.com</a></p>
      </div>
    </div>
  );
}
