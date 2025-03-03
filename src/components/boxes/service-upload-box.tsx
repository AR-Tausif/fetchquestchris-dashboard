import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, theme, Upload } from "antd";
import "./styles/service-upload-box.css";
const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop() {
    // console.log("Dropped files", e.dataTransfer.files);
  },
};

export const ServiceUploadBox: React.FC = () => {
  const {token} = theme.useToken()
  return (
    <Dragger
      {...props}
      style={{ height: "52px", background: token.colorPrimary, color: token.colorWhite }}
    >
      <div
        style={{
          // display: "flex",
          // alignItems: "center",
          // gap: 10,
        }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ color: token.colorWhite, marginTop: 10 }} />
        </p>
        <p style={{ fontSize: 25, fontWeight: 500 }}>Upload Game Image</p>
      </div>
    </Dragger>
  )
};
