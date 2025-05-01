import { useState, useEffect } from "react";
import Image from "next/image";
import lockIcon from "../public/lock.svg";
import plusIcon from "../public/plus.svg";
import arrowPathIcon from "../public/arrow-path.svg";
import chevronRightIcon from "../public/chevron-right.svg";
import styles from "@/styles/Home.module.css";

export default function Home() {

  const [formPage, setFormPage] = useState(5);

  //form inputs
  const [tokenDecimals, setTokenDecimals] = useState(6);
  const [tokenSupply, setTokenSupply] = useState(1000000000);

  const [imagePreview, setImagePreview] = useState(null);

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
            
            {/* page 3 */}
            {formPage == 3 && (<div>
              <div>
                <div>
                  <span>Modify Creator Information</span>
                  <span>Change the information of the creator in the metadata.</span>
                </div>
                <div>
                  <span>(+0.1SOL)</span>
                  <input type="checkbox" />
                </div>
              </div>
              <div>
                <div>
                  <label>Creator Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Creator Website</label>
                  <input type="url" />
                </div>
              </div>
              <div>
                <button>Back</button>
                <button>Next</button>
              </div>
            </div>)}
            
            {/* page 4 */}
            {formPage == 4 && (<div>
              <div>
                <span>Social Media Links</span>
                <span>Connect your active social channels. If you don't have any, you can skip this step</span>
              </div>
              <div>
                <div>
                  <label>Website</label>
                  <input type="url" placeholder="https://mycoin.com" />
                  <label>Telegram</label>
                  <input type="url" placeholder="https://t.me/yourchannel" />
                </div>
                <div>
                  <label>X</label>
                  <input type="url" placeholder="https://x.com/mycoin" />
                  <label>Discord</label>
                  <input type="url" placeholder="https://discord.gg/your-server" />
                </div>
              </div>
              <div>
                <button>Back</button>
                <button>Skip</button>
              </div>
            </div>)}
            
            {/* page 5 */}
            {formPage == 5 && (<div>
              <div>
                <span>Revoke Authorities</span>
                <span>Solana Token has 3 authorities: Freeze Authority, Mint Authority, and Update Authority. Revoke them to attract more investors. We highly recommend enabling these 3 options to increase investor confidence.</span>
              </div>
              <div>
                <div>
                  <div>
                    <Image src={lockIcon} height={15} width={15} />
                    <div>
                      <span>(+0.1)</span>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <span>Revoke Freeze</span>
                  <span>Freeze Authority allows you to freeze token accounts of holders.</span>
                </div>

                <div>
                  <div>
                    <Image src={plusIcon} height={15} width={15} />
                    <div>
                      <span>(+0.1)</span>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <span>Revoke Mint</span>
                  <span>Mint Authority allows you to mint more supply of your token.</span>
                </div>

                <div>
                  <div>
                    <Image src={arrowPathIcon} height={15} width={15} />
                    <div>
                      <span>(+0.1)</span>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <span>Revoke Update</span>
                  <span>Update Authority allows you to update the token metadata about your token.</span>
                </div>
              </div>

              <button type="submit">
                LAUNCH MY TOKEN
                <Image src={chevronRightIcon} height={15} width={15} />
              </button>
            </div>)}
          </form>
        </div>
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
