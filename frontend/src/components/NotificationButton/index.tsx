import NotificationIcon from "../../assets/images/notification-icon.svg";
import "./styles.css";

const NotificationButton = () => {
  return (
    <div className="red-btn">
      <img src={NotificationIcon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
