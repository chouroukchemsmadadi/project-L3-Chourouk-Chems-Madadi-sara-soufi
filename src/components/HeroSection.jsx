import React from "react";
import { Box, Button, Typography } from "@mui/material";
import backgroundVideo from "../assets/video/tiktokio.com_WFef6M9mBRpfpbhEydOk.mp4"; // تأكد من صحة المسار

const HeroSection = () => {
  return (
    
    
    
    
    <Box
      sx={{
      
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "rgba(212, 210, 209, 0.5)", // خلفية فاتحة
      }}
    >
      {/* القسم النصي - تمركز النص في الوسط */}
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // تمركز أفقي
          textAlign: "center", // تمركز النص
          padding: "0 5%",
          height: "100vh",
          color: "#5A3E2B",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              fontSize: { xs: "45px", md: "65px" },
              color: "rgba(0, 0, 0, 0.8)",
              mb: 1,
            }}
          >
            Welcome to Hotely S&CH
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.4rem" },
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "300",
              letterSpacing: "0.8px",
              color: "rgba(17, 16, 15, 0.9)",
              mb: 5,
            }}
          >
            Where comfort meets luxury. Experience a world of elegance and relaxation like never before.
          </Typography>

          <Box sx={{ height: "30px", width: "100%" }} />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(146, 98, 46, 0.7)",
              fontSize: "18px",
              color: "#FFFFFF",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#6D4F31" },
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
              borderRadius:"20px"
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>

      {/* قسم الفيديو - مع الظل وتحريكه للأعلى */}
      <Box
        sx={{
          position: "relative",
          width: "60%",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "90px",
          mb: 3,
          mt:2,
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "93%",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.7)",
            position: "relative",
            transform: "translateY(-30px)", // تحريك الفيديو للأعلى
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.2)", // ظل داخلي
              zIndex: 1,
            },
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative",
              zIndex: 2,
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
