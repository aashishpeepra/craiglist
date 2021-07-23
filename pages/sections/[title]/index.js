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

const data = [
  {
    "fav": false,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{colors}"
  },
  {
    "fav": true,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{house}"
  },
  {
    "fav": false,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{smile}"
  },
  {
    "fav": false,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{flowers}"
  },
  {
    "fav": true,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{people}"
  },
  {
    "fav": true,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{place}"
  },
  {
    "fav": false,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{landscape}"
  },
  {
    "fav": true,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{future}"
  },
  {
    "fav": false,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{food}"
  },
  {
    "fav": false,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{nature}"
  },
  {
    "fav": true,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{music}"
  },
  {
    "fav": true,
    "date": "Jun 25",
    "title": "Big Share House near SSC",
    "price": "987",
    "place": "West Seattle",
    "pic": true,
    "picUrl": "https://source.unsplash.com/featured/?{japan}"
  }
]

const Post = () => {
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
          {data.map((each, index) => <GalleryMode section={"jobs"} subsection={""} id="1234567" key={index} fav={each.fav} date={each.date} title={each.title} price={each.price} place={each.place} pic={each.pic} picUrl={each.picUrl} />)}
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