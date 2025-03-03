import React from "react";
import { Modal } from "antd";
import { ProfileDetailsViewCard } from "../cards";

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  user: any;
}

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ open, onClose, user }) => {
  return (
    <Modal
      centered
      open={open}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
    >
      <ProfileDetailsViewCard user={user as any} isNoneClose={true} />
    </Modal>
  );
};
