import styles from '../styles/Shop.module.css'
import Carousel from '../components/Carousel'
import Image from 'next/image'

import { useState } from 'react'

const platforms = [
  { name: 'Etsy', img: '/images/ShopOnEtsy.png', link: 'https://etsy.com/shop/shopspoonbloom' },
  { name: 'Ko-fi', img: '/images/ShopOnKofi.png', link: 'https://ko-fi.com/spoonbloom' },
  { name: 'Depop', img: '/images/ShopOnDepop.png', link: 'https://depop.com/shopspoonbloom' },
]

const products = [
  { name: 'Minecraft Diaries Character Fancards',
    images: ['/products/Cards1.png', '/products/Cards2.png', '/products/Cards3.png',
      '/products/Cards4.png', '/products/Cards5.png', '/products/Cards6.png', '/products/Cards7.png', '/products/Cards8.png', '/products/Cards9.png'],
    link: 'https://www.etsy.com/listing/4443416587/pre-order-aphmau-minecraft-diaries?etsrc=sdt&utm_medium=SellerListingTools&utm_campaign=Share&utm_source=Pinterest&share_time=1769285120000&utm_term=so.slt&epik=dj0yJnU9Rl9yYlZJTWQtN3NmeThVaThCTzJDZTZfSC1maldVdUcmcD0wJm49QmNlc0EyazlKeTBWcnRzWEliYzhUZyZ0PUFBQUFBR2wxSmp3m' },
      
  { name: 'Minecraft Diaries Hairclips',
    images: ['/products/Clips1.png', '/products/Clips2.png', '/products/Clips3.png', '/products/Clips6.png'],
    link: 'https://www.etsy.com/listing/4444738979/garroth-laurance-minecraft-diaries?click_key=00bdf9d30ace94318226242542ae33c13eb32c6c%3A4444738979&click_sum=7dad71f1&sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_3&pro=1' },
  
  { name: 'Minecraft Diaries Keychains',
    images: ['/products/Keychain1.png', '/products/Keychain2.png', '/products/Keychain3.png', '/products/Keychain4.png', '/products/Keychain5.png', '/products/Keychain6.png', '/products/Keychain7.png', '/products/Keychain8.png'],
    link: 'https://www.etsy.com/listing/4446272172/aphmau-garroth-laurance-minecraft?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_4&pro=1&logging_key=911605fd8b7ff1054fe4305c40095f9faa4cb701%3A4446272172' },
    
  { name: 'Minecraft Diaries Necklaces', 
    images: ['/products/Necklace1.png', '/products/Necklace2.png', '/products/Necklace3.png', '/products/Necklace4.png', '/products/Necklace5.png',
      '/products/Necklace6.png', '/products/Necklace7.png', '/products/Necklace8.png', '/products/Necklace9.png'],
    link: 'https://www.etsy.com/listing/4446828409/garroth-laurance-minecraft-diaries?click_key=264154993310a764d04d1dc0875ccdb16015004c%3A4446828409&click_sum=06051df4&sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_1&pro=1' } 
]

export default function Shop() {
   return (
     <div className={styles.page}>
     <h1 className={styles.title}>shop</h1>
      
      <div className={styles.platformRow}> 
      {platforms.map(p => (
         <a key={p.name} href={p.link} target="_blank"
          className={styles.platformBtn}>
            <Image src={p.img} alt={p.name} width={250}
             height={156.25}/>
             </a> 
            ))}
          </div>
          
      <div className={styles.grid}> 
        {products.map((product, i) => (
           <div key={i} className={styles.card}>
  <Carousel images={product.images} /> 

  <h2 className={styles.productName}>{product.name}</h2>

  <a href={product.link} target="_blank" className={styles.buyBtn}> 
    buy now!
  </a> 
</div>

                 ))}
                  </div>
               </div>
                )
               }