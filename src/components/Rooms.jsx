import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper , TextField, Container } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BalconyIcon from "@mui/icons-material/Balcony";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import LandscapeIcon from "@mui/icons-material/Landscape";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { Facebook, Instagram, YouTube, Pinterest } from "@mui/icons-material";

import VisibilityIcon from "@mui/icons-material/Visibility";

import DoorFrontIcon from "@mui/icons-material/DoorFront";
// استيراد الصور
import backgroundImg from "../assets/image/r.avif";
import roomImg from "../assets/image/room1.jpg";

import roomImg4 from "../assets/image/room4.jpg";
import roomImage from "../assets/image/room5.jpg";
import roomDetailImage from "../assets/image/room2.jpg";
import lakeRoomImg from "../assets/image/room3.jpg"; 

const Rooms = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <>
    
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
        backgroundImage:` url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // تغميق الخلفية
          zIndex: -1,
        },
      }}
    >
      {/* العنوان الرئيسي */}
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          fontFamily: "'Dancing Script', cursive",
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        Rooms
      </Typography>

      {/* شريط القائمة الشفاف */}
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
    
      </Box><Box
  sx={{
    width: "100%",
    minHeight: "0vh", // ارتفاع كافٍ لتوسيط النص
    display: "flex",
    justifyContent: "center", // توسيط أفقي
    alignItems: "center", // توسيط عمودي
    textAlign: "center", // محاذاة النص إلى المنتصف
    padding: "2rem",
  }}
>
      <Typography variant="h8" sx={{ mt: 2, maxWidth: "80%" ,
            fontFamily: "'Dancing Script'",
            textShadow: "3px 3px 6px rgba(62, 60, 60, 0.7)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>
          The rooms were totally refurbished in 2015 and combine the charm of
          the Belle Epoque with the elegance of contemporary design.
          Facilitated access for people with reduced mobility in the hotel, the park and 5 of our rooms. 
Special equipment available on request (large-key telephone, luminous alarm clock, etc.) for optimum comfort.
        </Typography></Box>

      {/* القسم الثاني: تفاصيل الغرفة */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          backgroundColor: "#F5F5F5",
          padding: "4rem 0",
        }}
      >
        {/* المعلومات داخل بطاقة */}
        <Paper
          elevation={3}
          sx={{
            width: { xs: "90%", md: "40%" },
            padding: "3rem",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            textAlign: "left",
            marginBottom: { xs: "2rem", md: "0" },
            borderRadius:"10px"
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Sejour Park View Room
          </Typography>

          {/* أيقونات الميزات */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <LandscapeIcon sx={{ color: "#6D6D6D", mr: 1 }} />
              <Typography>Park view</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <BalconyIcon sx={{ color: "#6D6D6D", mr: 1 }} />
              <Typography>Furnished balcony</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <WbSunnyIcon sx={{ color: "#6D6D6D", mr: 1 }} />
              <Typography>South-facing</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <BathtubIcon sx={{ color: "#6D6D6D", mr: 1 }} />
              <Typography>Marble bathroom</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <AccessibilityIcon sx={{ color: "#6D6D6D", mr: 1 }} />
              <Typography>Accessible room</Typography>
            </Grid>
          </Grid><Typography variant="body1" sx={{ mb: 2 }}>
            For a relaxing stay at the Hotel S&Ch with total privacy, the Sejour
            Park View Room is 27m² in size and enjoys views of the grounds.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <SmokeFreeIcon sx={{ color: "#D32F2F", mr: 1 }} />
            <Typography>No smoking</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              BOOK NOW
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              FIND OUT MORE
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            height: "90vh",
            backgroundImage:`url(${roomImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius:"30px"
          }}
        />
      </Box>
 <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, // الصورة تكون على اليسار
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: "#F5F5F5",
        padding: "4rem 0",
      }}
    >
      {/* الصورة على اليسار */}
      <Box
        sx={{
          flex: 1,
          height: "90vh",
          backgroundImage: `url(${roomImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
           borderRadius:"30px"
        }}
      />

      {/* المعلومات داخل بطاقة */}
      <Paper
        elevation={3}
        sx={{
          width: { xs: "90%", md: "40%" },
          padding: "3rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          textAlign: "left",
          marginBottom: { xs: "2rem", md: "0" },
           borderRadius:"10px"
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Residence Park View Room
        </Typography>

        {/* أيقونات الميزات */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <WbSunnyIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>South-facing</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <BalconyIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>Furnished balcony</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <DoorFrontIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>Connecting rooms on request</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <AccessibilityIcon sx={{ color: "#1976D2", mr: 1 }} />
            <Typography>Room accessible for individuals with reduced mobility</Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" sx={{ mb: 2 }}>
        The 40m² Résidence park view room can accommodate 2 adults and 1 child (up to 13 years of age) or 1 infant. The room enjoys a view of the hotel grounds.

Rooms on the 5th floor do not have balconies.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <SmokeFreeIcon sx={{ color: "#D32F2F", mr: 1 }} />
          <Typography>No smoking</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
            BOOK NOW
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
            FIND OUT MORE
          </Button>
        </Box>
      </Paper>
    </Box>






    <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          backgroundColor: "#F5F5F5",
          padding: "4rem 0",
        }}
      >
        {/* المعلومات داخل بطاقة */}
        <Paper
          elevation={3}
          sx={{
            width: { xs: "90%", md: "40%" },
            padding: "3rem",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            textAlign: "left",
            marginBottom: { xs: "2rem", md: "0" },
             borderRadius:"10px"
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Sejour Lake View Room
          </Typography>

          {/* أيقونات الميزات */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <VisibilityIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>View of Lake Geneva</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <BalconyIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>Furnished balcony</Typography>
          </Grid>
        </Grid>

            <Typography variant="body1" sx={{ mb: 2 }}>
          Perfect for a cosy break, the Séjour lake view room is 27m² in size and offers a furnished balcony.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <SmokeFreeIcon sx={{ color: "#D32F2F", mr: 1 }} />
            <Typography>No smoking</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              BOOK NOW
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              FIND OUT MORE
            </Button>
          </Box>
        </Paper>
        <Box
          sx={{
            flex: 1,
            height: "90vh",
            backgroundImage:`url(${lakeRoomImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
             borderRadius:"30px"
          }}
        />
      </Box>






      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, // الصورة تكون على اليسار
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: "#F5F5F5",
        padding: "4rem 0",
      }}
    >
      {/* الصورة على اليسار */}
      <Box
        sx={{
          flex: 1,
          height: "90vh",
          backgroundImage: `url(${roomImg4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
           borderRadius:"30px"
        }}
      />

      {/* المعلومات داخل بطاقة */}
      <Paper
        elevation={3}
        sx={{
          width: { xs: "90%", md: "40%" },
          padding: "3rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          textAlign: "left",
          marginBottom: { xs: "2rem", md: "0" },
           borderRadius:"10px"
        }}

      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Family Room
        </Typography>

        {/* أيقونات الميزات */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <WbSunnyIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>South-facing</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <BalconyIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>Furnished balcony</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <DoorFrontIcon sx={{ color: "#6D6D6D", mr: 1 }} />
            <Typography>Connecting rooms on request</Typography>
          </Grid>
         
        </Grid>

        <Typography variant="body1" sx={{ mb: 2 }}>Designed and equipped to offer ideal conditions for a family, this 43m² room enjoys a balcony with a view of the hotel grounds.
        Ideal for a hotel stay with a 4-person family room, it offers all the comforts required for a memorable stay. For families wanting more space, a family suite is also available, offering a spacious and comfortable setting for relaxing family moments.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <SmokeFreeIcon sx={{ color: "#D32F2F", mr: 1 }} />
          <Typography>No smoking</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
            BOOK NOW
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
            FIND OUT MORE
          </Button>
        </Box>
      </Paper>
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
    
        <Box sx={{ backgroundColor: "rgba(182, 139, 94, 0.9)", color: "#fff", textAlign: "center", p: 3 }}>
          <Typography variant="body2">© 2025 Hotel S&Ch. All rights reserved.</Typography>
        </Box>

    </>
  );
};

export default Rooms;