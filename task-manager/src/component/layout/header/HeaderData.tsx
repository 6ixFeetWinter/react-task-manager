import React from "react";
import { Typography } from "@mui/material";
import { getDate } from "../../globalState/hooks/CreateState";

export const HeaderData = () => {
  const { date, year, month, day } = getDate();
  const weekItems = ["日", "月", "火", "水", "木", "金", "土"];
  const week = date.getDay();
  return (
    <Typography
      sx={{ fontSize: "24px", color: "#FFF" }}
    >{`${year}/${month}/${day}(${weekItems[week]})`}</Typography>
  );
};
