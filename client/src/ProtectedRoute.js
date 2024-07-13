/* eslint-disable react/prop-types */
import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    return <Navigate to="/login" replace />
  }

  return { children }
}

export default ProtectedRoute
