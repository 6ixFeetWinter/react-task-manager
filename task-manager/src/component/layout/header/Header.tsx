import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HeaderData } from "./HeaderData";

export const Header = () => {
  return (
    <div css={header}>
      <div css={headerInner}>
        <div css={hamburgerArea}>
          <button type="button" css={hamburgerButton}>
            <span css={hamburgerMenu}></span>
          </button>
        </div>
        <HeaderData />
      </div>
    </div>
  );
};

const header = css({
  width: "100%",
  height: "52px",
  backgroundColor: "#3F51B5",
  padding: "8px 0",
});
const headerInner = css({
  height: "100%",
  width: "100%",
  padding: "0 18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const hamburgerArea = css({
  width: "20px",
  height: "20px",
  display: "block",
  position: "relative",
});
const hamburgerButton = css({
  border: "0",
  background: "transparent",
  width: "100%",
  height: "100%",
  cursor: "pointer",
});
const hamburgerMenu = css({
  display: "block",
  border: "0",
  width: "100%",
  height: "2px",
  background: "#fff",
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translateY(-50%)",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    background: "#fff",
    left: 0,
    display: "block",
  },
  "&::before": {
    top: "-7px",
  },
  "&::after": {
    bottom: "-7px",
  },
});
