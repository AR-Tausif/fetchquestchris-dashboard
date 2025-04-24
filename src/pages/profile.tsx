import { Tabs } from "antd";
import { ChangePasswordForm, ProfileEditForm } from "../components/forms";
import { LoaderCircle, PencilLine } from "lucide-react";
import { useState } from "react";
import { useMyProfileQuery } from "../redux/api/auth.api";
import TabPane from "antd/es/tabs/TabPane";

export const Profile = () => {

  const { data, isSuccess, isLoading } = useMyProfileQuery({});

  const [profile, setProfile] = useState<File | null>(null);
  // const profileData = profileRes?.data || {};

  return (
    <div>
      {
        isLoading ? <div className='min-h-40 flex items-center justify-center'>
          <LoaderCircle color="#d95ea5" size={50} className="text-4xl animate-spin" />
        </div> : isSuccess ? <div className="w-[80%] min-h-[90vh] mx-auto bg-[#fdfdfd]">
          <section
            className="flex-center gap-x-3 bg-linear-to-r from-[#DA5DA3] via-[#AA7AD6] to-[#5B428A]"
            style={{
              padding: 10,
            }}
          >
            <div className="relative w-max">
              <img
                src={profile ? URL.createObjectURL(profile) : data?.data?.image}
                alt="Admin avatar"
                width={1200}
                height={1200}
                className="aspect-square h-auto w-[140px] rounded-full border-2 border-purple-400 p-1 object-cover"
              />

              {/* Edit button */}
              <label
                htmlFor="photo"
                className="absolute bg-white rounded-full flex-center bottom-4 right-4 aspect-square text-white/95"
                style={{
                  padding: 5,
                }}
              >
                <PencilLine color="#000" size={20} />
              </label>
              <input
                id="photo"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    console.log(file);
                    setProfile(file);
                  }
                }}
                type="file"
                className="hidden w-full h-full"
              />
            </div>

            <div>
              <h3 className="text-3xl !font-semibold text-white uppercase">
                {isSuccess ? data?.data?.name : "Admin"}
              </h3>
              <p className="mt-1 text-lg font-medium text-white">{"Admin"}</p>
            </div>
          </section>

          {/* tabs */}
          <Tabs defaultActiveKey="editProfile" centered>
            <TabPane tab="Edit Profile" key="editProfile">
              <ProfileEditForm image={profile} defaultData={data?.data} />
            </TabPane>

            <TabPane tab="Change Password" key="changePassword">
              <ChangePasswordForm />
            </TabPane>
          </Tabs>
        </div> : <></>}
    </div>
  );
};
