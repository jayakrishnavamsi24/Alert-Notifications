import './index.css'

const Notification = props => {
  const {children, id, closeClick} = props

  const onCloseClick = () => {
    closeClick(id)
  }

  return (
    <li>
      <div className="icon-container">{children[0]}</div>
      <div className="text-container">
        {children[1]}
        {children[2]}
      </div>
      <div className="close-container">
        <button type="button" onClick={onCloseClick}>
          {children[3]}
        </button>
      </div>
    </li>
  )
}

export default Notification
