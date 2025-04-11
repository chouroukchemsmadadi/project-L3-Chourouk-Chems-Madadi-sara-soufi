import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

// 🔹 استيراد الصور من assets
import food1 from "../assets/image/food1.jpg";
import food2 from "../assets/image/food2.jpg";
import food3 from "../assets/image/spa.jpg";
import service1 from "../assets/image/service1.jpg";
import service2 from "../assets/image/service2.jpg";
import service3 from "../assets/image/service3.jpg";

const images = [
  { src: food1, alt: "Delicious Steak" },
  { src: food2, alt: "Gourmet Dish" },
  { src: service1, alt: "Luxury Pool" },
  { src: food3, alt: "Exquisite Appetizers" },
  { src: service2, alt: "Professional Chef" },
  { src: service3, alt: "Beach Resort" },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(117, 116, 116, 0.5)", color: "#fff", textAlign: "center", py: 5 }}>
      {/* ✨ زخرفة العنوان */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          position: "relative",
          display: "inline-block",
          pb: "10px",
          "&::after": {
            content: '""',
            width: "60px",
            height: "3px",
            backgroundColor: "rgba(195, 193, 193, 0.4)", 
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      >
        WHY CHOOSE US?
      </Typography>

      {/* 🔹 أقسام التصنيف */}
      <Box sx={{ mt: 2, mb: 4 }}>
        {["ALL", "DESERT", "COFFEE", "CATERING", "SERVICES"].map((category, index) => (
          <Typography
            key={index}
            component="span"
            sx={{
              mx: 2,
              cursor: "pointer",
              fontWeight: "500",
              transition: "color 0.3s",
              "&:hover": { color: "gray" },
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>

      {/* 🔹 عرض الصور */}
      <Grid container spacing={3} justifyContent="center">
        {images.map((img, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              sx={{
                width: "100%",
                height: "250px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 5px 15px rgba(134, 130, 130, 0.3)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* 🔴 زر "View All" */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "rgba(146, 98, 46, 0.7)",
          fontSize: "1rem",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          borderRadius: "25px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          boxShadow: "0 4px 10px rgba(251, 248, 244, 0.2)",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgba(252, 240, 240, 0.4)", 
            transform: "translateY(-2px)",
            boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          },
        }}
      >
        View All
      </Button>
    </Box>
  );
};

export default WhyChooseUs;