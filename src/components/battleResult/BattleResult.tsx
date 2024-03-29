import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../common/customButton/CustomButton'
import CustomTable from '../common/customTable/CustomTable'
import Header from '../common/header/Header'

interface Props {
  playersData: any[]
  weightClass: string
}

const BattleResult: VFC<Props> = ({ playersData, weightClass }) => {
  const history = useHistory()

  // 得点が高い順に並び替える
  const sortedPlayersData = playersData
    .slice()
    .sort((x, y) => (x.score > y.score ? -1 : x.score < y.score ? 1 : 0))

  // 選手のスコアだけ取得
  const playerScores: number[] = sortedPlayersData.map((data) => data.score)
  return (
    <>
      <Header displayText="今回の対戦結果" headerStyle="battleResultStyle">
        <p className="text-md">- {weightClass} -</p>
      </Header>
      <div className="h-3/5 flex justify-center items-start overflow-y-scroll">
        <CustomTable
          head_list={['順位', '選手名', '戦績', 'スコア']}
          body_list={sortedPlayersData}
          tableStyle="table h-full lg:w-3/5 shadow-xl rounded-2xl"
          point_list={playerScores}
        />
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
