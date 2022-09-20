import Layout from "../../common/Layout"
import TitleImage from "../../ui/TitleImage/TitleImage"
import Field from "../../ui/Field/Field"
import Button from "../../ui/Button/Button"
import Alert from "../../ui/Alert/Alert"

import styles from "./NewExercise.module.scss"

import cn from "classnames"

import BgImage from "../../../images/pagesbg/new-workout-bg.jpg"

import { useState } from "react"
import { useMutation } from "react-query"
import { $api } from "../../../api/api"

const NewExercise = () => {
  const [name, setName] = useState("")
  const [times, setTimes] = useState("")
  const [activeExerciseType, setActiveExerciseType] = useState("chest")

  const data = ["chest", "shoulders", "biceps", "legs", "hiit"]

  const {
    mutate,
    isLoading,
    error,
    isSuccess
  } = useMutation(
    'Create new exercise',
    () => 
    $api({
      url: '/exercises',
      type: 'POST',
      body: { name, times, image: activeExerciseType }
    }),
    {
      onSuccess() {
        setName('')
        setTimes('')
        setActiveExerciseType('chest')
      }
    }
  )

  const handleSubmit = e => {
    e.preventDefault()
    mutate()
  }
  return (
    <div>
      <Layout>
        <TitleImage image={BgImage} title={"New Exercise"} />
        <form action='' className={styles.form} onSubmit={handleSubmit}>
          {
            isSuccess && <Alert type="success" text={"Excercise created"}/>
          }
          <Field
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Field
            type='number'
            placeholder='Times'
            value={times}
            onChange={(e) => setTimes(+e.target.value)}
          />
          <div className={styles.types}>
            {data.map((item, index) => (
              <img
                className={cn({
                  [styles.active] : item === activeExerciseType,
                })}
                onClick={() => setActiveExerciseType(item)}
                key={index}
                src={`/uploads/exercises/${item}.svg`}
                alt={item}
              />
            ))}
          </div>
          <Button text={"Create"} style={"form"} />
        </form>
      </Layout>
    </div>
  )
}

export default NewExercise
