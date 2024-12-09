import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import BarChartComponent from "../BarChart";
import LineChartComponent from "../LineChart";
import DonutChart from "../DonutChart";
import CardSection from '../StatBox';
import TopSellingProductsTable from "../TableData";
import GeographicChart from "../GeographicChart";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
// import MyGeographicChart from "../GeographicChart";

const Dashboard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#000103',
    }),
  }));
  return (
    <Box>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Header name="eCommerce" />
      </Box>
      <Grid container spacing={1}>
        <Grid size={6} p={1}>
          <Item><CardSection /></Item>
        </Grid>
        <Grid size={6}> 
          <Item><BarChartComponent /></Item>
        </Grid>
        <Grid size={8}>
          <Item><LineChartComponent sx={{ width: "662px", height: "312px" }} /></Item>
        </Grid>
        <Grid size={4}>
          <Item><DonutChart sx={{ width: "202px", height: "344px" }} /></Item>
        </Grid>
         <Grid size={8}>
          <Item><TopSellingProductsTable sx={{ width: "202px", height: "318px" }} /></Item>
        </Grid>
         <Grid size={4}>
          <Item><GeographicChart  /></Item>
        </Grid>
      </Grid>

    </Box>
    

    
  );
};


export default Dashboard;
