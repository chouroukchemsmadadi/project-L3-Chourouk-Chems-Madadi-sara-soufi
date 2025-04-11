import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import roomImage from "../assets/image/room5.jpg";
// Import des images des services
import restaurantImage from "../assets/image/restaurant.avif";
import spaImage from "../assets/image/spa.jpg";
import piscineImage from "../assets/image/piscine.jpg";
import sportImage from "../assets/image/sport.jpg";
import chambreImage from "../assets/image/servicechambre.jpg";
import garderieImage from "../assets/image/garderie.jpg";
import receptionImage from "../assets/image/reception.jpg";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Restaurant Gastronomique", image: restaurantImage, path: "/restaurant" },
    { name: "Spa & Bien-être", image: spaImage, path: "/spa" },
    { name: "Piscine Chauffée", image: piscineImage, path: "/piscine" },
    { name: "Salle de Sport", image: sportImage, path: "/sport" },
    { name: "Service en Chambre 24h/24", image: chambreImage, path: "/servicechambre" },
    { name: "Garderie pour Enfants", image: garderieImage, path: "/garderie" },
    { name: "Réception 24h/24", image: receptionImage, path: "/reception" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        position: "absolute",
        top: "15px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 2,
        backgroundColor: "rgba(182, 139, 94, 0.7)",
        padding: "6px 2px",
        borderRadius: "30px",
        width: "96%",
        height: "11%",
        maxWidth: "1000px",
        mb: 5,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 80 }}>
          <Typography
            variant="h7"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "'Dancing Script', cursive",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Hôtel S&Ch
          </Typography>

          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {["HOME", "ABOUT US", "SERVICES", "BLOG", "CONTACT"].map((item, index) => (
              <Box
                key={index}
                onMouseEnter={() => item === "SERVICES" && setIsServicesOpen(true)}
                onMouseLeave={() => item === "SERVICES" && setIsServicesOpen(false)}
                sx={{ position: "relative" }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                  onClick={() =>
                    navigate(item.toLowerCase() === "about us" ? "/about" : `/${item.toLowerCase().replace(/\s+/g, '')}`)
                  }
                >
                  {item}
                </Button>

                {/* Menu Services */}
                {item === "SERVICES" && isServicesOpen && (
                  <Paper
                    elevation={5}
                    sx={{
                      position: "absolute",
                      top: "45px",
                      right: "-50px", // 👈 هنا التعديل
                      left: "auto", // 👈 هنا أيضا
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      padding: "20px",
                      borderRadius: "30px",
                      minWidth: "320px",
                      zIndex: 1000,
                      color: "white",
                    }}
                  >
                    {services.map((service, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 1 }}>
                        <img
                          src={service.image}
                          alt={service.name}
                          style={{ width: "100px", height: "60px", objectFit: "cover", borderRadius: "5px" }}
                        />
                        <Button
                          onClick={() => navigate(service.path)}
                          sx={{
                            color: "#fff",
                            justifyContent: "flex-start",
                            textTransform: "none",
                            padding: 0,
                            minWidth: "200px",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                          }}
                        >
                          {service.name}
                        </Button>
                      </Box>
                    ))}
                  </Paper>
                )}
              </Box>
            ))}

            {/* Menu déroulant ROOMS & SUITES */}
            <Box sx={{ position: "relative" }} onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
              <Button
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 13,
                  textTransform: "uppercase",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "5px" },
                }}
              >
                ROOMS & SUITES
              </Button>

              {isMenuOpen && (
                <Paper
                  elevation={5}
                  sx={{
                    position: "absolute",
                    top: "45px",
                    left: "-50px",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                    minWidth: "280px",
                    zIndex: 1000,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: "white",
                  }}
                >
                  <Box sx={{ flex: "1" }}>
                    <img
                      src={roomImage}
                      alt="Rooms Preview"
                      style={{ width: "120px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
                    />
                  </Box>

                  <Box sx={{ flex: "1", display: "flex", flexDirection: "column", gap: 1 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#fff",
                        color: "#fff",
                        textTransform: "uppercase",
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                      }}
                      onClick={() => navigate("/rooms")}
                    >
                      Rooms
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#fff",
                        color: "#fff",
                        textTransform: "uppercase",
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                      }}
                      onClick={() => navigate("/suites")}
                    >
                      Suites
                    </Button>
                  </Box>
                </Paper>
              )}
            </Box>
          </Box>

          {/* Gallery Button */}
          <Button
            sx={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold",
              textTransform: "uppercase",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
            onClick={() => navigate("/photogallery")}
          >
            GALLERY
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(143, 75, 3, 0.5)",
              fontWeight: "bold",
              fontSize: 16,
              padding: "8px 20px",
              "&:hover": { backgroundColor: "rgba(44, 43, 43, 0.5)" },
              ml: 2,
              borderRadius:"20px"
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
