import { Checkbox, CheckboxProps, Col, Row } from "antd";
import { DisputedReviewCard, PrimaryButton } from "../components";

export const DisputedReviewById = () => {
  const onChange: CheckboxProps["onChange"] = () => {};
  const userDetails = {
    fullName: "Anika Tabassum",
    userName: "tausif",
    email: "string@gmail.com",
    phoneNumber: "01823771127",
    photo: "string",
    location: "string",
    accountType: "string",
    subscriptionType: "string",
    services: "string",
    businessName: "string",
    overallRating: "string",
    valueForMoney: "string",
  };
  const renderPropertiesOne = [
    { prop: "Full Name", value: "Anna Suraiya" },
    {
      prop: "Review Text",
      value: "The artist was late and upreunprepared. Very disappointed.",
    },
    { prop: "Rating", value: "1/5" },
    {
      prop: "Photo",
      value:
        "https://elements-resized.envatousercontent.com/elements-cover-images/a6724af2-eb37-4a65-b962-f7905dd31c03?w=433&cf_fit=scale-down&q=85&format=auto&s=8a899a3d9d2b9effa4f27f249d321d2e2066e999a445a9b52ddc7f522c5f94ad",
    },
  ];
  const renderPropertiesTwo = [
    { prop: "Full Name", value: "Anna Suraiya" },
    { prop: "Reason", value: "Miscommunication" },
    {
      prop: "Explanation",
      value:
        "The user was nitified of a delay 30 minutes before the appointment",
    },
    {
      prop: "Photo",
      value:
        "https://elements-resized.envatousercontent.com/elements-cover-images/a6724af2-eb37-4a65-b962-f7905dd31c03?w=433&cf_fit=scale-down&q=85&format=auto&s=8a899a3d9d2b9effa4f27f249d321d2e2066e999a445a9b52ddc7f522c5f94ad",
    },
  ];

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Status
      </h3>

      {/* checkbox section */}
      <div
        className=""
        style={{
          textAlign: "center",
        }}
      >
        <Checkbox onChange={onChange}>Approve</Checkbox>
        <Checkbox onChange={onChange}>Remove</Checkbox>
      </div>

      {/* button section */}
      <PrimaryButton
        styles={{
          width: "100%",
          padding: 24,
          fontSize: 16,
        }}
      >
        Mark as resolved
      </PrimaryButton>

      <Row gutter={24}>
        <Col span={12}>
          <DisputedReviewCard
            title="Review By"
            renderProperties={renderPropertiesOne}
            userDetails={userDetails}
          />
        </Col>
        <Col span={12}>
          <DisputedReviewCard
            title="Provider's Dispute"
            renderProperties={renderPropertiesTwo}
            userDetails={userDetails}
          />
        </Col>
      </Row>
    </div>
  );
};
