import React from 'react'
import FlowerAura from '../check.jsx'
import styles from './FlowerAura.module.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <FlowerAura />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </>
  )
}

export default App


