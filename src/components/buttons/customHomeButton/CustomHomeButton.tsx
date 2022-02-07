import { VFC } from 'react'
import './customHomeButton.scss'

interface Props {
  text: string
  onClick: () => void
}

const CustomHomeButton: VFC<Props> = ({ text, onClick }) => {
  return (
    <button className="buttonStyle" onClick={onClick}>
      <span />
      {text}
    </button>
  )
}

export default CustomHomeButton
