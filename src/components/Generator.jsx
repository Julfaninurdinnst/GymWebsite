import React, { useState } from 'react'
import SectionWrappper from './SectionWrappper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'
function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='textsm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}
export default function Generator(props) {
  const { muscles, setMuscles, poison, setPoison, goals, setGoals, updateWorkout } = props
  const [showModal, setShowModal] = useState(true)

  function toggleModal() {
    setShowModal(!showModal)
  }
  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }
    if (muscles.length > 2) {
      return
    }
    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }
    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
      setShowModal(false)
    }
  }
  return (
    <SectionWrappper id="generate" header={'generate your workout'} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'pick your poison'} description={'Select the workout you wish to endure'} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setPoison(type)
            }} className={'bg-slate-950 border  py-4 rounded-lg duration-200 hover:border-blue-700' + (type === poison ? ' border-blue-700' : ' border-blue-400')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
      <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilayion.'} />
      <div className="bg-slate-950  border boder-solid border-blue-400 rounded-lg flex flex-col">
        <button onClick={toggleModal} className='relative flex p-3 justify-center items-center'>
          <p className='capitalize'>
            {muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}
          </p>
          <i className='fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 '></i>
        </button>
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button key={muscleGroupIndex} onClick={() => {
                  updateMuscles(muscleGroup)
                }} className={`hover:text-blue-400 duration-200 ${muscles.includes(muscleGroup) ? 'text-blue-400' : ''}`}>

                  <p className='uppercase'>{muscleGroup.replaceAll('_', " ")}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <Header index={'03'} title={'Become Jaggernaut'} description={'Select your ultimate objective'} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              return (
                setGoals(scheme)
              )
            }} className={'bg-slate-950 border  py-4 rounded-lg duration-200 hover:border-blue-700' + (scheme === goals ? ' border-blue-700' : ' border-blue-400')} key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrappper >
  )
}
