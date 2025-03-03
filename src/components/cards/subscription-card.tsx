import { Button } from "antd";

export const SubscriptionCard = ({
  // openSubsPlanModal,
  setOpenSubsPlanModal,
}: {
  openSubsPlanModal: any;
  setOpenSubsPlanModal: any;
}) => {
  return (
    <div
      style={{
        maxWidth: "50vw",
        background: "#fdfdfd",
        padding: 20,
        borderRadius: 8,

        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <h5>Basic Plan</h5>
      <p style={{ fontSize: 24, fontWeight: 700 }}>$9.99</p>
      <p
        style={{
          maxWidth: "50%",
        }}
      >
        Add up to 10 service offers to get started Perfect for small business or
        beginners. Easily upgrade when you're ready to expand.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            width: "100%",
            background:
              "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
            color: "#FDFDFD",
          }}
          onClick={() => setOpenSubsPlanModal(true)}
        >
          Edit
        </Button>

        <Button style={{ width: "100%" }}>Delete</Button>
      </div>
    </div>
  );
};
