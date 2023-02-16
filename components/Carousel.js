import styles from '@/styles/Components/Carousel.module.css'
import Link from 'next/link'
import { useState } from 'react'

const CarouselItem = ({ option }) => {
  return (
    <div className={styles.carouselItem}>
      <h1>{option.name}</h1>
      <p>{option.description ? option.description : 'No description'}</p>
      <Link href={option.html_url} target="_blank">
        Learn more
      </Link>
    </div>
  )
}

const Carousel = ({ data }) => {
  const [idx, setIdx] = useState(0)

  const increaseIndex = (num) => {
    if (idx >= data.length - 1) return setIdx(0)

    setIdx((prevIdx) => prevIdx + num)
  }

  const decreaseIndex = (num) => {
    if (idx <= 0) return setIdx(data.length - 1)

    setIdx((prevIdx) => prevIdx - num)
  }

  return (
    <>
      <div className={styles.carousel}>
        <button type="button" onClick={() => decreaseIndex(1)}>
          &#60;
        </button>

        <CarouselItem option={data[idx]} />

        <button type="button" onClick={() => increaseIndex(1)}>
          &#62;
        </button>
      </div>
    </>
  )
}

export default Carousel
