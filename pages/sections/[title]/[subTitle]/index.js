import { useRouter } from "next/router";
import styles from "../Title.module.css";
import Housing from "../../../../components/SideMenus/Housing";
import Community from "../../../../components/SideMenus/Community";
import Services from "../../../../components/SideMenus/Services";
import Resumes from "../../../../components/SideMenus/Resumes";
import Sale from "../../../../components/SideMenus/Sale";
import Jobs from "../../../../components/SideMenus/Jobs";
import Gigs from "../../../../components/SideMenus/Gigs";
import ListMode from "../../../../components/Modes/ListMode";
import GalleryMode from "../../../../components/Modes/GalleryMode";
import ThumbMode from "../../../../components/Modes/ThumbMode";

import get_feed from "../../../../functions/getPosts";

const getSideBar = (value, subValue) => {
  if (value === "community") return <Community subTitle={subValue} />;
  if (value === "services") return <Services subTitle={subValue} />;
  if (value === "discussion-forums") return "Comming soon";
  if (value === "housing") return <Housing subTitle={subValue} />;
  if (value === "for-sale") return <Sale subTitle={subValue} />;
  if (value === "jobs") return <Jobs subTitle={subValue} />;
  if (value === "gigs") return <Gigs subTitle={subValue} />;
  if (value === "resumes") return <Resumes />;
};

const Comment = ({ data }) => {
  const router = useRouter();
  const { title, subTitle } = router.query;

  return (
    <div className={styles.titleContainer}>
      <div className={styles.sidebar}>{getSideBar(title, subTitle)}</div>
      <div className={styles.titleMain}>
        <div className={styles.Maincontent}>
          {data.map((each, index) => (
            <GalleryMode
              section={"jobs"}
              subsection={""}
              id={each._id}
              key={index}
              fav={each.fav}
              date={each.formattedDate}
              title={each.title}
              price={each.product.price}
              place={each.city + " " + each.pincode}
              pic={true}
              picUrl={
                each.images.length > 0
                  ? each.images[0]
                  : "https://source.unsplash.com/featured/?{japan}"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;

export async function getServerSideProps(context) {
  console.log(context.params);
  let data;
  try {
    data = await get_feed(context.params.title, context.params.subTitle);
  } catch (err) {
    console.error(err);
    return {
      props: { data: [] },
    };
  }
  console.log(data);
  return {
    props: { data:data.data }, // will be passed to the page component as props
  };
}
