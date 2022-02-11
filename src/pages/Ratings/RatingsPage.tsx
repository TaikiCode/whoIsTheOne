import { VFC, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { allBoxers } from '../../data/allPlayers'
import { disabledClasses, weightClasses } from '../../data/weightClasses'

const RatingsPage: VFC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('ヘビー級')
  const onClick = (weightClass: string) => setCurrentWeight(weightClass)

  const filteredPlayers = (allPlayers: any[]) => {
    return allPlayers.filter(
      (player: any) =>
        player.weightClass === currentWeight
    )
  }

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-col">
        <div style={{ height: '10%' }} />
        <div style={{ height: '10%' }} className="flex justify-center items-end">
            <h1 className="text-3xl uppercase">Ratings</h1>
        </div>
        <div style={{ height: '80%' }} className="flex flex-row">
          <div className="w-1/5 h-full flex justify-end items-center">
            <div className="h-5/6 w-5/6">
              <ul className="menu h-full border bg-base-100 rounded-box overflow-y-scroll">
                {weightClasses
                  .filter((item) => !disabledClasses.includes(item))
                  .map((item) => (
                    <li
                      onClick={() => onClick(item)}
                      className="border-b-2 font-mono"
                    >
                      <a className={currentWeight === item ? 'bg-base-300' : ''}>{item}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="w-4/5 h-full flex justify-center items-center">
            <div className="w-5/6 h-5/6 overflow-y-scroll">
              <table className="table table-zebra w-full shadow-xl rounded-2xl">
                <thead>
                  <tr>
                    <th className="text-center">順位</th>
                    <th className="text-center">選手名</th>
                    <th className="text-center">戦績</th>
                    <th className="text-center">ポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers(allBoxers).map((boxer, index) => (
                    <tr key={index}>
                      <td className="text-center text-lg font-serif">1位</td>
                      <td className="text-center h-full flex items-center">
                        <div className="w-1/3 avatar flex justify-end">
                          <div className="w-16 h-16 rounded-btn">
                            <img src={boxer.image} />
                          </div>
                        </div>
                        <div className="w-2/3 flex justify-center font-bold">
                          {boxer.name}
                        </div>
                      </td>
                      <td className="text-center font-serif">{boxer.record}</td>
                      <td className="text-center">{boxer.point}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RatingsPage
