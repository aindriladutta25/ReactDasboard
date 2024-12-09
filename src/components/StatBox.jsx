import React from "react";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Trend icon for percentage change

const CardSection = () => {
  const theme = useTheme(); // Get the current theme (light or dark)

  // Card data
  const cardData = [
    {
      title: "Customers",
      value: "3,781",
      trend: "+11.01%",
      trendIcon: <TrendingUpIcon />,
    },
    {
      title: "Orders",
      value: "1,219",
      trend: "-2.12%",
      trendIcon: <TrendingUpIcon />,
    },
    {
      title: "Revenue",
      value: "$695",
      trend: "+8.25%",
      trendIcon: <TrendingUpIcon />,
    },

    {
      title: "Growth",
      value: "30.1%",
      trend: "+15.75%",
      trendIcon: <TrendingUpIcon />,
    },
  ];


  const cardBackgroundColor =
    theme.palette.mode === "dark" ? "#424242" : "#f5f5f5";
  const textColor = theme.palette.mode === "dark" ? "#ffffff" : "#000000";
  const trendColor = theme.palette.mode === "dark" ? "#76ff03" : "#388e3c"; 

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid size={6} item xs={20} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: cardBackgroundColor,
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                height: "100%",
                width: "100%", // Ensure cards take up full height within the grid cell
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: textColor }}>
                  {card.title}
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Typography
                    variant="h5"
                    sx={{ color: textColor, fontWeight: "bold", marginTop: 1 }}
                  >
                    {card.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: trendColor, display: "flex", marginTop: 1 }}
                  >
                    {card.trend} {card.trendIcon}
                  </Typography>
                  
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardSection;
