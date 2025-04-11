import React from "react";

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


const Footer = () => {
  return (<>
    
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
        
            <Box sx={{ backgroundColor: "rgba(182, 139, 94, 0.9)", color: "#fff", textAlign: "center", p: 3 , height:"8vh"}}>
              <Typography variant="body2" sx={{fontFamily: "'Dancing Script', cursive",mt:2.5}}>© 2025 Hotel S&Ch. All rights reserved.</Typography>
            </Box>
    
        </>
      );
    };

export default Footer;