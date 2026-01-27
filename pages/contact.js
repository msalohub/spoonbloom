import { useState } from 'react'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>contact</h1>

      <div 
        className={`${styles.flipCard} ${flipped ? styles.flipped : ''}`} 
        onClick={() => setFlipped(!flipped)}
      >
        <div className={styles.flipInner}>

        {/* FRONT */}
        <div className={styles.cardFront}>
          <h2 className={styles.heading}>Let's get connected!</h2>

        <p className={styles.green}>
          howdy! you can call me mariel, or simply spoonbloom c: thanks for checking out the humble spoon garden! check
          out the info below to connect :D
        </p>

        <div className={styles.infoBlock}>
          <span className={styles.green}>email:</span>
          <a className={styles.purple} href="mailto:spoonbloom.contact@gmail.com">
            spoonbloom.contact@gmail.com
          </a>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.green}>phone:</span>
          <span className={`${styles.purple} ${styles.phone}`}>(210) 460 - 0194</span>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.green}>etsy:</span>
          <a className={styles.purple} href="https://etsy.com/shop/shopspoonbloom" target="_blank">
            etsy.com/shop/shopspoonbloom
          </a>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.green}>ko-fi:</span>
          <a className={styles.purple} href="https://ko-fi.com/spoonbloom" target="_blank">
            ko-fi.com/spoonbloom
          </a>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.green}>instagram:</span>
          <a className={styles.purple} href="https://instagram.com/shopspoonbloom" target="_blank">
            @shopspoonbloom
          </a>
          <a className={styles.purple} href="https://instagram.com/heresyourspoons" target="_blank">
            @heresyourspoons
          </a>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.green}>linktree:</span>
          <a className={styles.purple} href="https://linktr.ee/spoonbloom" target="_blank">
            linktr.ee/spoonbloom
          </a>
        </div>

        <a
          href="https://ko-fi.com/spoonbloom"
          target="_blank"
          className={styles.supportButton}
        >
          click here to support!
        </a>
      </div>
      

      {/* BACK */}
      <div className={styles.cardBack}>
        <img
          src="/images/BusinessCardBack.png"
          alt="SpoonBloom Business Card"
          className={styles.businessCard}
        />
      </div>
      
        </div>
      </div>
    </div>
  )
}
