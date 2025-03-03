import "./styles/account-details.css";
import { PostCard, ProfileDetailsViewCard } from "../components";
import { useEffect, useState } from "react";

export const AccountDetailsById = () => {
  const [user, setUser] = useState<any>();
  const images = [
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
  ];
  const data = [
    {
      key: "1",
      serial: "#01",
      name: "Diana Doxy",
      email: "diana@gmail.com",
      accountType: "Service Provider",
      date: "11 oct 2024",
      avatar:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      key: "2",
      serial: "#02",
      name: "Robert Fox",
      email: "robert.fox@gmail.com",
      accountType: "User",
      date: "11 oct 2024",
      avatar:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    },
    {
      key: "3",
      serial: "#03",
      name: "Rian Bin Kashem",
      email: "rian.kashem@gmail.com",
      accountType: "Service Provider",
      date: "11 oct 2024",
      avatar:
        "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-Thumbnail.jpg",
    },
    {
      key: "4",
      serial: "#04",
      name: "William Hanry",
      email: "bilgates.personal@gmail.com",
      accountType: "User",
      date: "11 oct 2024",
      avatar:
        "https://www.shutterstock.com/image-photo/photo-beautiful-young-business-woman-260nw-1906641364.jpg",
    },
  ];

  useEffect(() => {
    const handleUserShow = (key: string) => {
      // console.log(key);
      const users = data.find((userD: any) => userD.key == key);
      if (!users) {
        return;
      }
      setUser(users);
    };
    handleUserShow("1");
  }, []);
  // console.log({ user });
  if (!user) {
    return <div style={{ fontSize: 54 }}>Loading...</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      {/* profile details view */}

      <div
        style={{
          width: "35%",
        }}
      >
        <ProfileDetailsViewCard user={user} />
      </div>
      {/* content section */}
      <div
        style={{
          width: "64%",
          minHeight: "100vh",
          background: "#fdfdfd",
          padding: 24,
          borderRadius: 8,
        }}
      >
        <h2
          style={{
            padding: "20px 0",
          }}
        >
          Posts
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            padding: 16,
            borderRadius: 8,
          }}
        >
          <PostCard user={user} photo={images[0]} />
          <PostCard user={user} photo={images[0]} />
          <PostCard user={user} photo={images[0]} />
          <PostCard user={user} photo={images[0]} />
          <PostCard user={user} photo={images[0]} />
        </div>
      </div>
    </div>
  );
};

const Post = ({ images }: { images: string[] }) => {
  return (
    <div className={`image-container ${images.length === 1 ? "single" : ""}`}>
      {images.map((image: string, index: number) => (
        <img key={index} src={image} alt={`post-img-${index}`} />
      ))}
    </div>
  );
};

export default Post;
