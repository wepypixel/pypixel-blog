import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
    window.open(`/search-results/?search=${query}`, "_self");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <Link href="/">
          <Image
            src="/pypixelLogo.png"
            className={styles["nav-logo"]}
            width={50}
            height={40}
            alt="PyPixel-Logo"
          />
        </Link>

        <ul
          className={
            showMenu ? styles["nav-list-ul-active"] : styles["nav-list-ul"]
          }
        >
          <form onSubmit={handleSearch} className={styles["mobile-form"]}>
            <div className={styles.searchDivNavMobile}>
              <input
                type="text"
                value={query}
                className={styles.searchBarNavMobile}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button type="submit">
                <AiOutlineSearch className={styles.searchIconNavMobile} />
              </button>
            </div>
          </form>
          <div className={styles["li-div-mobile"]}>
            <li>
              <Link
                href={"/category/technology"}
                key="technology"
                className={
                  router.asPath === "/category/technology"
                    ? styles.activeLink
                    : ""
                }
                onClick={showMenu ? toggleMenu : () => {}}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                href={"/category/design"}
                key="design"
                className={
                  router.asPath === "/category/design" ? styles.activeLink : ""
                }
                onClick={showMenu ? toggleMenu : () => {}}
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                href={"/about-us"}
                className={
                  router.asPath === "/about-us" ? styles.activeLink : ""
                }
                onClick={showMenu ? toggleMenu : () => {}}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/contact-us"}
                className={
                  router.asPath === "/contact-us" ? styles.activeLink : ""
                }
                onClick={showMenu ? toggleMenu : () => {}}
              >
                Contact Us
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className={styles.searchDivNav}>
          <input
            type="text"
            value={query}
            className={styles.searchBarNav}
            placeholder="Search PyPixel"
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit">
            <AiOutlineSearch className={styles.searchIconNav} />
          </button>
        </div>
      </form>
      {showMenu ? (
        <RxCross1 className={styles["nav-toggle-menu"]} onClick={toggleMenu} />
      ) : (
        <AiOutlineMenu
          className={styles["nav-toggle-menu"]}
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
