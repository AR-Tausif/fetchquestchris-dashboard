import { ServiceViewForm } from "../forms/service-view-form";

export default function GameItemViewCard() {
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
          src="https://s3-alpha-sig.figma.com/img/fa7b/1079/fcec2ff7e56a0f48931f86c3887e19aa?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QaGbrkE5KIgwAISNRMgWVWaKQD-~n5F~Wd2vVKgAmD2GnmQGnyPFzI7bO1VSUWSD5SUvbEBH13El3U6nMkidB3ABq6bv8X97gVFYWL6vaOD0AlOjqvgnai4p20ueY4X18lvvB57mt5UWNknvE1DoGrSLx0Fb~PkNAxsCBgQ0I-YOK2RqiuRwRdcCkw7VBxE0gU2JgJ1nTSDU0pu19MgPFV-W3W7lzuU2ji5tO~dR~REZdiFg8HPlTtTwLYpTzAo-KjKAwrJYR-zoiVXfF5F6I6xLz2PsCs7mfzZjxXvbloCq9dny3HlYt6atjXj7ukQVHeAY2Yg6TA0RbdjxL8KArQ__"
          alt="service image"
          width={"100%"}
          style={{
            borderRadius: 8,
          }}
        />
      </div>
      <ServiceViewForm
        serviceName="Sports & Racing"
        status="Active"
        image="https://media.istockphoto.com/id/482679574/photo/making-a-change-of-look.jpg?s=612x612&w=0&k=20&c=Tr20-tCvPHLKh_W5pNUCymEGRUD_OfOJht97x35i8-o="
      />
    </div>
  );
}
