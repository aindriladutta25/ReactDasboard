import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TopSellingProductsTable = () => {
  // Dummy data for top-selling products
  const data = [
    { product: "Product A", sales: 100, revenue: "$1,200" },
    { product: "Product B", sales: 200, revenue: "$2,400" },
    { product: "Product C", sales: 300, revenue: "$3,600" },
    { product: "Product D", sales: 150, revenue: "$1,800" },
  ];

  return (
    <Box sx={{ width: 662, height: 336, padding: 2, borderRadius: 2, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
      <Typography variant="h6" align="center" gutterBottom>
        Top Selling Products
      </Typography>
      <TableContainer sx={{ height: "100%" }}>
        <Table sx={{ width: "100%" }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold", borderBottom: "2px solid #ddd" }}>Product</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", borderBottom: "2px solid #ddd" }}>Sales</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", borderBottom: "2px solid #ddd" }}>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.product}</TableCell>
                <TableCell align="center">{row.sales}</TableCell>
                <TableCell align="center">{row.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopSellingProductsTable;
