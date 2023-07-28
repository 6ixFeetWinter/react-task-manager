/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useCreate } from "../../globalState/hooks/CreateState";

export const CreateButton = () => {
  const { isCreateActive } = useCreate();
  return (
    <button type="button" css={buttonOuter} onClick={() => isCreateActive()}>
      <AddIcon sx={buttonIcon} />
      <span css={buttonText}>新規作成</span>
    </button>
  );
};
const buttonOuter = css({
  width: "88px",
  height: "44px",
  border: "1px solid #3F51B5",
  background: "transparent",
  borderRadius: "4px",
  position: "relative",
  marginLeft: "48px",
  cursor: "pointer",
});
const buttonIcon = {
  color: "#3F51B5",
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "24px",
};
const buttonText = css({
  position: "absolute",
  width: "100%",
  bottom: "0",
  left: "0",
  fontSize: "14px",
  color: "#3F51B5",
  textAlign: "center",
  fontFamily: "Noto Sans JP",
  fontWeight: "500",
});
