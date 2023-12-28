import React from 'react'
import Layout from '../pages/Layout'
import Landing from '../pages/Landing';
import {  Routes, Route } from "react-router-dom";

function userRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout/>} >
        <Route index element={<Landing/>} />
      </Route>
    </Routes>
  )
}

export default userRoutes