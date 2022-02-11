import { VFC, useState } from 'react'

interface Props {
  currentWeight: string
  weightClasses: string[]
  onClick: (weightClass: string) => void
}

const Tabs: VFC<Props> = ({ currentWeight, weightClasses, onClick }) => {
  return (
    <div className="tabs tabs-boxed flex flex-nowrap py-4 overflow-x-scroll whitespace-nowrap">
      {weightClasses.map((weightClass, index) => (
        <a
          key={index}
          className={`tab mx-1 ${
            currentWeight === weightClass && 'tab-active'
          } `}
          onClick={() => onClick(weightClass)}
        >
          {weightClass}
        </a>
      ))}
    </div>
  )
}

export default Tabs
