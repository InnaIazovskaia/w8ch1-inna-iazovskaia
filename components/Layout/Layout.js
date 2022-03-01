import Navigation from "../Navigation/Navigation";
import styles from "../../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
