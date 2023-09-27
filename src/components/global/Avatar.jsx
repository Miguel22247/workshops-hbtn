import React from "react";
import styled from "styled-components";
import newDefaultAvatar from "../../assets/svg/new-default-avatar.svg";

const AvatarWrap = styled.img`
  cursor: pointer;
  ${props => `
    border-radius: ${props.borderRadius ? props.borderRadius : props.type === "square" ? "3px" : "50%"};
    width: ${props.size ? props.size : "33px"};
    height: ${props.size ? props.size : "33px"}
    `}
`;

const Avatar = ({ src, size, borderRadius, customStyles={} }) => {
  // DONE: implement team (team is a prop that identifies if the avatar is associated to team avatar or not)
  return (
    <AvatarWrap
      src={src || newDefaultAvatar}
      size={size}
      borderRadius={borderRadius}
      alt="avatar"
      style={customStyles}
    />
  );
};

export default Avatar;
