import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2  className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/> in a few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium, iste quaerat earum tempore excepturi, maiores fugit inventore animi quae vero? Veniam dignissimos reprehenderit rerum quidem deleniti rem quam facere.</p>
      <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default CardDeal