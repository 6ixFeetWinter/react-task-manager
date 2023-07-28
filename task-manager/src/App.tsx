import React from "react";
import { Header } from "./component/layout/header/Header";
import { Title } from "./component/layout/title/Title";
import { useCreate, useEdit } from "./component/globalState/hooks/CreateState";
import { Dialog } from "./component/layout/dialog/Dialog";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./component/theme/Theme";
import { Tasks } from "./component/layout/body/Tasks";

function App() {
  const { isCreate } = useCreate();
  const { isEdit } = useEdit();
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Title />
      {isCreate ? <Dialog /> : isEdit && <Dialog />}
      <Tasks />
    </ThemeProvider>
  );
}

export default App;
