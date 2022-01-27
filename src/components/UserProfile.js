import React from "react";
import AsideMenu from "./user/AsideMenu";
import ProfileWrapperContainer from "./../wrappers/ProfileWrapperContainer";
import ProfileRouter from "./../api/ProfileRouter";

function UserProfile() {
  return (
    <>
      <AsideMenu />
      <hr />
      <ProfileWrapperContainer>
        <ProfileRouter />
      </ProfileWrapperContainer>
    </>
  );
}

export default UserProfile;
