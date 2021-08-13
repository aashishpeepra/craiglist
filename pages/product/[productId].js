import styles from './Product.module.css';
import Tag from '../../components/ui/tag/tag';
import MapConstant from "../../components/mapConstant/app";
import get_post from '../../functions/getPost';
const tags = [
  'furnished',
  'house',
  'w/d in unit',
  'no smoking',
  'carport',
  'no private bath',
  'private room'
]

const Product = ({data}) => {

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
          {data.title}
          (<span className={styles.titleArea} >{data.city}</span>)
        </div>
      </div>

      <div className={styles.productDetails}>

        <div className={styles.BlockOne}>
          <div className={styles.Img}>
            <div className={styles.mainImg} >
              <img src={data.images.length > 0 ? data.images[0] : 'https://source.unsplash.com/featured/?{food}'} />
            </div>
            <div className={styles.otherImg}>
              {/* <img src='https://source.unsplash.com/featured/?{food}' />
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
              <img src='https://source.unsplash.com/featured/?{food}' /> */}
            </div>
          </div>
          <div className={styles.Data}>
           {data.description}
          </div>
        </div>

        <div className={styles.BlockTwo}>
          <div className={styles.maps}>
              <MapConstant lat={data.coords.latitude} long={data.coords.longitude}/>
          </div>
          <div className={styles.tags}>
            {(data.product && data.product.propertise) && data.product.propertise.map(each=><Tag key={each} title={each}/>)}
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
          <div>post id: {data._id}</div> 
          <div>posted: a day ago</div>
        </div>
      </div>

    </div>
  )
}

export default Product

export async function getServerSideProps(context) {
    console.log(context.params);
    if(!context.params.productId){
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    let result;
    try{
        result = await get_post(context.params.productId);
    }catch(err){
        console.error(err);
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    console.log(result.data)
    return {
      props: {data:result.data}, // will be passed to the page component as props
    }
  }