import { CloseOutlined } from "@ant-design/icons";
import { Lists } from "../lists";
import "./styles/profile-details-view-card.css";
import { IUserDetails } from "../../types";
export const ProfileDetailsViewCard = ({
  isNoneClose = false,
  user,
}: {
  user: IUserDetails;
  isNoneClose?: boolean;
}) => {
  const renderProperties = [
    { prop: "Full Name", value: user.name },
    { prop: "User Name", value: user.email.split("@")[0] },
    { prop: "Email", value: user.email },
    { prop: "Phone Number", value: "01823771127" },
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
          src={user?.image}
          alt="profile picture"
          className="profile-image"
        />
        <h5 className="profile-name">{user?.name}</h5>
        <p className="profile-email">{user?.email}</p>
      </div>

      <div className="lists-container">
        <Lists renderedProperties={renderProperties} user={user} />
      </div>
    </div>
  );
};
