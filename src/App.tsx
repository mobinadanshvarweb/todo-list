import { Box } from "@mui/material";
import Header from "./componentes/Header";
import Chart from "./componentes/Chart";
import TodoList from "./componentes/pages/TodoList";
const App = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Chart />
      <TodoList />
    </Box>
  );
};

export default App;
