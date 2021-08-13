import { useRouter } from 'next/router'
import styles from '../Title.module.css'
import Housing from '../../../../components/SideMenus/Housing'
import Community from '../../../../components/SideMenus/Community'
import Services from '../../../../components/SideMenus/Services'
import Resumes from '../../../../components/SideMenus/Resumes'
import Sale from '../../../../components/SideMenus/Sale'
import Jobs from '../../../../components/SideMenus/Jobs'
import Gigs from '../../../../components/SideMenus/Gigs'
import ListMode from '../../../../components/Modes/ListMode'
import GalleryMode from '../../../../components/Modes/GalleryMode'
import ThumbMode from '../../../../components/Modes/ThumbMode';

import get_feed from '../../../../functions/getPosts'

const getSideBar = (value, subValue) => {
  if (value === 'community') return <Community subTitle={subValue} />
  if (value === 'services') return <Services subTitle={subValue} />
  if (value === 'discussion-forums') return 'Comming soon'
  if (value === 'housing') return <Housing subTitle={subValue} />
  if (value === 'for-sale') return <Sale subTitle={subValue} />
  if (value === 'jobs') return <Jobs subTitle={subValue} />
  if (value === 'gigs') return <Gigs subTitle={subValue} />
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
const Comment = () => {
  const router = useRouter()
  const { title, subTitle } = router.query

  return (
    <div className={styles.titleContainer}>
      <div className={styles.sidebar}>{getSideBar(title, subTitle)}</div>
      <div className={styles.titleMain}>
      <div className={styles.Maincontent}>
          {data.map((each, index) => <GalleryMode key={index} id={each._id} fav={each.fav} date={each.date} title={each.title} price={each.price} place={each.place} pic={each.pic} picUrl={each.picUrl} />)}
        </div>
      </div>
    </div>
  )
}

export default Comment;

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
    props: {data}, // will be passed to the page component as props
  }
}