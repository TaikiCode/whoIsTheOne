import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../atom/customButton/CustomButton'

interface Props {
  playersData: any[]
  weightClass: string
}

const BattleResult: VFC<Props> = ({ playersData, weightClass }) => {
  const history = useHistory()
  return (
    <>
      <div className="h-1/5 flex flex-col justify-evenly items-center pt-10">
        <h1 className="text-3xl uppercase italic">結果発表</h1>
        <div className="text-md">- {weightClass} -</div>
      </div>
      <div className="h-3/5 flex justify-center items-start overflow-y-scroll">
        <table className="table h-full lg:w-3/5 shadow-xl rounded-2xl">
          <thead>
            <tr>
              <th className="text-center">順位</th>
              <th className="text-center">選手名</th>
              <th className="text-center">戦績</th>
              <th className="text-center">スコア</th>
            </tr>
          </thead>
          <tbody>
            {playersData.map((boxer, index) => (
              <tr key={index}>
                <td className="text-center text-lg font-serif">{index + 1} 位</td>
                <td className="text-center h-full flex items-center">
                  <div className="w-1/3 avatar flex justify-end">
                    <div className="w-16 h-16 rounded-btn">
                      <img src={boxer.image} alt={boxer.name} />
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-center font-bold">
                    {boxer.name}
                  </div>
                </td>
                <td className="text-center font-serif">{boxer.record}</td>
                <td className="text-center">{boxer.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-1/5 flex justify-around items-center">
        <CustomButton
          className="btn btn-outline btn-accent"
          onClick={() => history.push('/battle')}
        >
          もう一度バトルする
        </CustomButton>
        <CustomButton
          className="btn btn-primary"
          onClick={() => history.push('/players')}
        >
          選手一覧ページへ
        </CustomButton>
      </div>
    </>
  )
}

export default BattleResult
