import { useRouter } from 'next/router'
import styles from './Title.module.css'
import Housing from '../../../components/SideMenus/Housing'
import Community from '../../../components/SideMenus/Community'
import Services from '../../../components/SideMenus/Services'
import Resumes from '../../../components/SideMenus/Resumes'
import Sale from '../../../components/SideMenus/Sale'
import Jobs from '../../../components/SideMenus/Jobs'
import Gigs from '../../../components/SideMenus/Gigs'
import SearchBox from '../../../components/SearchBox'
import ModeDropDown from '../../../components/ModeDropDown'
import FilterDropDown from '../../../components/FilterDropDown'
import Pagination from '../../../components/Pagination'
import ListMode from '../../../components/Modes/ListMode'
import GalleryMode from '../../../components/Modes/GalleryMode'
import ThumbMode from '../../../components/Modes/ThumbMode'
import Link from 'next/link'
import { useState } from 'react'
import get_feed from '../../../functions/getPosts';


const getSideBar = (value) => {
  if (value === 'community') return <Community />
  if (value === 'services') return <Services />
  if (value === 'discussion-forums') return 'Comming soon'
  if (value === 'housing') return <Housing />
  if (value === 'for-sale') return <Sale />
  if (value === 'jobs') return <Jobs />
  if (value === 'gigs') return <Gigs />
  if (value === 'resumes') return <Resumes />
}


const Post = ({data}) => {
  const router = useRouter()
  const { title } = router.query


  const [openFilter, setOpenFilter] = useState(false)
  return (
    <div className={styles.titleContainer}>
      <div className={styles.desktopView}>
        <div className={styles.sidebar}>{getSideBar(title)}</div>
        <div className={styles.titleMain}>
          <SearchBox />
          <div className={styles.paginationBox} >
            <ModeDropDown />
            <Pagination />
            <FilterDropDown />
          </div>
          {/* <div>
          {data.map((each, index) => <ListMode key={index} fav={each.fav} date={each.date} title={each.title} price={each.price} place={each.place} pic={each.pic} />)}
        </div> */}


        <div className={styles.Maincontent}>
          {data.map((each, index) => <GalleryMode section={"jobs"} subsection={""} id={each._id} key={index} fav={each.fav} date={each.formattedDate} title={each.title} price={each.product.price} place={each.city+" "+each.pincode} pic={true} picUrl={each.images.length>0 ? each.images[0] : "https://source.unsplash.com/featured/?{japan}"} />)}
        </div>
{/* 
        <div className={styles.contentbox}>

          <div className={styles.Maincontent}>
            {data.map((each, index) => <GalleryMode key={index} fav={each.fav} date={each.date} title={each.title} price={each.price} place={each.place} pic={each.pic} picUrl={each.picUrl} />)}
          </div>

          {/* <div className={styles.contentbox}>

          {data.map((each, index) => <ThumbMode key={index} fav={each.fav} date={each.date} title={each.title} price={each.price} place={each.place} pic={each.pic} picUrl={each.picUrl} />)}
        </div> */}

        </div>
      </div>
      <div className={styles.mobileView}>
        <SearchBox />
        <div className={ openFilter ? styles.optionMenu : styles.optionsNotOpen}>
          <div onClick={() => setOpenFilter(!openFilter)} className={styles.optionHeading}>⚙️ options</div>
          {openFilter &&
            <div className={styles.options}>
              {getSideBar(title)}
            </div>
          }
        </div>
        <div className={styles.mobileFilter}>
          <ModeDropDown />
          <FilterDropDown />
        </div>
        <Pagination />
        <div className={styles.mobileMain} >
          <div className={styles.contentbox}>
            {data.map((each, index) => <ThumbMode key={index} fav={each.fav} date={each.date} title={each.title} price={each.price} place={each.place} pic={each.pic} picUrl={each.picUrl} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

export async function getServerSideProps(context) {
  console.log(context.params);
  let data;
  try{
    data = await get_feed(context.params.title,context.params.subTitle)
  }catch(err){
    console.error(err);
    return {
      props:{data:[]}
    }
  }
  console.log(data)
  return {
    props: {data:data.data}, // will be passed to the page component as props
  }
}