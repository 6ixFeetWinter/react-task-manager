import { createTheme } from "@mui/material";
import styled from "@emotion/styled";

export const appTheme = createTheme({
  typography: {
    fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
  },
});

export const myStyle = {
  "&.MuiTextField-root": {
    minWidth: "148px",
  },
  "& .css-brmcl4-MuiStack-root": {
    paddingTop: "0",
  },
  "& .css-1pduc5x-MuiStack-root": {
    paddingTop: "0",
  },
  "& .MuiInputBase-input": {
    color: "#000000", // 入力文字の色
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#2196F3", // 通常時のボーダー色
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#2196F3", // ホバー時のボーダー色
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#2196F3", // 通常時のボーダー色(アウトライン)
    },
    "&:hover fieldset": {
      borderColor: "#2196F3", // ホバー時のボーダー色(アウトライン)
    },
  },
  "&:disabled": {
    borderColor: "#red",
    color: "red",

    "& .MuiInputBase-input": {
      color: "red", // 入力文字の色
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "red", // 通常時のボーダー色
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "red", // ホバー時のボーダー色
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#red", // 通常時のボーダー色(アウトライン)
      },
      "&:hover fieldset": {
        borderColor: "#red", // ホバー時のボーダー色(アウトライン)
      },
    },
  },

  m: "0",
  padding: "0",
};
