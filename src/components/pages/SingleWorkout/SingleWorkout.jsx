import Layout from '../../common/Layout'
import TitleImage from '../../ui/TitleImage/TitleImage'
import { Link } from 'react-router-dom'
import Alert from '../../ui/Alert/Alert'

import bgImage from '../../../images/pagesbg/profile.jpg'

import styles from './SingleWorkout.module.scss'

import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { $api } from '../../../api/api'

const SingleWorkout = () => {
  const params = useParams()

  const { data, isSuccess } = useQuery('Get workout', () =>
    $api({
      url: `/workouts/${params.id}`,
      type: 'GET',
    })
  )
  return (
    <div>
      {isSuccess && (
        <Layout>
          <TitleImage title={data.name} image={bgImage}>
            <div className={styles.time}>{data.minutes}min.</div>
          </TitleImage>
          <div className={styles.workouts}>
            {data.exercises.map((item) => (
              <Link
                to={`/exercises/${item._id}`}
                key={item._id}
                className={styles.workout}
              >
                <h3 className={styles.title}>{item.name}</h3>
                <img src={`/uploads/exercises/${item.image}.svg`} alt="" />
              </Link>
            ))}
            {data.exercises.length === 0 && (
              <Alert type="warning" text="There are no exercises" />
            )}
          </div>
        </Layout>
      )}
    </div>
  )
}

export default SingleWorkout
