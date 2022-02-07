import { VFC, useState } from 'react'

interface Props {
  weightClasses: string[]
}

const Tabs: VFC<Props> = ({ weightClasses }) => {
  const [currentTab, setCurrentTab] = useState<string>('全て')

  const onClick = (text: string) => setCurrentTab(text)
  return (
    <div className="tabs tabs-boxed flex flex-nowrap py-5 overflow-x-scroll whitespace-nowrap">
      {weightClasses.map((text, index) => (
        <a
          key={index}
          className={`tab mx-1 ${currentTab === text && "tab-active"} `}
          onClick={() => onClick(text)}
        >
          {text}
        </a>
      ))}
    </div>
  )
}

export default Tabs
