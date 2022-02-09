import { VFC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { disabledClasses, weightClasses } from '../../data/weightClasses'

const SelectWeightClassPage: VFC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('')
  const history = useHistory()

  const handleSelectWeightClass = (weightClass: string) =>
    setSelectedClass(weightClass)

  return (
    <div className="h-screen w-screen flexColCenter">
      <div className="h-1/5 w-full flex flex-col justify-end items-center mb-8">
        <h1 className="text-2xl italic">以下から階級を選択してください</h1>
        <p className="pt-3">- {selectedClass} -</p>
      </div>
      <div className="h-3/5 w-full flex justify-center items-start border-1 p-15 rounded-lg">
        <ul className="menu h-full lg:w-2/5 md:w-1/2 sm:w-4/5 p-5 border bg-base-100 rounded-box shadow-lg overflow-y-scroll">
          {weightClasses
            .filter((item) => !disabledClasses.includes(item))
            .map((item, index) => (
              <li key={index} onClick={() => handleSelectWeightClass(item)}>
                <a className={selectedClass === item ? 'bg-base-300' : ''}>
                  {item}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="h-1/5 w-1/3 flex justify-around items-center">
        <button
          onClick={() => history.push('/')}
          className="btn btn-outline btn-warning"
        >
          Homeに戻る
        </button>
        <button
          onClick={() => history.push(`/battle/${selectedClass}`)}
          className="btn btn-primary"
          disabled={!selectedClass}
        >
          対戦する
        </button>
      </div>
    </div>
  )
}

export default SelectWeightClassPage
