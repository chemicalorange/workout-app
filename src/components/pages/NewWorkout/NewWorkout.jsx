import Layout from "../../common/Layout"
import TitleImage from "../../ui/TitleImage/TitleImage"
import BgImage from "../../../images/pagesbg/new-workout-bg.jpg"
import Field from "../../ui/Field/Field"
import Button from "../../ui/Button/Button"
import ReactSelect from "react-select"
import Alert from "../../ui/Alert/Alert"
import { Link } from "react-router-dom"

import styles from "./NewWorkout.module.scss"

import { optionColor } from "../../ui/optionColor"
import { $api } from "../../../api/api"

import { useEffect, useState } from "react"
import { useQuery, useMutation } from "react-query"

const NewWorkout = () => {
  const [name, setName] = useState("")
  const [exercises, setExercises] = useState("")
  const [checkedExercises, setCheckedExercises] = useState("")

  const {
    data: exercisesData,
    isSuccess: gettingExercisesIsSuccess,
    error,
  } = useQuery("Get exercises", () =>
    $api({
      url: "/exercises",
      type: "GET",
    })
  )
  useEffect(() => {
    if (gettingExercisesIsSuccess) {
      setExercises(
        exercisesData.map((item) => ({
          value: item._id,
          label: item.name,
        }))
      )
    }
  }, [gettingExercisesIsSuccess])

  const {
    mutate: addWorkout,
    isLoading: addWorkoutIsLoading,
    error: addWorkoutError,
    isSuccess: addWorkoutIsSuccess,
  } = useMutation(
    "Add new workout",
    () =>
      $api({
        url: "/workouts",
        type: "POST",
        body: {
          name,
          exerciseIds: checkedExercises.map((item) => item.value),
        },
      }),
    {
      onSuccess() {
        setName("")
        setCheckedExercises("")
      },
    }
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    addWorkout()
  }
  return (
    <div>
      <Layout>
        <TitleImage image={BgImage} title={"New Workout"} />
        <form onSubmit={handleSubmit} className={styles.form}>
          {addWorkoutIsSuccess && <Alert type='success' text={"Workout created"} />}
          <Field
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Link to='/new-exercise' className={styles.link}>
            Add new exercise
          </Link>
          {gettingExercisesIsSuccess && (
            <ReactSelect
              classNamePrefix='select'
              placeholder='Exercises'
              title='Exercises'
              options={exercises}
              isSearchable={false}
              value={checkedExercises}
              onChange={setCheckedExercises}
              theme={(theme) => optionColor(theme)}
              isMulti={true}
            />
          )}

          <Button text={"Create"} style={"form"} />
        </form>
      </Layout>
    </div>
  )
}

export default NewWorkout
