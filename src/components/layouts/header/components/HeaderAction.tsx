"use client";
import React, { useState } from "react";
import LightDarkMode from "./LightDarkMode";
import Notification from "./Notification";
import HeaderUserProfile from "./HeaderUserProfile";

const HeaderAction = () => {
  // State to manage dropdown visibility
  const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);
  const [isOpenUserDropdown, setUserDropdown] = useState<boolean>(false);

  // Toggle function to show/hide the dropdown
  const handleShowNotification = () => {
    setIsOpenNotification(!isOpenNotification);
    setUserDropdown(false);
  };
  const handleShowUserDrowdown = () => {
    setUserDropdown(!isOpenUserDropdown);
    setIsOpenNotification(false);
  };

  return (
    <>
      <div className="app__header-action">
        <ul>
          <LightDarkMode />
          <Notification
            handleShowNotification={handleShowNotification}
            isOpenNotification={isOpenNotification}
          />
        </ul>
      </div>
      <HeaderUserProfile
        handleShowUserDrowdown={handleShowUserDrowdown}
        isOpenUserDropdown={isOpenUserDropdown}
      />
    </>
  );
};

export default HeaderAction;
