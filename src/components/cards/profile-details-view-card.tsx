import { CloseOutlined } from "@ant-design/icons";
import { Lists } from "../lists";
import "./styles/profile-details-view-card.css";
export const ProfileDetailsViewCard = ({
  isNoneClose = false,
  user,
}: {
  user: any;
  isNoneClose?: boolean;
}) => {
  const renderProperties = [
    { prop: "Full Name", value: user.name },
    { prop: "User Name", value: user.email.split("@")[0] },
    { prop: "Email", value: user.email },
    { prop: "Phone Number", value: "01823771127" },
    { prop: "Location", value: "Jamalganj" },
    { prop: "Account Type", value: user.accountType },
    // { prop: "Subscription Type", value: user.subscriptionType },
    // { prop: "Services", value: user.services },
    // { prop: "Business Name", value: user.businessName },
    // { prop: "Overall Rating", value: user.overallRating },
    // { prop: "Value For Money", value: user.valueForMoney },
  ];
  return (
    <div className="profile-details">
      {/* profile intro with name and email */}
      <div className="profile-intro">
        <p
          className="close-button"
          style={{ display: isNoneClose ? "none" : "block" }}
        >
          <CloseOutlined />
        </p>
        <img
          src={user.avatar}
          alt="profile picture"
          className="profile-image"
        />
        <h5 className="profile-name">{user.name}</h5>
        <p className="profile-email">{user.email}</p>
      </div>

      <div className="lists-container">
        <Lists renderedProperties={renderProperties} user={user} />
      </div>
    </div>
  );
};
