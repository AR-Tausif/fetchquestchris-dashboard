import { ServiceUploadBox } from "../boxes/service-upload-box";
import { ServiceUploadForm } from "../forms/service-upload-form";

export const CreateServiceCard = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      <ServiceUploadBox />
      <ServiceUploadForm />
    </div>
  );
};
