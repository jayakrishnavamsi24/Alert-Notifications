import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

import './index.css'

const possibilitiesObj = {
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  info: 'Info',
}

const initNotficationsArray = [
  {
    id: uuidv4(),
    title: possibilitiesObj.success,
    details: 'You can access all the files in the folder',
  },
  {
    id: uuidv4(),
    title: possibilitiesObj.error,
    details: 'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: uuidv4(),
    title: possibilitiesObj.warning,
    details: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: uuidv4(),
    title: possibilitiesObj.info,
    details: 'Anyone on the internet can view these files',
  },
]

class AlertNotifications extends Component {
  state = {notificationsArray: initNotficationsArray}

  getIcon = title => {
    switch (title) {
      case possibilitiesObj.success:
        return <AiFillCheckCircle className={title} />
      case possibilitiesObj.error:
        return <RiErrorWarningFill className={title} />
      case possibilitiesObj.warning:
        return <MdWarning className={title} />
      case possibilitiesObj.info:
        return <MdInfo className={title} />
      default:
        return null
    }
  }

  getCloseIcon = () => <GrFormClose />

  closeClick = id => {
    this.setState(prevState => ({
      notificationsArray: prevState.notificationsArray.filter(
        eachNotification => {
          if (id !== eachNotification.id) {
            return true
          }
          return false
        },
      ),
    }))
  }

  render() {
    const {notificationsArray} = this.state
    return (
      <div className="bg-container">
        <h1> Alert Notifications </h1>
        <ul>
          {notificationsArray.map(eachNotification => (
            <Notification
              key={eachNotification.id}
              id={eachNotification.id}
              closeClick={this.closeClick}
            >
              {this.getIcon(eachNotification.title)}
              <h1 className={`title ${eachNotification.title}`}>
                {' '}
                {eachNotification.title}{' '}
              </h1>
              <p> {eachNotification.details} </p>
              {this.getCloseIcon()}
            </Notification>
          ))}
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
