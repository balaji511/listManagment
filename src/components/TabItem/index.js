import './index.css'

const TabItem = props => {
  const {details, idChanged, isTabItemActive} = props
  const {tabId, displayText} = details
  const tabItemChange = () => {
    idChanged(tabId)
    console.log(tabId)
  }

  const classItem = isTabItemActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button
        type="button"
        onClick={tabItemChange}
        className={`tab-btn ${classItem}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
