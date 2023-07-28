import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  EditTask,
  GetTask,
  Update,
  useEdit,
} from "../../globalState/hooks/CreateState";
import dayjs from "dayjs";
export const Tasks = () => {
  const list = GetTask();
  const { getSingleTask } = EditTask();
  const { updateStatus, deleteTask } = Update();
  const [columns, setColumns] = useState<any[]>();
  const [row, setRow] = useState<any[]>();
  const { isEditActive } = useEdit();
  {
    /* useEffectの外にcolumnsを出したらalign:"center"の箇所でエラーが出てしまいうまく実行できませんでした */
  }
  useEffect(() => {
    if (list) {
      setColumns([
        { field: "title", headerName: "タイトル", width: 251 },
        { field: "name", headerName: "担当者", width: 181 },
        {
          field: "limitCell",
          headerName: "期限日時",
          renderCell: (params: any) => {
            const limitDate = params.row.limit;
            const limitTime = params.row.time;
            const status = params.row.status;
            const currentDate = new Date();
            const textColor = compareDates(limitDate, currentDate, status)
              ? "red"
              : "black";
            return (
              <div
                style={{ color: textColor }}
              >{`${limitDate} ${limitTime}`}</div>
            );
          },
          width: 201,
        },
        {
          field: "created",
          headerName: "作成日",
          renderCell: (params: any) => {
            const date = params.value;
            const createdDate = dayjs(date.toDate()).format("YYYY/MM/DD");
            return <div>{createdDate}</div>;
          },
          width: 161,
        },
        {
          field: "status",
          headerName: "進捗",
          align: "center",
          renderCell: (params: any) => {
            const statusValue = params.value;
            const displayValue = statusValue === false ? "未" : "済";
            const textColor = statusValue === true ? "#6FBF73" : "black";
            return <div style={{ color: textColor }}>{displayValue}</div>;
          },
          width: 51,
        },
        { field: "other", headerName: "備考", width: 343 },
        {
          field: "complete",
          headerName: "完了にする",
          align: "center",
          width: 118,
          renderCell: (params: any) => {
            const path = params.row.id;
            return (
              <CheckIcon
                sx={{ color: "#3F51B5", fontSize: 24, cursor: "pointer" }}
                onClick={() => updateStatus(path)}
              />
            );
          },
        },
        {
          field: "edit",
          headerName: "編集/詳細",
          width: 83,
          align: "center",
          renderCell: (params: any) => {
            const path = params.row.id;
            return (
              <EditIcon
                sx={{ color: "#3F51B5", fontSize: 24, cursor: "pointer" }}
                onClick={() => {
                  getSingleTask(path);
                  isEditActive();
                }}
              />
            );
          },
        },
        {
          field: "delete",
          headerName: "削除",
          width: 73,
          align: "center",
          renderCell: (params: any) => {
            const path = params.row.id;
            return (
              <DeleteIcon
                sx={{ color: "#3F51B5", fontSize: 24, cursor: "pointer" }}
                onClick={() => deleteTask(path)}
              />
            );
          },
        },
      ]);
      setRow([...list.list]);
    }
    const compareDates = (date1: string, date2: Date, status: boolean) => {
      if (!status) {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        return d1 < d2;
      }
    };
  }, [list.list]);
  return (
    <>
      {row && columns && (
        <div style={{ width: "100%" }}>
          <DataGrid
            sx={gridStyle}
            rows={row}
            columns={columns}
            density="compact"
            autoHeight
            hideFooter
          />
        </div>
      )}
    </>
  );
};

const gridStyle = {
  m: "24px auto",
  maxWidth: "1464px",
  fontSize: 12,
  borderRadius: "0",
  ".MuiDataGrid-toolbarContainer": {
    borderBottom: "solid 1px #DDDDDD",
  },
  ".MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)": {
    borderRight: "solid 1px #DDDDDD !important",
  },
  ".MuiDataGrid-columnHeaders": {
    backgroundColor: "#3F51B5",
    color: "#fff",
    borderRadius: "0",
  },
  ".MuiDataGrid-columnHeader": {
    borderRight: "solid 1px #DDDDDD ",
  },
};
