import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {

  const [formPage, setFormPage] = useState(1);

  //form inputs
  const [tokenDecimals, setTokenDecimals] = useState(6);
  const [tokenSupply, setTokenSupply] = useState(1000000000);

  const [imagePreview, setImagePreview] = useState("");

  const pageHandle = (way) => {
    if(way == "back" && formPage != 1) {
      setFormPage(prev => prev - 1);
    } else if(way == "next") {
      setFormPage(prev => prev + 1);
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
  }

  const launchToken = (e) => {
    e.preventDefault();
  }

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
        <h3>Solana Token Creator</h3>
        <span>Create your memecoin in minuites.</span>

        <div>
          <form onSubmit={launchToken}>
            {/* page 1 */}
            {formPage == 1 && (<div>
              <div>
                <label>Token Name</label>
                <input placeholder="Mog Coin" />
              </div>
              <div>
                <label>Toke Symbol</label>
                <input placeholder="MOG" />
              </div>
              <div>
                <label>Description</label>
                <textarea placeholder="Describe what your token stands for..."></textarea>
              </div>
              <div>
                <lable>Token Logo</lable>
                <input accept="image/*" onChange={handleFileChange} type="file" />
                <Image src={imagePreview} width={100}  height={100} />
              </div>
              <button onClick={() => pageHandle("next")}>Next</button>
            </div>)}

            {/* page 2 */}
            {formPage == 2 && (<div>
              <div>
                <label>Decimals</label>
                <input type="number" placeholder="6" value={tokenDecimals} onChange={(e) => setTokenDecimals(e.target.value)} />
                <span>Standard Value Recommended</span>
              </div>
              <div>
                <label>Token Supply</label>
                <input type="number" placeholder="1000000000" value={tokenSupply} onChange={(e) => setTokenSupply(e.target.value)} />
                <span>Common supply is 1 billion</span>
                <span>With commas: 1,000,000,000</span>
              </div>
              <div>
                <button onClick={() => pageHandle("back")}>Back</button>
                <button onClick={() => pageHandle("next")}>Next</button>
              </div>
            </div>)}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
