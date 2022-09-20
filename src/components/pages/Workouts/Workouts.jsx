import Layout from "../../common/Layout"
import TitleImage from "../../ui/TitleImage/TitleImage"
import Alert from "../../ui/Alert/Alert"
import Button from "../../ui/Button/Button"
import { Link } from "react-router-dom"

import bgImage from "../../../images/pagesbg/profile.jpg"

import styles from "./Workouts.module.scss"

import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { $api } from "../../../api/api"

const Workouts = () => {
  const navigate = useNavigate()

  const { data, isSuccess } = useQuery("Get workouts", () =>
    $api({
      url: "/workouts",
      type: "GET",
    })
  )

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
            {data.length === 0 && (
              <>
                <Alert type='warning' text='There are no workouts' />
                <Button
                  text={"New workout"}
                  style={"main"}
                  callback={() => {
                    navigate("/new-workout")
                  }}
                />
              </>
            )}
          </div>
        </Layout>
      )}
    </div>
  )
}

export default Workouts
