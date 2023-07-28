import {
  FormHelperText,
  FormLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import type { ChangeEventHandler, FocusEventHandler } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export type TextProps = {
  error?: string;
  className?: string;
  placeholder?: string;
  label?: string;
};

export const MyTextField = (
  props: TextProps & {
    inputRef: TextFieldProps["ref"];
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    onBlur: FocusEventHandler<HTMLTextAreaElement>;
  }
) => {
  return (
    <div css={inputField}>
      <FormControl fullWidth>
        <FormLabel>
          <div style={{ color: "#000000" }}>{props.label}</div>
          <OutlinedInput
            sx={outlineStyle}
            placeholder={props.placeholder}
            className={props.className}
            ref={props.inputRef}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            fullWidth
            size="small"
          />
        </FormLabel>
        {!!props.error && (
          <FormHelperText sx={position} error>
            {props.error}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

const inputField = css({
  display: "block",
  width: "100%",
});

const outlineStyle = {
  "& .MuiInputBase-input": {
    color: "#000000", // 入力文字の色
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#2196F3", // 通常時のボーダー色
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#2196F3", // ホバー時のボーダー色
  },
  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderColor: "#2196F3", // 通常時のボーダー色(アウトライン)
  },
};

const position = {
  position: "absolute",
  bottom: "-20px",
  left: "-14px",
};
