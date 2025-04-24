import { CloseOutlined } from "@ant-design/icons";
import { Lists } from "../lists";
import { IUserDetails } from "../../types";

export const DisputedReviewCard = ({
  title,
  userDetails,
  renderProperties,
}: {
  title: string;
  userDetails: IUserDetails;
  renderProperties: { prop: string; value: string }[];
}) => {
  return (
    <div className="profile-details">
      {/* profile intro with name and email */}
      <div className="profile-intro">
        <p className="close-button">
          <CloseOutlined />
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"
          alt="profile picture"
          className="profile-image"
        />
        <h5 className="profile-name">{userDetails?.name}</h5>
        <p className="profile-email">{userDetails?.email}</p>
      </div>

      <div className="lists-container">
        <Lists
          key={title }
          title={title}
          user={userDetails}
          renderedProperties={renderProperties}
        />
      </div>
    </div>
  );
};
