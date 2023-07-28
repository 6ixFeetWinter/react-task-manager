import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCreate, useEdit } from "../../globalState/hooks/CreateState";
import { Typography } from "@mui/material";
import { Form } from "./form/Form";
import CancelIcon from "@mui/icons-material/Cancel";

export const Dialog = () => {
  const { isCreateNegative, isCreate } = useCreate();
  const { isEditNegative } = useEdit();
  return (
    <div css={dialogBg}>
      <div css={dialog}>
        <div css={dialogHeader}>
          <Typography sx={dialogTitle} variant="h4">
            新規作成
          </Typography>
          <CancelIcon
            sx={cancelIcon}
            onClick={() => (isCreate ? isCreateNegative() : isEditNegative())}
          />
        </div>
        <div css={dialogBody}>
          <Form />
        </div>
      </div>
    </div>
  );
};
const dialogBg = css({
  position: "fixed",
  top: "0",
  bottom: "0",
  width: "100%",
  height: "100svh",
  background: "#00000080",
  zIndex: "10",
});
const dialog = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "2",
});
const dialogHeader = css({
  width: "640px",
  height: "52px",
  padding: "8px 24px 8px 24px",
  background: "#3F51B5",
  position: "relative",
});
const dialogTitle = {
  color: "white",
  fontSize: "24px",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "42px",
};
const cancelIcon = {
  color: "#fff",
  fontSize: "36px",
  position: "absolute",
  top: "8px",
  right: "24px",
  cursor: "pointer",
};
const dialogBody = css({
  width: "100%",
  padding: "20px",
  background: "#fff",
});
