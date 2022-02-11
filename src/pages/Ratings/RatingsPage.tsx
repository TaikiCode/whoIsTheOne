import { VFC } from 'react'
import Navbar from '../../components/navbar/Navbar'

const RatingsPage: VFC = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen pt-20">
        <div className="flex flex-row  h-full">
          <div className="w-1/5 h-full flex justify-center items-center">
              <div className="h-5/6 w-5/6 shadow rounded-lg bg-white">sadsad</div>
          </div>
          <div className="w-4/5 flexRowCenter p-5">
            <table className="table h-5/6 w-full shadow-xl rounded-2xl">
              <thead>
                <tr>
                  <th className="text-center">順位</th>
                  <th className="text-center">選手名</th>
                  <th className="text-center">戦績</th>
                  <th className="text-center">スコア</th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4, 5].map((_, index) => (
                  <tr key={index}>
                    <td className="text-center text-lg font-serif">1位</td>
                    <td className="text-center h-full flex items-center">
                      <div className="w-1/3 avatar flex justify-end">
                        <div className="w-16 h-16 rounded-btn">
                          <img src="https://www.ringtv.com/wp-content/uploads/2016/07/Canelo-Alvarez_Ring-Belts_ratings-crop_Hoganphotos6-270x270.jpg" />
                        </div>
                      </div>
                      <div className="w-2/3 flex justify-center font-bold">
                        CANERO Al
                      </div>
                    </td>
                    <td className="text-center font-serif">hogehoge</td>
                    <td className="text-center">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default RatingsPage
