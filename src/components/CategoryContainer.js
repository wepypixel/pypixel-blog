import { useState, useEffect, useRef } from "react";
import styles from "../styles/CategoryContainer.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function CategoryContainer({ categories }) {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const touchRef = useRef(null);
  

  const handleNext = () => {
    setCurrentCategory((currentCategory + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentCategory(
      (currentCategory - 1 + categories.length) % categories.length
    );
  };
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    const node = touchRef.current;
    node.addEventListener("touchstart", handleTouchStart, { passive: true });
    node.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      node.removeEventListener("touchstart", handleTouchStart, { passive: true });
      node.removeEventListener("touchmove", handleTouchMove, { passive: true });
    };
  }, [handleTouchStart, handleTouchMove]);


  return (
    <div className={styles["category-hero"]}>
      <h2 className={styles["category-hero-heading"]}>Explore Categories</h2>
      <div className={styles["category-card-container"]}>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={"/category/" + category.name.toLowerCase()}
            className={styles["blog-post-category-link"]}
          >
            <div className={styles["category-card"]}>
              <Image
                src={category.category_image}
                className={styles["category-image"]}
                alt={category.name}
                width={400}
                height={350}
              /> 
              <h2 className={styles["category-card-h1"]}>{category.name}</h2>
              <div className={styles["category-card-p-div"]}>
                <p className={styles["card-p"]}>{category.description}</p>
                <BsArrowUpRight className={styles["arrow-icon-card"]} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div
        className={styles["category-card-container-mobile"]}
        ref={touchRef}
      >
        {categories
          .slice(currentCategory, currentCategory + 1)
          .map((category) => (
            <Link
              key={category.id}
              href={"/category/" + category.name.toLowerCase()}
              className={styles["blog-post-category-link"]}
              
            >
              <div className={styles["category-card"]}>
                <Image
                  src={category.category_image}
                  className={styles["category-image"]}
                  alt={category.name}
                  width={200}
                  height={200}
                />
                <h2 className={styles["category-card-h1"]}>{category.name}</h2>
                <div className={styles["category-card-p-div"]}>
                  <p className={styles["card-p"]}>{category.description}</p>
                  <BsArrowUpRight className={styles["arrow-icon-card"]} />
                </div>
                <p className={styles['category-counter']}>&#40;{currentCategory + 1}/2&#41;</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );  
}
