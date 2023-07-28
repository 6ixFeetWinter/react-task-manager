/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import { CreateButton } from "./CreateButton";

export const Title = () => {
  return (
    <div css={title}>
      <div css={titleInner}>
        <Typography sx={titleSx} variant="h1">
          タスク一覧
        </Typography>
        <CreateButton />
      </div>
    </div>
  );
};

const title = css({
  width: "100%",
  height: "52px",
  padding: "8px 0",
  borderBottom: "1px solid #0000001F",
});
const titleInner = css({
  width: "100%",
  height: "100%",
  padding: "0 32px",
  display: "flex",
  alignItems: "center",
});
const titleSx = {
  fontSize: "24px",
  fontWeight: "600",
  position: "relative",
  pl: "12px",
  lineHeight: "36px",
  verticalAlign: "middle",
  "&::before": {
    content: '""',
    width: "4px",
    height: "100%",
    background: "#3F51B5",
    position: "absolute",
    left: "0",
    top: "0",
    borderRadius: "4px",
  },
};
