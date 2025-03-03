
import { PostHeadIntroBox } from "../boxes/post-head-intro-box";

export const PostCard = ({ photo, user }: { photo: string;user:any }) => {
  return (
    <div
      style={{
        width: "100%",
        flex: "1 1 calc(50% - 16px)",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius:8,
        padding:24,
        maxWidth:"50%"
      }}
      role="post item"
    >
      <PostHeadIntroBox user={user} />
      {/* text section */}
      <div
        style={{
          padding: 5,
          margin: "5px 0",
        }}
      >
        <p>
          Another happy client walked out feeling confidedn, radiant, and
          absolutely stunning!. At our hair transformation services are designed
          to bring out your best look. From dull and frizzy to sleek and silky,
          we're here to make magic hapen. Don't wait book your appointment today
          and let us wrk our magic!
        </p>
      </div>
      {/* image section */}
      <div>
        <img
          src={photo}
          alt="post image"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  );
};
