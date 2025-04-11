import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Facebook, Instagram, YouTube, Pinterest } from "@mui/icons-material";






import { Box, Typography, Button, Grid, Paper , TextField, Container } from "@mui/material";


// استيراد الفيديوهات من المجلد المحلي
import video1 from "./assets/video/vedio1.mp4";
import video2 from "./assets/video/vedio2.mp4";
// استيراد الصور من مجلد assets
import img1 from "./assets/image/G3.jpg";
import img2 from "./assets/image/J1.avif";
import img11 from "./assets/image/J6.jpg";
import img3 from "./assets/image/J5.jpeg";
import img4 from "./assets/image/J2.jpg";
import img5 from "./assets/image/J4.jpg";
import img6 from "./assets/image/J9.jpg";
import img7 from "./assets/image/J3.jpg";
import img8 from "./assets/image/J8.jpg";
import img9 from "./assets/image/J10.jpg";
import img10 from "./assets/image/J7.jpg";
import pasta from "./assets/image/pastaa.jpg";
import FettuccineAlfredo from "./assets/image/FettuccineAlfredo.jpg";
import PizzaMargherita from "./assets/image/PizzaMargherita.jpg";
import  Lasagnes from "./assets/image/Lasagnes.jpg";
import  Risotto from "./assets/image/Risotto.jpg";
import  SaladeCaprese from "./assets/image/SaladeCaprese.jpg";



import img12 from "./assets/image/M1.jpg";
import img20 from "./assets/image/M9jpeg.jpeg";
import img21 from "./assets/image/M2.jpg";
import img13 from "./assets/image/M3.jpg";
import img14 from "./assets/image/M4.jpg";
import img15 from "./assets/image/M8.webp";
import img16 from "./assets/image/M7.webp";
import img17 from "./assets/image/M6.jpeg";
import img18 from "./assets/image/M5.jpg";
import img19 from "./assets/image/M7.jpeg";








const Restaurant = () => {
  
  return (
    <Box sx={{ maxWidth: "1400px", mx: "auth", px: 0, py: 0 }}>
    <Box
      sx={{
        backgroundColor: "#F1E0C6", // خلفية بني فاتح
        minHeight: "100vh", // التأكد من تغطية الشاشة بالكامل
        paddingTop: "80px", // لإضافة مسافة بعد شريط القائمة
      }}
    >

      {/* شريط القائمة الشفاف */}
      <Box
        sx={{
          position: "fixed", // لتثبيت الشريط في الجزء العلوي من الصفحة
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 2,
          marginTop: 4,
          backgroundColor: "rgba(173, 171, 171, 0.6)",
          padding: "10px 20px",
          borderRadius: "20px",
          zIndex: 999, // لضمان ظهور الشريط فوق العناصر الأخرى
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


      {/* سلايدر الصور */}
      <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#E0E0E0" }}> {/* خلفية مائلة للرمادي */}
        {/* العنوان الكبير */}
        <Typography
            variant="h3"
            sx={{
              mt: 2,
              maxWidth: "100%",
              fontFamily: "'Dancing Script'",
              textShadow: "3px 3px 6px rgba(62, 60, 60, 0.7)",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Vue sur le jardin
          </Typography>
{/* الفيديو الأول */}
<Box sx={{ textAlign: "center" }}>
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "600px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
          
        </Box>
        {/* العنوان الأصغر */}
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            color: "#555",
            fontFamily: "cursive",
          }}
        >
          -Le restaurant est situé dans un endroit calme donnant sur un magnifique jardin plein d'arbres et de fleurs.<br/> Il se caractérise par son atmosphère confortable et ses paysages naturels pittoresques.<br/> Il sert de délicieux plats dans une atmosphère paisible,<br/> ce qui en fait l'endroit idéal pour savourer un délicieux repas en pleine nature.-
        </Typography>

        {/* السلايدر */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={10} // تقليص المسافة بين الصور
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          style={{ paddingBottom: "20px" }}
        >
          {[img1, img2, img3, img4, img5, img6 , img7, img8, img9, img10, img11].map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "250px",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>






    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#E0E0E0" }}> 
        
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: "'Dancing Script', cursive",
            color:" rgba(88, 50, 4, 0.7)",
          }}
        >
         MENU
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            color: "#555",
            fontFamily: "cursive",
          }}
        >
          Présentation des plats du restaurant

Dans notre restaurant, l’excellence ne se limite pas seulement au goût,<br/> mais inclut également la manière dont les plats sont présentés avec soin et élégance.<br/> Nous veillons à ce que chaque repas soit une expérience unique, en commençant par la disposition de l'assiette et la distribution artistique des ingrédients,<be/> pour aiguiser l'appétit et toucher les sens avant même de commencer à manger.<br/> Nous utilisons des plats de haute qualité, ajoutant des touches de couleurs naturelles et des décorations simples pour mettre en valeur la beauté de chaque ingrédient individuel.<br/> Notre objectif est que chaque plat vous offre une expérience visuelle délicieuse qui correspond à la qualité du goût.
        </Typography>
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Pasta Italiano
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          Ingrédients des pâtes :<br/>

Pâtes (type selon vos envies : spaghetti, penne, fettuccine...)<br/>

huile d'olive<br/>

ail haché<br/>

oignon finement haché<br/>

tomates moulues ou sauce tomate préparée<br/>

sel et poivre noir<br/>

basilic frais ou séché<br/>

Origan (facultatif)<br/>

Parmesan râpé (pour servir)<br/>

Piment rouge (facultatif, si vous aimez le piquant)<br/>

Vous pouvez ajouter comme vous le souhaitez :

viande hachée, poulet ou crevettes

Crème de cuisson si vous l'aimez avec de la sauce blanche

Légumes tels que poivrons, champignons et épinards
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${pasta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Fettuccine Alfredo
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

Pâtes fettuccine<br/>

crème de cuisson<br/>

beurre<br/>

fromage parmesan<br/>

ail haché<br/>

sel et poivre<br/>

Poulet grillé ou champignons (facultatif)
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "50vh",
            backgroundImage:`url(${FettuccineAlfredo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Pizza Margherita
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

pâte à pizza<br/>

sauce tomate<br/>

fromage mozzarella<br/>

basilic frais<br/>

huile d'olive<br/>

une pincée de sel

          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "50vh",
            backgroundImage:`url(${PizzaMargherita})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Lasagnes
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

feuilles de lasagnes<br/>

viande hachée<br/>

sauce tomate<br/>

sauce béchamel<br/>

Mozzarella et parmesan<br/>

Oignon et ail<br/>

huile d'olive, sel et poivre

          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${Lasagnes})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Risotto
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

Riz Arborio (pour risotto)<br/>

bouillon de poulet ou de légumes<br/>

oignon haché
<br/>
beurre
<br/>
fromage parmesan
<br/>
Champignons ou crevettes (selon le type)

          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${Risotto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Salade Caprese
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

tranches de tomates<br/>

Tranches de mozzarella fraîche<br/>

feuilles de basilic frais<br/>

Huile d'olive vierge extra<br/>

sel et poivre<br/>

Vinaigre balsamique (facultatif)<br/>
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${SaladeCaprese})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>




 

     
     
     
     



      <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#E0E0E0" }}> {/* خلفية مائلة للرمادي */}
        {/* العنوان الكبير */}
        <Typography
            variant="h3"
            sx={{
              mt: 2,
              maxWidth: "100%",
              fontFamily: "'Dancing Script'",
              textShadow: "3px 3px 6px rgba(62, 60, 60, 0.7)",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Vue sur la mer
          </Typography>
{/* الفيديو الأول */}
<Box sx={{ textAlign: "center" }}>
          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "600px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
          
        </Box>
        {/* العنوان الأصغر */}
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            color: "#555",
            fontFamily: "cursive",
          }}
        >
          Restaurant sur la mer
          Un restaurant avec une charmante vue sur la mer, servant des plats distinctifs dans une atmosphère tranquille qui allie brise marine et saveurs fraîches.
        </Typography>

        {/* السلايدر */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={10} // تقليص المسافة بين الصور
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          style={{ paddingBottom: "20px" }}
        >
          {[img12, img20, img13, img14, img15, img16 , img17, img18, img19,  img21].map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "250px",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Homard thermidor
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

tranches de tomates<br/>

Tranches de mozzarella fraîche<br/>

feuilles de basilic frais<br/>

Huile d'olive vierge extra<br/>

sel et poivre<br/>

Vinaigre balsamique (facultatif)<br/>
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${img16})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Brochettes de crevettes
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

tranches de tomates<br/>

Tranches de mozzarella fraîche<br/>

feuilles de basilic frais<br/>

Huile d'olive vierge extra<br/>

sel et poivre<br/>

Vinaigre balsamique (facultatif)<br/>
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${img15})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Calamars frits
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

tranches de tomates<br/>

Tranches de mozzarella fraîche<br/>

feuilles de basilic frais<br/>

Huile d'olive vierge extra<br/>

sel et poivre<br/>

Vinaigre balsamique (facultatif)<br/>
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${img19})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Crevettes sautées à l'ail
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

tranches de tomates<br/>

Tranches de mozzarella fraîche<br/>

feuilles de basilic frais<br/>

Huile d'olive vierge extra<br/>

sel et poivre<br/>

Vinaigre balsamique (facultatif)<br/>
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${img20})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Dorade grillée
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
          les composants:<br/>

tranches de tomates<br/>

Tranches de mozzarella fraîche<br/>

feuilles de basilic frais<br/>

Huile d'olive vierge extra<br/>

sel et poivre<br/>

Vinaigre balsamique (facultatif)<br/>
          </Typography>

          
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: "#8B572A", color: "white" }}>
              commander
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#8B572A", color: "#8B572A" }}>
              Reserver un place
            </Button>
          </Box>
        </Paper>

        <Box
          sx={{
            flex: 1,
            width:"100%",
            height: "60vh",
            backgroundImage:`url(${img17})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
    
        <Box sx={{ backgroundColor: "#273F5B", color: "#fff", textAlign: "center", p: 3 }}>
          <Typography variant="body2">© 2025 Hotel S&Ch. All rights reserved.</Typography>
        </Box>

    


     
     
     </Box>
  );
};

export default Restaurant;
