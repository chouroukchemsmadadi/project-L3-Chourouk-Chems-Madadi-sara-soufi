import React, { useState } from "react";

import { Box, Typography, Button, Grid, Paper , TextField, Container } from "@mui/material";

import { Facebook, Instagram, YouTube, Pinterest } from "@mui/icons-material";






import hotelImage1 from "../assets/image/h1.jpg";
import hotelImage2 from "../assets/image/h2.jpg";
import kidsResortImage from "../assets/image/h3.jpg";
import babyClubImage from "../assets/image/h4.jpg";
import chefImage from "../assets/image/h5.jpg";

const H1 = () => {
  return (<>
    <Box>
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
          mb: 4,
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

      <Box id="about-us" sx={{ backgroundColor: "#F2F0EC", py: 8 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              mt:3,
              fontWeight: "bold",
              color: "rgba(248, 156, 86, 0.6)",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
              mb: 0,
            }}
          >
            About Us
          </Typography>


<Box
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
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            fontSize: "20px", // تكبير الخط ليبرز أكثر
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)", // إضافة ظل للنص
            color: "#333",
          }}>
          Nous sommes heureux de vous accueillir dans notre hôtel de luxe, où le luxe rencontre le confort et un service supérieur. Votre visite est un grand honneur et nous nous engageons à vous offrir une expérience exceptionnelle qui dépasse vos attentes.

Dès votre arrivée, notre équipe professionnelle sera à votre service pour répondre à tous vos besoins, veillant à ce que votre séjour chez nous soit rempli de luxe et de tranquillité. Profitez d'une atmosphère d'élégance, d'installations intégrées et de services spécialement conçus pour vous donner un sentiment de distinction inoubliable.

Nous sommes là pour créer avec vous des moments inoubliables. Bienvenue dans un monde de luxe et d'hospitalité raffinée.
        </Typography></Box>



          {/* قسم 1 */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: " rgb(255, 255, 255)", p: 4, borderRadius: "8px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3A3A3A", mb: 2 }}>
                  A Palace in a natural setting in Haute Savoie
                </Typography>
                <Typography variant="body1" sx={{ color: "#4F4F4F", lineHeight: 1.8 }}>
                From the moment they arrive at the 5-star Hôtel Royal in Evian-les-Bains, guests are greeted by a panorama combining the foothills of the Alps and the waters of Lake Geneva : the sense of wonder remains intact every time. The eye is drawn both to the surrounding mountains and Lake Geneva, revealed placidly below, like an impressionist canvas.
        
        Proudly displaying its five stars, Hotel Royal owes its international renown and Palace status to its rare setting and scenery, the imagination it instills and its singular history.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src={hotelImage1} alt="Luxury Hotel" sx={{ width: "100%", borderRadius: "10px", boxShadow: 3 }} />
            </Grid>
          </Grid>

          {/* قسم 2 */}
          <Grid container spacing={4} alignItems="center" sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
              <Box component="img" src={hotelImage2} alt="Luxury Dining" sx={{ width: "100%",height:"100vh", borderRadius: "10px", boxShadow: 3 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: " rgb(255, 255, 255)",p: 4, borderRadius: "8px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3A3A3A", mb: 2 }}>
                  The art of entertaining in a luxury hotel in Evian
                </Typography>
                <Typography variant="body1" sx={{ color: "#4F4F4F", lineHeight: 1.8 }}>
                In this alcove shaped by nature, the Hôtel Royal 5-star in Haute Savoie, has withstood the time’s passing. Beyond the sumptuousness of its legend and its elegance that leaves no detail untouched; beyond the highlights that placed it at the forefront of the scene on multiple occasions, the Hôtel Royal honors moments of rarity with refined simplicity.For guests who reserve a room with a view every year, or for those to whom the hotel is still an unknown entity, the Palace teams have crafted its atmosphere, as sophisticated as it is easygoing, which characterizes perfectly this Evian luxury hotel address.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* قسم 3 - Kid's Resort */}
          <Grid container spacing={4} alignItems="center" sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{  backgroundColor: " rgb(255, 255, 255)", p: 4, borderRadius: "8px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3A3A3A", mb: 2 }}>
                  Kid's Resort
                </Typography>
                <Typography variant="body1" sx={{ color: "#4F4F4F", lineHeight: 1.8 }}>
                             
At the Evian Resort, special attention is paid to welcoming our young guests. No detail has been overlooked: interconnecting rooms, a dedicated swimming pool with a dedicated lifeguard, babysitters and baby-care equipment available on request.

The Kid's Resort offers a club for children of all ages to play, explore and laugh. Baby Club, Kid's Club and Teen's Club: a thousand square meters of modular space, outdoor activities, their own lounges and staff.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src={kidsResortImage} alt="Kid's Resort" sx={{ width: "100%", borderRadius: "10px", boxShadow: 3 }} />
            </Grid>
          </Grid>

          {/* قسم 4 - Baby Club */}
          <Grid container spacing={4} alignItems="center" sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
              <Box component="img" src={babyClubImage} alt="Baby Club" sx={{ width: "100%",height:"90vh", borderRadius: "10px", boxShadow: 3 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{  backgroundColor: " rgb(255, 255, 255)", p: 4, borderRadius: "8px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3A3A3A", mb: 2 }}>
                  Baby Club
                </Typography>
                <Typography variant="body1" sx={{ color: "#4F4F4F", lineHeight: 1.8 }}>
                The Baby Club warmly welcomes your little ones from the age of 4 months up to 36 months.
Open every day from 9 AM to 6 PM, our dedicated space has been carefully designed to create a safe, stimulating, and nurturing environment where your baby can thrive.

In our exceptional room, you'll find distinct zones tailored to meet the needs of every moment in your baby's day:

<br/><strong>🧩 Play & Motor Skills Area:</strong> Filled with age-appropriate toys and equipment to help your child develop coordination, curiosity, and confidence through fun, interactive activities.

<br/><strong>📚 Reading & Quiet Corner:</strong>A cozy, calm spot designed to introduce babies to the joys of books, storytelling, and sensory discovery.

<br/><strong>😴 Nap Area:</strong> Equipped with comfortable cots and soft bedding, ensuring your baby enjoys restful, peaceful naps throughout the day.

<strong>🍼 Complete Baby Care Facilities:</strong>Including modern changing tables, hygiene stations, and all essential nursery equipment to provide the highest standards of care and comfort.

Our trained and caring staff ensure that each child receives individual attention, fostering their early learning experiences in a loving atmosphere. Whether it's playtime, storytime, or nap time, your baby's well-being and happiness are our top priorities.

We’re here to support you and your family every day, creating joyful memories and a trusted, secure environment for your little ones to grow.


                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* قسم 5 - Chef */}
          <Grid container spacing={4} alignItems="center" sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{  backgroundColor: " rgb(255, 255, 255)", p: 4, borderRadius: "8px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3A3A3A", mb: 2 }}>
                  The Chef Patrice Vander
                </Typography>
                <Typography variant="body1" sx={{ color: "#4F4F4F", lineHeight: 1.8 }}>
                Le Chef Patrice Vandre, chef cuisinier de tous les restaurants de l'Hôtel Royal, vous propose une expérience culinaire unique alliant créativité et raffinement, en utilisant les meilleurs ingrédients soigneusement sélectionnés.
Grâce à sa passion sans pareille et à son talent exceptionnel, le chef Vander a de nouveau reçu une étoile Michelin cette année, reflétant son engagement indéfectible envers les plus hauts standards de qualité et d'innovation dans l'art culinaire.

Au célèbre restaurant Les Fresques, le chef Vander vous invite à un voyage culinaire inspirant, vous emmenant dans des mondes de saveurs éblouissantes et d'expériences sensorielles raffinées.
Chaque plat servi ici n’est pas seulement un repas, mais un chef-d’œuvre qui vous invite à découvrir les détails subtils, à savourer l’harmonie des saveurs et à profiter de moments inoubliables de pur plaisir.

« Une invitation ouverte aux connaisseurs du bon goût : créons ensemble des souvenirs inoubliables autour d'une table de créativité et de sophistication. »
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src={chefImage} alt="Chef Patrice Vander" sx={{ width: "100%",height:"100vh", borderRadius: "10px", boxShadow: 3 }} />
            </Grid>
          </Grid>

        </Container>
      </Box>
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

export default H1;
