import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavBar.module.css'

const links = [
  { name: 'Gallery', path: 'gallery' },
  { name: 'Shop', path: '/shop' },
  /*{ name: 'Commissions', path: '/commissions' },*/
  { name: 'Contact', path: '/contact' },
]

export default function NavBar() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${styles.link} ${
            router.pathname === link.path ? styles.active : ''
          }`}
        >
          {link.name}
          <span className={styles.underline} />
        </Link>
      ))}
    </nav>
  )
}
