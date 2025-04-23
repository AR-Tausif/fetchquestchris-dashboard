import { ServiceUploadForm } from "../forms/game-upload-form";

export const CreateServiceCard = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: 20,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      {/* <ServiceUploadBox /> */}
      <ServiceUploadForm />
    </div>
  );
};
