import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

// 🔹 استيراد الصور من مجلد assets
import room1 from "../assets/image/chambre1.jpg";
import room2 from "../assets/image/chmbre2.jpg";
import room3 from "../assets/image/chambre3.jpg";

const rooms = [
  { img: room1, title: "Luxury Suite" },
  { img: room2, title: "Deluxe Room" },
  { img: room3, title: "Family Suite" },
];

const HotelSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      {/* ✨ زخرفة عنوان "WELCOME TO HOTEL" */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "3px",
          position: "relative",
          display: "inline-block",
          pb: "10px",
          "&::after": {
            content: '""',
            width: "60px",
            height: "4px",
            backgroundColor: "#032950",
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      >
        WELCOME TO HOTEL
      </Typography>

      {/* ✨ زخرفة الفقرة التعريفية */}
      <Typography
        sx={{
          mt: 2,
          fontFamily: 'Playfair Display',
          color: "gray",
          maxWidth: "600px",
          mx: "auto",
          fontSize: "1.3rem",
          lineHeight: "1.8",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text since the 1500s.
      </Typography>

      {/* 🔹 عرض الغرف الثلاثة */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {rooms.map((room, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              component="img"
              src={room.img}
              alt={room.title}
              sx={{
                width: "100%",
                height: "250px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            {/* ✨ زخرفة اسم كل غرفة */}
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                color: "#333",
              }}
            >
              {room.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* 🔴 زر "View All" مع زخرفة إضافية */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "rgba(146, 98, 46, 0.8)",
          fontSize: "1rem",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          borderRadius: "25px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgba(92, 89, 89, 0.4)", 
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

export default HotelSection;