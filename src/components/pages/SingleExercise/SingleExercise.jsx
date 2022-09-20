import Layout from "../../common/Layout"
import TitleImage from "../../ui/TitleImage/TitleImage"
import { Link } from "react-router-dom"
import Alert from "../../ui/Alert/Alert"

import bgImage from "../../../images/pagesbg/profile.jpg"

import styles from "./SingleExercise.module.scss"

import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { $api } from "../../../api/api"

const SingleExercise = () => {
  const params = useParams()

  // const { data, isSuccess } = useQuery("Get exercise", () =>
  //   $api({
  //     url: `/api/exercises/log/${params.id}`,
  //     type: "GET",
  //   })
  // )

  return (
    <div>
      {isSuccess && (
        <Layout>
          <TitleImage title='Workouts' image={bgImage}></TitleImage>
          <div className={styles.workouts}>
            {data.map((item) => (
              <Link
                to={`/workouts/${item._id}`}
                key={item._id}
                className={styles.workout}
              >
                <h3 className={styles.title}>{item.name}</h3>
              </Link>
            ))}
          </div>
        </Layout>
      )}
    </div>
  )
}

export default SingleExercise