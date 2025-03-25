import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Shop() {
  const router = useRouter();

  // Gallery images data
  const galleryImages = [
    { src: '/drawings/valentine copy.jpg', alt: 'Valentine Art' },
    { src: '/drawings/Song of Heeling - Mariel Salomon - Creative Commons.png', alt: 'Song of Heeling' },
    { src: '/drawings/aph.jpg', alt: 'APH Art' },
    { src: '/drawings/aph plain.jpg', alt: 'APH Plain' },
    { src: '/drawings/weezer family.png', alt: 'Weezer Family' },
    { src: '/drawings/lis.png', alt: 'LIS Art' },
    { src: '/drawings/berit.png', alt: 'Berit' },
    { src: '/drawings/fellas.png', alt: 'The Fellas' },
    { src: '/drawings/RiftsCommision.jpg', alt: 'Rifts Commission' },
    { src: '/drawings/weezy9.jpg', alt: 'Weezy' },
    { src: '/drawings/bigger weezer red.png', alt: 'Weezer Red' },
    { src: '/drawings/slurp.png', alt: 'Slurp' },
    { src: '/drawings/print among us christmas.png', alt: 'Among Us Christmas' },
    { src: '/drawings/true koryception.png', alt: 'Koryception' },
    { src: '/drawings/termagant.png', alt: 'Termagant' }
  ];

  const collageImages = [
    { src: '/drawings/jamie file.png', alt: 'Jamie Collage' },
    { src: '/drawings/naymal complete.png', alt: 'Naymal Collage' },
    { src: '/drawings/matthew.png', alt: 'Matthew Collage' },
    { src: '/drawings/alberto - Copy.png', alt: 'Alberto Collage' },
    { src: '/drawings/george print fr.png', alt: 'George Collage' },
    { src: '/drawings/DeaconCollage.webp', alt: 'Deacon Collage' }
  ];

  const funGifs = [
    { src: 'https://dl.glitter-graphics.com/pub/3646/3646048yiipl9y9w5.gif', alt: 'Sparkle' },
    { src: 'https://i.pinimg.com/originals/7a/98/41/7a98413dbf3b22a08914cb78f4064a36.gif', alt: 'Flame' },
    { src: 'https://i.pinimg.com/originals/0d/ee/0e/0dee0ecd7d419681cddcc05cb1a04c37.gif', alt: 'Star' }
  ];

  const socialLinks = [
    { href: 'https://instagram.com/shopspoonbloom', icon: 'https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF', alt: 'Instagram', width: 40, height: 40 },
    { href: 'https://tiktok.com/@spoonbloom', icon: 'https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=FFFFFF', alt: 'TikTok', width: 50, height: 50 },
    { href: 'mailto:spoonbloom.contact@gmail.com', icon: 'https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF', alt: 'Email', width: 50, height: 50 },
    { href: 'https://depop.com/depopiel', icon: 'https://img.icons8.com/?size=100&id=1Afq3S5Cbcck&format=png&color=FFFFFF', alt: 'Depop', width: 50, height: 50 }
  ];

  return (
    <>
        <Head>
        <title>about | spoonbloom ᯓ★ </title>
        <meta name="description" content="about spoonbloom" />
        </Head>

        <div className="page-wrapper">
            <div className="checkered-border left"></div>
    
        <div className="container">
            <Link href="/" className="banner">
            SpoonBloom
            </Link>

        {/*Nav Bar*/}
        <div className="navbar">
            <Link href="/about" className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link href="/shop" className={`nav-link ${router.pathname === '/shop' ? 'active' : ''}`}>Shop</Link>
            <Link href="/shirts" className={`nav-link ${router.pathname === '/shirts' ? 'active' : ''}`}>Shirts</Link>
            <Link href="/drawings" className={`nav-link ${router.pathname === '/drawings' ? 'active' : ''}`}>Drawings </Link>
            <Link href="/clay" className={`nav-link ${router.pathname === '/clay' ? 'active' : ''}`}>Clay</Link>
        </div>
        
        {/*Section one*/}     
            <div className="main-content" id="about">
              <div className="section-header">
                <div className="gif-container">
                  <Image 
                    src="https://i.pinimg.com/originals/05/bf/b1/05bfb13dbad7c8f3815c723d4c0c34be.gif" 
                    alt="Left Cute GIF" 
                    className="cute-gif"
                    width={50}
                    height={50}
                  />
                </div>
                <h2 className="clay-title">About</h2>
                <div className="gif-container">
                  <Image 
                    src="https://i.pinimg.com/originals/05/bf/b1/05bfb13dbad7c8f3815c723d4c0c34be.gif" 
                    alt="Right Cute GIF" 
                    className="cute-gif"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              
              <p className="blurb">Coming Soon...</p>
              
              <div className="single-image-container">
                <Image
                  src="/images/ComingSoon.webp"
                  alt="WIP"
                  width={1366}
                  height={1026}
                  style={{ 
                    width: '70%', 
                    height: 'auto' 
                  }}
                />
            </div>

            <div className="single-image-container">
          <Link href="https://ko-fi.com/spoonbloom" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/KoFi.webp"
                alt="Support me on Ko-Fi"
                width={1366}
                height={768}
                style={{ 
                  width: '45%', 
                  height: 'auto',
                  cursor: 'pointer' // Optional: Shows clickable hand icon
                }}
              />
            </a>
          </Link>
      </div>
    
              <div className="gallery">
                {galleryImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="gallery-image"
                    quality = {100}
                    sizes="(max-width: 3300px) 100vw, 200px"
                  />
                ))}
              </div>
            </div>

        
        <div className="fun-gifs">
          {funGifs.map((gif, index) => (
            <Image
              key={index}
              src={gif.src}
              alt={gif.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
        
        <footer>
          <div className="socials">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={social.width}
                  height={social.height}
                />
              </a>
            ))}
          </div>
        </footer>
      </div>
      
      
      <div className="checkered-border right"></div>
        </div>
    </>
  );
}