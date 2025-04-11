import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper , TextField, Container } from "@mui/material";

import { Facebook, Instagram, YouTube, Pinterest } from "@mui/icons-material";

import hotelImage from "../assets/image/hotel.jpg";
import G1 from "../assets/image/G11.jpg";
import G2 from "../assets/image/G12.jpg";
import G3 from "../assets/image/G3.jpg";
import G4 from "../assets/image/G14.jpg";
import G5 from "../assets/image/G5.jpg";
import G6 from "../assets/image/G6.jpg";
import G7 from "../assets/image/G13.jpg";
import G8 from "../assets/image/G8.jpg";
import G9 from "../assets/image/G9.jpg";
import G10 from "../assets/image/G10.jpg";
import G13 from "../assets/image/G13.jpg";
import G14 from "../assets/image/G14.jpg";
import G15 from "../assets/image/G15.jpg";
import G16 from "../assets/image/G16.jpg";
import G17 from "../assets/image/G17.avif";
import G18 from "../assets/image/G18.avif";
import G19 from "../assets/image/G19.avif";
import G20 from "../assets/image/G20.avif";
import G21 from "../assets/image/1.avif";
import G22 from "../assets/image/background.jpg";
import G23 from "../assets/image/chambre.jpg";
import G24 from "../assets/image/chambre1.jpg";
import G25 from "../assets/image/event1.jpg";
import G26 from "../assets/image/exmple.jpg";
import G27 from "../assets/image/chambre3.jpg";
import G28 from "../assets/image/chmbre2.jpg";
import G29 from "../assets/image/event2.jpg";
import G30 from "../assets/image/event3.jpg";
import G31 from "../assets/image/exmple1.jpg";

import G32 from "../assets/image/exmple2.jpg";
import G33 from "../assets/image/food1.jpg";
import G34 from "../assets/image/food2.jpg";
import G35 from "../assets/image/spa.jpg";
import G36 from "../assets/image/G21.avif";
import G37 from "../assets/image/G22.avif";
import G38 from "../assets/image/h1.jpg";
import G39 from "../assets/image/h2.jpg";
import G40 from "../assets/image/h3.jpg";
import G41 from "../assets/image/h4.jpg";
import G42 from "../assets/image/h5.jpg";
import G43 from "../assets/image/hotel.jpg";
import G44 from "../assets/image/hotell.jpg";
import G45 from "../assets/image/r.avif";
import G46 from "../assets/image/r.jpg";
import G47 from "../assets/image/room.jpg";
import G48 from "../assets/image/room1.jpg";
import G49 from "../assets/image/room2.jpg";
import G50 from "../assets/image/room3.jpg";
import G51 from "../assets/image/room4.jpg";
import G52 from "../assets/image/room5.jpg";
import G53 from "../assets/image/rooms.jpg";
import G55 from "../assets/image/sa.jpg";
import G56 from "../assets/image/sar.jpg";
import G57 from "../assets/image/sarasoufi.avif";
import G58 from "../assets/image/sch.jpg";
import G59 from "../assets/image/service1.jpg";
import G60 from "../assets/image/service2.jpg";
import G61 from "../assets/image/service3.jpg";
import G62 from "../assets/image/service4.jpg";





const images = [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10,G13,G14,G15,G16,G17,G18,G19,G20,G21,G22,G23,G24,G25,G26,G27,G28,G29,G30,G31,G32,G33,G34,G35,G36,G37,G38,G39,G40,G41,G42,G43,G44,G45,G46,G47,G48,G49,G50,G51,G52,G53,G45,G55,G56,G57,G58,G59,G60,G61,G62];

const PhotoGallery = () => {
  return (
    <>
      {/* ✅ القسم الأول: الخلفية مع العنوان وشريط القوائم */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: `url(${hotelImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4))",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(249, 247, 246, 0.9)",
            zIndex: 2,
          }}
        >
          Photo Gallery
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
            backgroundColor: "rgba(173, 171, 171, 0.6)",
            padding: "10px 20px",
            borderRadius: "20px",
            zIndex: 2,
          }}
        >
          {["Home", "About Us", "Rooms", "Services", "Gallery", "Blog", "Contact"].map((item) => (
            <Button
              key={item}
              sx={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "bold",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>

      {/* ✅ القسم الثاني: النص أسفل الصورة */}
      <Box
        sx={{
          width: "100%",
          minHeight: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{maxWidth: "80%",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "1px 1px 3px rgba(62, 60, 60, 0.3)",
            letterSpacing: "1px",
            color: "#3c3c3c",
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          At the Hôtel Royal, guests shape their own stay, before meeting up on the large terrace for an unforgettable show:
          in the day’s last hours when the sun slips away, the sky is set ablaze, and the sweeping view of Lake Geneva is set aglow.
        </Typography>
      </Box>

      {/* ✅ القسم الثالث: معرض الصور بنظام Grid */}
      <Box
        sx={{
          width: "100%",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // خمس أعمدة
          gap: "16px",
        }}
      >
        {images.map((imgSrc, index) => (
          <Box
            key={index}
            component="img"
            src={imgSrc}
            alt={`Gallery Image ${index + 1}`}
            sx={{
              width: "98%",
              height: "270px",
              objectFit: "cover",
              borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              },
            }}
          />
        ))}
      </Box>


      
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "40px 0", borderTop: "1px solid #ddd" }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* قسم النشرة الإخبارية */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333", textTransform: "uppercase" }}>
            Subscribe to our newsletter
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", marginBottom: "15px" }}>
            Receive our latest offers and news updates
          </Typography>
          
          {/* زر الاشتراك */}
          <Button 
            variant="outlined" 
            sx={{ borderColor: "#000", color: "#000", fontWeight: "bold", padding: "8px 20px" }}
          >
            SUBSCRIBE
          </Button>
        </Box>

        {/* قسم وسائل التواصل الاجتماعي */}
        <Box sx={{ flex: 1, textAlign: "right" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333", textTransform: "uppercase" }}>
            Follow Us
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, marginTop: "10px" }}>
            <Facebook sx={{ fontSize: 32, color: "#000", cursor: "pointer", border: "1px solid #000", borderRadius: "50%", padding: "5px" }} />
            <Instagram sx={{ fontSize: 32, color: "#000", cursor: "pointer", border: "1px solid #000", borderRadius: "50%", padding: "5px" }} />
            <YouTube sx={{ fontSize: 32, color: "#000", cursor: "pointer", border: "1px solid #000", borderRadius: "50%", padding: "5px" }} />
            <Pinterest sx={{ fontSize: 32, color: "#000", cursor: "pointer", border: "1px solid #000", borderRadius: "50%", padding: "5px" }} />
          </Box>
        </Box>

      </Container>
    </Box>
    
        <Box sx={{  backgroundColor: "rgba(182, 139, 94, 0.9)", color: "#fff", textAlign: "center", p: 3 }}>
          <Typography variant="body2">© 2025 Hotel S&Ch. All rights reserved.</Typography>
        </Box>

    </>
  );
};

export default PhotoGallery;
