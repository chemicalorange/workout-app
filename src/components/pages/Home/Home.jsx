import Button from "../../ui/Button/Button"
import Counters from "../../ui/Counters/Counters"
import Layout from "../../common/Layout"

import styles from "./Home.module.scss"

import bgHome from "../../../images/background.png"

import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"
import { useAuth } from "../../../hooks/useAuth"

import { $api } from "../../../api/api"

const Home = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()

  const { data, isSuccess } = useQuery(
    "home page counters",
    () =>
      $api({
        url: "/users/profile",
        type: "GET",
      }),
    {
      enabled: isAuth,
    }
  )
  return (
    <div className={styles.wrapper}>
      <Layout background={bgHome}>
        <div className={styles.content}>
          <Button
            text={"New"}
            style={"main"}
            callback={() => {
              navigate("/new-workout")
            }}
          />
          <h1 className={styles.heading}>Exercises for shoulders</h1>
          {isSuccess && isAuth && (
            <Counters
              minutes={data.minutes}
              workouts={data.workouts}
              kgs={data.kgs}
            />
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Home
