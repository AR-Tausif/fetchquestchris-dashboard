import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { UpdateSubsPlanForm } from "../components/forms";
import { CreateSubsPlanForm } from "../components/forms/create-subs-plan-form";
import { SubscriptionCard } from "../components";
import { Modal } from "antd";

export function ManageSubscription() {
  const [openSubsPlanModal, setOpenSubsPlanModal] = useState(false);
  const [createSubsPlanModal, setCreateSubsPlanModal] = useState(false);

  return (
    <div>
      <div>
        <div
          style={styles.addButton}
          onClick={() => setCreateSubsPlanModal(true)}
        >
          <PlusCircleOutlined style={styles.icon} />
          <p>Add new subscirption plan</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <SubscriptionCard
            setOpenSubsPlanModal={setOpenSubsPlanModal}
            openSubsPlanModal={openSubsPlanModal}
          />
        </div>
      </div>
      <Modal
        centered
        open={createSubsPlanModal}
        onOk={() => setCreateSubsPlanModal(false)}
        onCancel={() => setCreateSubsPlanModal(false)}
        width={styles.modalWidth}
        footer={null}
      >
        <CreateSubsPlanForm />
      </Modal>
      <Modal
        centered
        open={openSubsPlanModal}
        onOk={() => setOpenSubsPlanModal(false)}
        onCancel={() => setOpenSubsPlanModal(false)}
        // width={styles.modalWidth}
        footer={null}
      >
        <UpdateSubsPlanForm />
      </Modal>
    </div>
  );
}

const styles = {
  addButton: {
    background: "#A011FF",
    width: "100%",
    padding: "13px 30px",
    color: "#FDFDFD",
    fontWeight: 600,
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 8,
    marginBottom: 32,
  },
  icon: {
    color: "#FDFDFD",
    fontSize: 37,
  },
  modalWidth: {
    xs: "90%",
    sm: "80%",
    md: "70%",
    lg: "60%",
    xl: "50%",
    xxl: "40%",
  },
};
