import React from "react";
import { Box, Button, Container, Grid, Typography, TextField } from "@mui/material";
import { styled } from "@mui/system";
import hotelImage from "../assets/image/sch.jpg"; // تأكد من مسار الصورة الصحيح

const Root = styled("div")({
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: "#F8F8F8",
  paddingBottom: "50px",
});

const AboutSection = styled("div")({
  textAlign: "left",
  maxWidth: "600px",
});

const GreenButton = styled(Button)({
  backgroundColor: "#7CB518",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#639A16",
  },
});

const Enjoy = () => {
  return (
    <Root>
      <Container sx={{mt:8}}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={hotelImage}
              alt="Hotel"
              style={{ borderRadius: "10px", width: "70%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutSection>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "bold",
                  fontSize: "80px", // تكبير الخط ليبرز أكثر
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)", // إضافة ظل للنص
                  color: "#333",
                }}
              >
                A best  place <br/>to enjoy<br/> your life
              </Typography>
              <Typography sx={{ color: "#666", marginTop: "10px" , fontFamily: "'Playfair Display', serif",fontSize: "25px",}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
            </AboutSection>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default Enjoy;