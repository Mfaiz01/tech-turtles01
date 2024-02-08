import React from 'react';
import addNotification from 'react-push-notification';
import './Notifications.css';
import n1 from '../../utils/images/n2.png';
import logo from '../../utils/images/backpack.svg';

function Notifications() {
  const clickTONotify = () => {
    addNotification({
      title: 'Tech Turtles',
      message: 'Hello this is Tech Turtles',
      duration: 4000,
      icon: logo,
      native: true,
    });
  }

  return (
    <div className="notifications-container">
      <img src={n1} alt="Tech turtle logo" className="logo-image" />
      <button onClick={clickTONotify} className="notify-button">
        Click to notify
      </button>
    </div>
  );
}

export default Notifications;
