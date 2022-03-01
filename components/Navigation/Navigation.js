import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Navigation = () => {
  return (
    <ul className={styles.nav_ul}>
      <li className={styles.nav_li}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.nav_li}>
        <Link href="/pokemons-CSR">Pokemons CSR</Link>
      </li>
      <li className={styles.nav_li}>
        <Link href="/pokemons-SSR">Pokemons SSR</Link>
      </li>
      <li className={styles.nav_li}>
        <Link href="/pokemons-SSG">Pokemons SSG</Link>
      </li>
      <li className={styles.nav_li}>
        <Link href="/pokemons-ISR">Pokemons ISR</Link>
      </li>
    </ul>
  );
};

export default Navigation;
