import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RhfTextField } from "./conceal/RhfTextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  EditTask,
  getDate,
  useCreate,
  useEdit,
} from "../../../globalState/hooks/CreateState";
import { myStyle } from "../../../theme/Theme";
import { TimePicker } from "@mui/x-date-pickers";
import { format } from "date-fns";
import { Button } from "@mui/material";
import { Update } from "../../../globalState/hooks/CreateState";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import dayjs from "dayjs";

type NewPostInput = {
  title: string;
  name: string;
  other: string;
};
export const Form = () => {
  const { year, month, day } = getDate();
  const { isCreateNegative, isCreate } = useCreate();
  const { isEditNegative, isEdit } = useEdit();
  const { task } = EditTask();
  const { uploadTask, updateContent } = Update();
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [editDate, setEditDate] = useState<Date | null | any>(null);
  const [editTime, setEditTime] = useState<Date | null>(null);
  const [validant, setValidant] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { isValid },
  } = useForm<NewPostInput>({
    defaultValues: {
      title: "",
      name: "",
      other: "",
    },
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  useEffect(() => {
    if (isCreate) {
      setValue("title", "");
      setValue("name", "");
      setValue("other", "");
      return;
    }
    setValue("title", task.title);
    setValue("name", task.name);
    setValue("other", task.other);
    setEditDate(dayjs(task.limit, "YYYY/MM/DD"));
    setDate(task.limit);
    setEditTime(dayjs(task.time, "HH:mm").toDate());
    setTime(task.time);
  }, [task]);
  const onDateChange = (e: Date | null | any) => {
    if (!e) return;
    const d1 = e.$d;
    const d2 = new Date();
    if (d1 < d2) return setValidant(false);
    setValidant(true);
    setDate(format(e.$d, "yyyy/MM/dd"));
  };
  const onSubmit = (data: NewPostInput) => {
    if (date == null) return setValidant(false);
    isCreateNegative();
    isEditNegative();
    uploadTask(data, date, time);
  };
  const onUpdate = (data: NewPostInput) => {
    if (date == null) return setValidant(false);
    isCreateNegative();
    isEditNegative();
    updateContent(data, date, time, task);
  };
  return (
    <form onSubmit={isCreate ? handleSubmit(onSubmit) : handleSubmit(onUpdate)}>
      <div css={titleArea}>
        <RhfTextField
          placeholder="例）コーディング"
          name="title"
          control={control}
          label="タイトル"
        />
      </div>
      <div css={nameArea}>
        <RhfTextField
          placeholder="例）山田 太郎"
          name="name"
          label="名前"
          control={control}
        />
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div css={createdArea}>
          <p>制作日</p>
          <DemoContainer
            components={["DatePicker"]}
            sx={{ p: "0", width: "100%", ...myStyle }}
          >
            <DatePicker
              sx={{ p: "0", width: "100%", ...myStyle }}
              disabled
              slotProps={{
                textField: {
                  placeholder: `${year}/${month}/${day}`,
                  size: "small",
                },
              }}
            />
          </DemoContainer>
        </div>
        <div css={timeLimit}>
          <div style={{ width: "200px" }}>
            <p>期限日付</p>
            <DemoContainer
              components={["DatePicker"]}
              sx={{ p: "0", ...myStyle }}
            >
              <DatePicker
                sx={{ p: "0", ...myStyle }}
                format="YYYY/MM/DD"
                value={isEdit ? editDate : null}
                slots={{}}
                slotProps={{
                  textField: {
                    placeholder: "例）日付を入力",
                    size: "small",
                    name: "date",
                  },
                }}
                onChange={(e: Date | null | any) => {
                  onDateChange(e);
                }}
              />
            </DemoContainer>
            {validant ? (
              <p css={helperText}>過去の日付は指定不可</p>
            ) : (
              <p css={helperTextError}>日時が正しくありません</p>
            )}
          </div>
          <div style={{ width: "160px" }}>
            <p>期限時間</p>
            <DemoContainer
              components={["DatePicker"]}
              sx={{ p: "0", ...myStyle }}
            >
              <TimePicker
                sx={{ p: "0", ...myStyle }}
                views={["hours", "minutes"]}
                format="HH:mm"
                value={editTime ? dayjs(editTime) : null}
                slotProps={{
                  textField: {
                    placeholder: "--:--",
                    size: "small",
                    name: "time",
                  },
                }}
                onChange={(e: Date | null | any) => {
                  setTime(format(e.$d, "HH:mm"));
                }}
              />
            </DemoContainer>
          </div>
        </div>
      </LocalizationProvider>
      <RhfTextField
        placeholder="例）備考を入力"
        name="other"
        control={control}
        label="備考"
      />
      <div css={buttonArea}>
        <Button sx={buttonStyle} variant="contained" type="submit">
          作成する
        </Button>
        <Button
          sx={cancelColor}
          variant="outlined"
          onClick={() => (isCreate ? isCreateNegative() : isEditNegative())}
        >
          キャンセル
        </Button>
      </div>
    </form>
  );
};

const titleArea = css({
  position: "relative",
  width: "372px",
  height: "72px",
  marginBottom: "6px",
});
const nameArea = css({
  position: "relative",
  width: "200px",
  height: "72px",
  marginBottom: "6px",
});
const createdArea = css({
  width: "200px",
  marginBottom: "12px",
});
const timeLimit = css({
  display: "flex",
  gap: "12px",
  alignItems: "center",
  marginBottom: "18px",
});
const helperText = css({
  fontSize: "12px",
  position: "absolute",
});
const helperTextError = css({
  color: "red",
  fontSize: "12px",
  position: "absolute",
});
const buttonStyle = {
  backgroundColor: "#3F51B5",
  boxShadow: "none",
};
const cancelColor = {
  borderColor: "#3F51B5",
  color: "#3F51B5",
};
const buttonArea = {
  display: "flex",
  alginItems: "center",
  justifyContent: "center",
  gap: "12px",
  marginTop: "36px",
};
