import { ReactNode, VFC } from 'react'
import Navbar from '../common/navbar/Navbar'

interface Props {
  children: ReactNode
}

const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-col">
        <div style={{ height: '10%' }} />
        <div style={{ height: '90%' }}>{children}</div>
      </div>
    </>
  )
}

export default Layout
