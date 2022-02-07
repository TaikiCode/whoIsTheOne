import { VFC } from 'react'
import './customHomeButton.scss'

interface Props {
  text: string
  // onChange: () => void;
}

const CustomHomeButton: VFC<Props> = ({ text }) => {
  return (
    <button className="buttonStyle">
      <span />
      {text}
    </button>
  )
}

export default CustomHomeButton
