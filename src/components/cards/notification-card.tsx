import { BellOutlined } from "@ant-design/icons";
import "./styles/notification-card.css";
export const NotificationCard = () => {
  return (
    <div className="notification_card">
      <div
        style={{
          padding: "8px 10px",
          background: "#A011FF",
          color: "#fdfdfd",
          fontSize: 24,
          borderRadius: 8,
        }}
      >
        <BellOutlined />
      </div>
      <div className="">
        <p
          style={{
            fontSize: 16,
            marginBottom: 4,
          }}
        >
          Jhon Doe reported a post 'Cute Cate Pictures' for inappropiate content
        </p>
        <p>Fri, 12:30pm</p>
      </div>
    </div>
  );
};
