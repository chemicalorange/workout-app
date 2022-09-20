import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";
import NewExercise from "./components/pages/NewExercise/NewExercise";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout";
import Profile from "./components/pages/Profile/Profile";
import SingleExercise from "./components/pages/SingleExercise/SingleExercise";
import SingleWorkout from "./components/pages/SingleWorkout/SingleWorkout";
import Workouts from "./components/pages/Workouts/Workouts";

export const routesData = [
  {
    path: '/',
    exact: true,
    component: Home,
    isAuth: false
  },
  {
    path: '/new-workout',
    exact: false,
    component: NewWorkout,
    isAuth: true
  },
  {
    path: '/auth',
    exact: false,
    component: Auth,
    isAuth: false
  },
  {
    path: '/new-exercise',
    exact: false,
    component: NewExercise,
    isAuth: true
  },
  {
    path: '/profile',
    exact: false,
    component: Profile,
    isAuth: true
  },
  {
    path: '/workouts/',
    exact: false,
    component: Workouts,
    isAuth: true
  },
  {
    path: '/workouts/:id',
    exact: false,
    component: SingleWorkout,
    isAuth: true
  },
  {
    path: '/exercises/:id',
    exact: false,
    component: SingleExercise,
    isAuth: true
  }
]