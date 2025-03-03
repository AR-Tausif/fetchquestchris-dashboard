import { NotificationCard } from "../components";

export const Notification = () => {
  return (
    <div>
      <div
        style={{
            
        minHeight:"90vh",
          background: "#fdfdfd",
          padding: "18px 14px",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* notification card */}
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};
