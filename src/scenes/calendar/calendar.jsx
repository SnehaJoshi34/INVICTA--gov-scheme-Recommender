import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
// import left from "../../components/Leftbar";


const Bar = () => {
  return (
   
    <Box m="20px">
      <Header title="Calendar view" subtitle="Analysis of scheme applied in months" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
