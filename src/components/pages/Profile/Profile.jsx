import Layout from "../../common/Layout"
import TitleImage from "../../ui/TitleImage/TitleImage"
import Counters from "../../ui/Counters/Counters"

import bgImage from "../../../images/pagesbg/profile.jpg"
import afterImage from "../../../images/profileAfter.jpg"
import userImage from "../../../images/header/user.svg"

import styles from "./Profile.module.scss"

import { $api } from "../../../api/api"

import { useQuery } from "react-query"

const Profile = () => {
  const { data, isSuccess, error } = useQuery("Get profile info", () =>
    $api({
      url: "/users/profile",
      type: "GET",
    })
  )
  console.log(data)

  return (
    <div>
      <Layout>
        <TitleImage image={bgImage}>
          <div className={styles.profileInfo}>
            <div className={styles.profileTop}>
              <img src={userImage} alt='user' width={50} />
              <p>{isSuccess && data.email}</p>
            </div>
            {isSuccess && (
              <Counters
                minutes={data.minutes}
                workouts={data.workouts}
                kgs={data.kgs}
              />
            )}
          </div>
        </TitleImage>
        <div className={styles.images}>
          <div className={styles.imagesItem}>
            <h2>Before</h2>
            <div className={styles.image}>
              <img src={afterImage} alt='before' />
            </div>
          </div>
          <div className={styles.imagesItem}>
            <h2>After</h2>
            <div className={styles.image}>
              <img src={afterImage} alt='after' />
            </div>
          </div>
        </div>
        <p className={styles.title}>profile</p>
      </Layout>
    </div>
  )
}

export default Profile
