import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Shop() {
  const router = useRouter();

  // Gallery images data
  const galleryImages = [
    //{ src: '/images/ComingSoon.png', alt: 'WIP' },
  ];

  const funGifs = [
    { src: 'https://dl.glitter-graphics.com/pub/3646/3646048yiipl9y9w5.gif', alt: 'Sparkle' },
    { src: 'https://i.pinimg.com/originals/7a/98/41/7a98413dbf3b22a08914cb78f4064a36.gif', alt: 'Flame' },
    { src: 'https://i.pinimg.com/originals/0d/ee/0e/0dee0ecd7d419681cddcc05cb1a04c37.gif', alt: 'Star' }
  ];

  const socialLinks = [
    { href: 'https://etsy.com/shop/shopspoonbloom', icon: 'https://img.icons8.com/?size=100&id=VTJpUu3wkgIl&format=png&color=FFFFFF', alt: 'Etsy', width: 35, height: 35 },
    { href: 'https://instagram.com/shopspoonbloom', icon: 'https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF', alt: 'Instagram', width: 35, height: 35 },
    { href: 'https://ko-fi.com/spoonbloom', icon: 'https://img.icons8.com/?size=100&id=3zOBKGrfuTCN&format=png&color=FFFFFF', alt: 'Ko-Fi', width: 50, height: 50 },
    { href: 'https://tiktok.com/@spoonbloom', icon: 'https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=FFFFFF', alt: 'TikTok', width: 50, height: 50 },
    { href: 'mailto:spoonbloom.contact@gmail.com', icon: 'https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF', alt: 'Email', width: 50, height: 50 },
    { href: 'https://depop.com/shopspoonbloom', icon: 'https://img.icons8.com/?size=100&id=1Afq3S5Cbcck&format=png&color=FFFFFF', alt: 'Depop', width: 50, height: 50 }
  ];

  return (
    <>
        <Head>
        <title>spoonbloom ᯓ★ </title>
        <meta name="description" content="spoonbloom home pagey" />
        </Head>

        {/*section one gallery */}
 
        <div className="main-content" id="index">
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
            <h1 className="title">Home</h1>
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
          
          <p className="blurb">Welcome! We are under construction...but feel free to peek around...I won't tell...</p>
          
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
      
      {/* <div className="fun-gifs">
          {funGifs.map((gif, index) => (
            <Image
              key={index}
              src={gif.src}
              alt={gif.alt}
              width={100}
              height={100}
            />
          ))}
        </div>*/}

{/*
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
*/}  
       </>
  );
}