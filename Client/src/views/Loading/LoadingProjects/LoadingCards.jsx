import React from 'react'
import LoadingCard from './LoadingCard'
const project = [1,2,3,4,5,6,7]
function LoadingProjects() {
  return (
    <div className='part2'>
    {project.map(()=><LoadingCard/>)}
  </div>
  )
}

export default LoadingProjects
