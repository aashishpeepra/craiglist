import { useRouter } from 'next/router'
import styles from './Title.module.css'
import Housing from '../../../components/SideMenus/Housing'
import Community from '../../../components/SideMenus/Community'
import Services from '../../../components/SideMenus/Services'
import Resumes from '../../../components/SideMenus/Resumes'
import Sale from '../../../components/SideMenus/Sale'
import Jobs from '../../../components/SideMenus/Jobs'
import Gigs from '../../../components/SideMenus/Gigs'
import Link from 'next/link'

const getSideBar = (value) => {
  if(value === 'community') return <Community />
  if(value === 'services') return <Services />  
  if(value === 'discussion-forums') return 'Comming soon'
  if(value === 'housing') return <Housing />
  if(value === 'for-sale') return <Sale />
  if(value === 'jobs') return <Jobs />
  if(value === 'gigs') return <Gigs />
  if(value === 'resumes') return <Resumes />
}

const Post = () => {
  const router = useRouter()
  const { title } = router.query

  return (
    <div className={styles.titleContainer}>
      <div className={styles.sidebar}>{getSideBar(title)}</div>
      <div className={styles.titleMain}></div>
    </div>
  )
}

export default Post