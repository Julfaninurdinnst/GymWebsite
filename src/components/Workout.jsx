import React from 'react'
import SectionWrappper from './SectionWrappper'
export default function Workout(props) {
  const { workout } = props
  return (
    <SectionWrappper header={'welcome to'} title={['The', 'DANGER', 'zone']}>
    </SectionWrappper>
  )
}
