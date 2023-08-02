import styled from "styled-components";

export const Button100Customizable = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "31px")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "16px")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "16px"};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "28px")};
  background: ${(props) =>
    !props.background
      ? "linear-gradient(141.97deg, #1DC5EC -117.24%, #AA57FF 92.36%)"
      : props.background};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  &:hover {
    ${(props) => ({ ...props.hoverStyles })};
  }
`;

export const NormalButton = styled.button`
  width: 300px;
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  display: block;
`;
