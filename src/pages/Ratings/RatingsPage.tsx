import { VFC, useState } from 'react'
import CustomTable from '../../components/common/customTable/CustomTable'
import Header from '../../components/common/header/Header'
import Layout from '../../components/layout/Layout'
import { allBoxers } from '../../data/allPlayers'
import { disabledClasses, weightClasses } from '../../data/weightClasses'

const RatingsPage: VFC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('ヘビー級')
  const onClick = (weightClass: string) => setCurrentWeight(weightClass)

  const filteredPlayers = allBoxers.filter(
    (boxer) => boxer.weightClass === currentWeight
  )

  // 選手のポイントだけ取得
  const playerPoint: number[] = filteredPlayers.map((data) => data.point)

  return (
    <Layout>
      <Header displayText="ratings" headerStyle="ratingsPageStyle" />
      <div style={{ height: '90%' }} className="flex flex-row">
        <div className="w-1/5 h-full flex justify-end items-center">
          <div className="h-5/6 w-5/6">
            <ul className="menu h-full border bg-base-100 rounded-box overflow-y-scroll">
              {weightClasses
                .filter((item) => !disabledClasses.includes(item))
                .map((item) => (
                  <li onClick={() => onClick(item)} className="border-b-2">
                    <a className={currentWeight === item ? 'bg-base-300' : ''}>
                      {item}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-4/5 h-full flex justify-center items-center">
          <div className="w-5/6 h-5/6 overflow-y-scroll">
            <CustomTable
              head_list={['順位', '選手名', '戦績', 'ポイント']}
              body_list={filteredPlayers}
              tableStyle="table table-zebra w-full shadow-xl rounded-2xl"
              isTotal
              point_list={playerPoint}
            />
          </div>
        </div>
      </div>
      <div className="absolute w-screen bottom-0 z-10 bg-black bg-opacity-80 flex flex-col justify-center items-center" style={{ height: '95%' }}>
        <h1 className="text-white text-4xl font-serif italic tracking-widest">Coming Soon....</h1>
      </div>
    </Layout>
  )
}

export default RatingsPage
