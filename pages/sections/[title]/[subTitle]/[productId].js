import { useRouter } from 'next/router';
import styles from './Product.module.css';

const tags = [
  'furnished',
  'house',
  'w/d in unit',
  'no smoking',
  'carport',
  'no private bath',
  'private room'
]

const Product = () => {
  const router = useRouter()
  const { title, subTitle, productId } = router.query

  return (
    <div className={styles.productBox}>

      <div className={styles.productHeader}>
        <div className={styles.productAction}>
          <div className={styles.reply}>reply</div>
          <div className={styles.star}>
            ☆
            <span>favourite</span>
          </div>
          <div className={styles.hide}>
            🗑
            <span>hide</span>
          </div>
          <div className={styles.flag}>
            🏳
            <span>flag</span>
          </div>
          <div className={styles.time}>Posted a day ago</div>
        </div>
        <div className={styles.productTitle}>
          $695 Big Share House near SSC
          (<span className={styles.titleArea} >West Seattle</span>)
        </div>
      </div>

      <div className={styles.productDetails}>

        <div className={styles.BlockOne}>
          <div className={styles.Img}>
            <div className={styles.mainImg} >
              <img src='https://source.unsplash.com/featured/?{food}' />
            </div>
            <div className={styles.otherImg}>
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
              <img src='https://source.unsplash.com/featured/?{food}' />
            </div>
          </div>
          <div className={styles.Data}>
            Big service share house seeking for students and young professional. It&apos;s right down from South Seattle College in West Seattle. Only 10 mins walk to SSC or 20 mins bus to downtown. All rooms furnished. All utilities, high speed internet and cleaning service included.
            No smoking. No pet.
            <br />
            <br />
            1 room for $695/mo. First &amp; last month with $400 deposit to move in .
            Available by September 1st.
            <br />
            <br/>
            Please call to make appointment to view.
          </div>
        </div>

        <div className={styles.BlockTwo}>
          <div className={styles.maps}>
          </div>
          <div className={styles.tags}>
            {tags.map((value, index) => <div key={index} className={styles.tag}>{value}</div>)}
          </div>
        </div>

      </div>

      <div className={styles.productFooter} >
        <div className={styles.productConditions}>
          <ul>
            <li>do NOT contact me with unsolicited services or offers</li>
          </ul>
        </div>
        <div className={styles.productDetailsFooter}>
          <div>post id: 7353806357</div> 
          <div>posted: a day ago</div>
        </div>
      </div>

    </div>
  )
}

export default Product