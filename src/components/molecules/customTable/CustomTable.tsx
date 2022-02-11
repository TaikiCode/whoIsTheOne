import { VFC } from 'react'

interface Props {
  head_list: string[]
  body_list: any[]
  tableStyle: string
  isTotal?: boolean
  point_list: number[]
}

const CustomTable: VFC<Props> = ({
  head_list,
  body_list,
  tableStyle,
  isTotal,
  point_list,
}) => {
  const ranking = (arr: number[]): number[] =>
    arr.map((x, _, z) => z.filter((w) => w > x).length + 1)
  return (
    <table className={tableStyle}>
      <thead>
        <tr>
          {head_list.map((text: string, index: number) => (
            <th key={index} className="text-center">
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body_list.map((body, index) => (
          <tr key={index}>
            <td className="text-center text-lg font-serif">
              {ranking(point_list)[index]}位
            </td>
            <td className="text-center h-full flex items-center">
              <div className="w-1/3 avatar flex justify-end">
                <div className="w-16 h-16 rounded-btn">
                  <img src={body.image} alt={body.name} />
                </div>
              </div>
              <div className="w-2/3 flex justify-center font-bold">
                {body.name}
              </div>
            </td>
            <td className="text-center font-serif">{body.record}</td>
            <td className="text-center font-mono">
              {isTotal ? body.point : body.score}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomTable
