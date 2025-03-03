import React from "react";
import { Button, Modal, theme } from "antd";

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
  const { token } = theme.useToken();

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
      fontWeight: 600,
      color: token.colorPrimary,
    },
    confirmButton: {
      backgroundImage: "linear-gradient(to right, #DA5DA3  , #9D0DFE)",
      color: "#fdfdfd",
      width: "50%",
    },
  };
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
        <p style={{ color: token.colorText }}>Do you want to delete this User?</p>
        <Button style={styles.confirmButton}>Confirm</Button>
      </div>
    </Modal>
  );
};

