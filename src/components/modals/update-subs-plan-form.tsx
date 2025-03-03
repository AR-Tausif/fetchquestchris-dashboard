import {  Modal } from "antd";
import { UpdateSubsPlanForm } from "../forms";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const UpdateSubsPlanModal = ({ open, onClose }: IProps) => {
  return (
    <Modal centered open={open} onOk={onClose} onCancel={onClose} footer={null}>
      <UpdateSubsPlanForm />
    </Modal>
  );
};
