import { ServiceViewForm } from "../forms/service-view-form";

export default function ServiceItemViewCard() {
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
      <div>
        <img
          src="https://media.istockphoto.com/id/482679574/photo/making-a-change-of-look.jpg?s=612x612&w=0&k=20&c=Tr20-tCvPHLKh_W5pNUCymEGRUD_OfOJht97x35i8-o="
          alt="service image"
          width={"100%"}
          style={{
            borderRadius: 8,
          }}
        />
      </div>
      <ServiceViewForm
        serviceName="Hair Service"
        status="Active"
        image="https://media.istockphoto.com/id/482679574/photo/making-a-change-of-look.jpg?s=612x612&w=0&k=20&c=Tr20-tCvPHLKh_W5pNUCymEGRUD_OfOJht97x35i8-o="
      />
    </div>
  );
}
