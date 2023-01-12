import PropTypes from 'prop-types';
import styles from './Notification.module.scss'

export const Notification = ({ message }) => {
    const { notification } = styles;
    return  <p className={notification}>{message}</p>
  
}

Notification.propType = {
    message: PropTypes.string.isRequired
}