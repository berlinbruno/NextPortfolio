import React from 'react'
import { SyncLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className=" h-auto w-full mb-4 flex justify-center items-center">
    <SyncLoader color="#6b26d9"
    size={30} />
  </div>
  )
}