import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import { ExerciseTwo } from './exercise-two'
import { ExerciseThree } from './exercise-three'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-two">Exercise two</Link>
      <Link to="/exercise-three">Exercise three</Link>

      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
      <Route path="/exercise-two">
        <ExerciseTwo />
      </Route>
      <Route path="/exercise-three">
        <ExerciseThree />
      </Route>
    </BrowserRouter>
  )
}