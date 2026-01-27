import styles from '../styles/Gallery.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//define the image arrays!
  const moreDrawingsArray = [
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

  const collageArray = [
    { src: '/drawings/jamie file.png', alt: 'Jamie Collage' },
    { src: '/drawings/naymal complete.png', alt: 'Naymal Collage' },
    { src: '/drawings/matthew.png', alt: 'Matthew Collage' },
    { src: '/drawings/alberto - Copy.png', alt: 'Alberto Collage' },
    { src: '/drawings/george print fr.png', alt: 'George Collage' },
    { src: '/drawings/DeaconCollage.webp', alt: 'Deacon Collage' }
  ];

  const aphmauXDArray = [];
  const clayArray = [];
  const shirtArray = [];

  const funGifsArray = [
    { src: 'https://dl.glitter-graphics.com/pub/3646/3646048yiipl9y9w5.gif', alt: 'Sparkle' },
    { src: 'https://i.pinimg.com/originals/7a/98/41/7a98413dbf3b22a08914cb78f4064a36.gif', alt: 'Flame' },
    { src: 'https://i.pinimg.com/originals/0d/ee/0e/0dee0ecd7d419681cddcc05cb1a04c37.gif', alt: 'Star' }
  ];

  const socialLinksArray = [
    { href: 'https://instagram.com/shopspoonbloom', icon: 'https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF', alt: 'Instagram', width: 40, height: 40 },
    { href: 'https://tiktok.com/@spoonbloom', icon: 'https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=FFFFFF', alt: 'TikTok', width: 50, height: 50 },
    { href: 'mailto:spoonbloom.contact@gmail.com', icon: 'https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF', alt: 'Email', width: 50, height: 50 },
    { href: 'https://depop.com/depopiel', icon: 'https://img.icons8.com/?size=100&id=1Afq3S5Cbcck&format=png&color=FFFFFF', alt: 'Depop', width: 50, height: 50 }
  ];

export default function Gallery() {
  // State to track which sections are visible
  const [visibleSections, setVisibleSections] = useState({
    'Collages': true,
    'Aphmau XD': true,
    'More Drawings': true,
    'Clay': true,
    'Shirts': true
  });

  // Toggle function
  const toggleSection = (sectionName) => {
    setVisibleSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const sections = [
    { label: 'Collages', images: collageArray },
    { label: 'Aphmau XD', images: aphmauXDArray },
    { label: 'More Drawings', images: moreDrawingsArray },
    { label: 'Clay', images: clayArray },
    { label: 'Shirts', images: shirtArray },
  ];

    return (
    <div className={styles.container}>
      <h1 className={styles.title}>gallery</h1>

      {sections.map((section) => (
        section.images.length > 0 && (
          <div key={section.label} className={styles.section}>
            {/* Clickable label with toggle indicator */}
            <button 
              className={`${styles.label} ${styles.toggleButton}`}
              onClick={() => toggleSection(section.label)}
              aria-expanded={visibleSections[section.label]}
            >
              {section.label}
              <span className={styles.toggleIcon}>
                {visibleSections[section.label] ? '−' : '+'}
              </span>
            </button>
            
            {/* Conditionally render images based on visibility state */}
            {visibleSections[section.label] && (
              <div className={styles.imageGrid}>
                {section.images.map((image, index) => (
                  <div key={index} className={styles.imageWrapper}>
                    <img 
                      src={image.src} 
                      alt={image.alt || `${section.label} ${index + 1}`} 
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      ))}
    </div>
  );
}