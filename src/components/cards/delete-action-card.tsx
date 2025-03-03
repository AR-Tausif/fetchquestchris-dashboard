import React from "react";
import { Button, Modal } from "antd";

interface ActionButtonsProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteActionButtons: React.FC<ActionButtonsProps> = ({
  open,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      centered
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      footer={null}
    >
      <div style={styles.container}>
        <h3 style={styles.title}>Are You Sure!</h3>
        <p>Do you want to delete this User?</p>
        <Button style={styles.confirmButton}>Confirm</Button>
      </div>
    </Modal>
  );
};

// Styles for ActionButtons
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center" as const,
    flexDirection: "column" as const,
    gap: 20,
    textAlign: "center" as const,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#A011FF",
  },
  confirmButton: {
    backgroundImage: "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
    color: "#fdfdfd",
    width: "50%",
  },
};
