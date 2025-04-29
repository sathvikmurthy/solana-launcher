import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <span>Logo</span>
        <div className={styles.nav__options}>
          <span>Create Token</span>
          <span>Create Liquidity</span>
          <span>How to use</span>
          <span>FAQ</span>
        </div>
        <button className={styles.nav__connect}>Select Wallet</button>
      </div>

      <div className={styles.body}>

      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
