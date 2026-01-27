import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/images/GlitterBackground2.png"
        alt="Header image: purple glitter background"
        fill
        className={styles.bg}
        priority
      />
      <div className={styles.overlay} />

      <Link href="/" className={styles.logoContainer}>
        <Image
          src="/images/HeaderLogo.png"
          alt="SpoonBloom Logo"
          width={1480} 
          height={840}
          className={styles.logo}
        />
      </Link>
    </header>
  )
}
