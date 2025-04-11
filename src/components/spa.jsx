import React, { useState } from "react";
import { Box, Typography, Container , Paper, Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { Facebook, Instagram, YouTube, Pinterest } from "@mui/icons-material";






// Importation des images
import backgroundImg from "./assets/image/SPA2.jpg";

// Importation des images locales
import image1 from "./assets/image/SPA3.jpg";
import image2 from "./assets/image/SPA4.jpg";
import image3 from "./assets/image/SPA5.jpg";
import image4 from "./assets/image/SPA6.jpg";


import deepImage from "./assets/image/deepimage.jpg";
import spoImage from "./assets/image/spo.jpg";

import LYImage from "./assets/image/LY.jpg";
import aromaImage from "./assets/image/aroma.jpg";

import hotImage from "./assets/image/hot.jpg";

const Spa = () => {
  const [isBooked, setIsBooked] = useState(false);  // État de la réservation
  const [openDialog, setOpenDialog] = useState(false);  // État pour ouvrir/fermer le dialog
  const [massageType, setMassageType] = useState("");  // Type de massage
  const [dateTime, setDateTime] = useState("");  // Date et heure du massage
  const [clientName, setClientName] = useState("");  // Nom du client
  const [phoneNumber, setPhoneNumber] = useState("");  // Numéro de téléphone du client

  // Ouvrir le formulaire de réservation
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Fermer le formulaire de réservation
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Gérer la réservation
  const handleBooking = () => {
    setIsBooked(true);
    handleCloseDialog();
    // Vous pouvez envoyer ici les données vers un serveur ou les sauvegarder localement
    console.log({
      massageType,
      dateTime,
      clientName,
      phoneNumber
    });
  };

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
          backgroundImage: `url(${backgroundImg})`,
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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Assombrir l'arrière-plan
            zIndex: -1,
          },
        }}
      >
        {/* Titre principal */}
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
          SPA & Bien-être
        </Typography>

        {/* Barre de navigation transparente */}
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
      </Box>

      {/* Contenu descriptif */}
      <Box
        sx={{
          width: "100%",
          minHeight: "0vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h8"
          sx={{
            mt: 2,
            maxWidth: "80%",
            fontFamily: "'Dancing Script'",
            textShadow: "3px 3px 6px rgba(62, 60, 60, 0.7)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          <h3>Détente complète, luxe absolu.</h3>
          <br />
          Au Spa & Bien-être, nous vous invitons dans un monde de sérénité et de tranquillité, où la beauté rencontre le soin et où les sens sont entourés d'une expérience luxueuse de confort et de détente.
          <br />
          {/* Texte en français continue ici... */}
        </Typography>
      </Box>

      {/* Affichage des images */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box component="img" src={image1} alt="Image 1" sx={{ width: "100%", height: "70vh", borderRadius: 6, boxShadow: 3 }} />
          </Grid>
          <Grid item xs={3}>
            <Box component="img" src={image2} alt="Image 2" sx={{ width: "100%", height: "70vh", borderRadius: 6, boxShadow: 3 }} />
          </Grid>
          <Grid item xs={3}>
            <Box component="img" src={image3} alt="Image 3" sx={{ width: "100%", height: "70vh", borderRadius: 6, boxShadow: 3 }} />
          </Grid>
          <Grid item xs={3}>
            <Box component="img" src={image4} alt="Image 4" sx={{ width: "100%", height: "70vh", borderRadius: 6, boxShadow: 3 }} />
          </Grid>
        </Grid>
      </Box>







      <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Cela mettra l'image et le texte en colonne par défaut
        alignItems: "center", // Centre tout le contenu horizontalement
        justifyContent: "center", // Centre tout le contenu verticalement
        minHeight: "100vh", // S'assure que le Box prend toute la hauteur de l'écran
        backgroundColor: "#F5F5F5",
        padding: "4rem 0",
      }}
    >
      {/* Contenu texte */}
      <Box sx={{ textAlign: "center", width: "100%", maxWidth: "1000px", padding: "1rem" }}>
        <Paper
          sx={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // fond légèrement transparent pour le texte
            borderRadius: '12px',
            boxShadow: 3,
            marginBottom: '0rem', // Ajouter un espace entre le texte et l'image
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="rgba(108, 49, 3, 0.9)" gutterBottom>
          Deep Tissue Massage
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            <strong>Ingrédients :</strong> Utilise des techniques de massage puissantes et profondes pour atteindre
            les couches musculaires plus profondes. Des outils de massage sont parfois utilisés.
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Objectif :</strong> Traiter les tensions profondes et les douleurs chroniques, notamment chez les
            personnes souffrant de problèmes musculaires.
          </Typography>
        </Paper>
      </Box>

      {/* Image */}
      <Box
        sx={{
          width: "80%", // L'image occupe 80% de la largeur
          maxWidth: "800px", // Limite la largeur maximale de l'image
          height: "400px", // Ajustez la hauteur selon vos besoins
          backgroundImage: `url(${deepImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          boxShadow: 3,
        }}
      />
    </Box>






    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Cela mettra l'image et le texte en colonne par défaut
        alignItems: "center", // Centre tout le contenu horizontalement
        justifyContent: "center", // Centre tout le contenu verticalement
        minHeight: "100vh", // S'assure que le Box prend toute la hauteur de l'écran
        backgroundColor: "#F5F5F5",
        padding: "0rem 0",
      }}
    >
      {/* Contenu texte */}
      <Box sx={{ textAlign: "center", width: "100%", maxWidth: "1000px", padding: "1rem" }}>
        <Paper
          sx={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // fond légèrement transparent pour le texte
            borderRadius: '12px',
            boxShadow: 3,
            marginBottom: '0rem', // Ajouter un espace entre le texte et l'image
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="rgba(108, 49, 3, 0.9)" gutterBottom>
          Hot Stone Massage
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          les composants:
Il utilise des pierres douces et chauffées placées sur des points spécifiques du corps pour stimuler l'énergie et soulager les tensions. De l’huile de massage peut être ajoutée pour améliorer l’expérience de relaxation et améliorer la glisse des pierres sur la peau.

le but:
Aide à détendre les muscles profonds, à soulager les tensions et à stimuler la circulation sanguine. Il aide également à soulager les douleurs chroniques, à améliorer la flexibilité des articulations et à procurer un profond sentiment de confort psychologique et physique.
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Objectif :</strong> Traiter les tensions profondes et les douleurs chroniques, notamment chez les
            personnes souffrant de problèmes musculaires.
          </Typography>
        </Paper>
      </Box>

      {/* Image */}
      <Box
        sx={{
          width: "80%", // L'image occupe 80% de la largeur
          maxWidth: "800px", // Limite la largeur maximale de l'image
          height: "400px", // Ajustez la hauteur selon vos besoins
          backgroundImage: `url(${hotImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          boxShadow: 0,
        }}
      />
    </Box>













    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Cela mettra l'image et le texte en colonne par défaut
        alignItems: "center", // Centre tout le contenu horizontalement
        justifyContent: "center", // Centre tout le contenu verticalement
        minHeight: "100vh", // S'assure que le Box prend toute la hauteur de l'écran
        backgroundColor: "#F5F5F5",
        padding: "4rem 0",
      }}
    >
      {/* Contenu texte */}
      <Box sx={{ textAlign: "center", width: "100%", maxWidth: "1000px", padding: "1rem" }}>
        <Paper
          sx={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // fond légèrement transparent pour le texte
            borderRadius: '12px',
            boxShadow: 3,
            marginBottom: '0rem', // Ajouter un espace entre le texte et l'image
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="rgba(108, 49, 3, 0.9)" gutterBottom>
          Lymphatic Drainage Massage
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          Ingrédients : Une technique qui utilise une pression douce pour stimuler le drainage des fluides lymphatiques dans le corps.

Objectif : améliorer la circulation sanguine, réduire la rétention d’eau et améliorer la santé globale.
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Objectif :</strong> Traiter les tensions profondes et les douleurs chroniques, notamment chez les
            personnes souffrant de problèmes musculaires.
          </Typography>
        </Paper>
      </Box>

      {/* Image */}
      <Box
        sx={{
          width: "80%", // L'image occupe 80% de la largeur
          maxWidth: "800px", // Limite la largeur maximale de l'image
          height: "400px", // Ajustez la hauteur selon vos besoins
          backgroundImage: `url(${LYImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          boxShadow: 3,
        }}
      />
    </Box>











    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Cela mettra l'image et le texte en colonne par défaut
        alignItems: "center", // Centre tout le contenu horizontalement
        justifyContent: "center", // Centre tout le contenu verticalement
        minHeight: "100vh", // S'assure que le Box prend toute la hauteur de l'écran
        backgroundColor: "#F5F5F5",
        padding: "4rem 0",
      }}
    >
      {/* Contenu texte */}
      <Box sx={{ textAlign: "center", width: "100%", maxWidth: "1000px", padding: "1rem" }}>
        <Paper
          sx={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // fond légèrement transparent pour le texte
            borderRadius: '12px',
            boxShadow: 3,
            marginBottom: '0rem', // Ajouter un espace entre le texte et l'image
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="rgba(108, 49, 3, 0.9)" gutterBottom>
          Aromatherapy Massage
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            <strong>Ingrédients :</strong> Utilise des techniques de massage puissantes et profondes pour atteindre
            les couches musculaires plus profondes. Des outils de massage sont parfois utilisés.
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Objectif :</strong> Traiter les tensions profondes et les douleurs chroniques, notamment chez les
            personnes souffrant de problèmes musculaires.
          </Typography>
        </Paper>
      </Box>

      {/* Image */}
      <Box
        sx={{
          width: "80%", // L'image occupe 80% de la largeur
          maxWidth: "800px", // Limite la largeur maximale de l'image
          height: "400px", // Ajustez la hauteur selon vos besoins
          backgroundImage: `url(${aromaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          boxShadow: 3,
        }}
      />
    </Box>



















    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Cela mettra l'image et le texte en colonne par défaut
        alignItems: "center", // Centre tout le contenu horizontalement
        justifyContent: "center", // Centre tout le contenu verticalement
        minHeight: "100vh", // S'assure que le Box prend toute la hauteur de l'écran
        backgroundColor: "#F5F5F5",
        padding: "4rem 0",
      }}
    >
      {/* Contenu texte */}
      <Box sx={{ textAlign: "center", width: "100%", maxWidth: "1000px", padding: "1rem" }}>
        <Paper
          sx={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // fond légèrement transparent pour le texte
            borderRadius: '12px',
            boxShadow: 3,
            marginBottom: '0rem', // Ajouter un espace entre le texte et l'image
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="rgba(108, 49, 3, 0.9)" gutterBottom>
          Sports Massage
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            <strong>Ingrédients :</strong> Utilise des techniques de massage puissantes et profondes pour atteindre
            les couches musculaires plus profondes. Des outils de massage sont parfois utilisés.
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Objectif :</strong> Traiter les tensions profondes et les douleurs chroniques, notamment chez les
            personnes souffrant de problèmes musculaires.
          </Typography>
        </Paper>
      </Box>

      {/* Image */}
      <Box
        sx={{
          width: "80%", // L'image occupe 80% de la largeur
          maxWidth: "800px", // Limite la largeur maximale de l'image
          height: "400px", // Ajustez la hauteur selon vos besoins
          backgroundImage: `url(${spoImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          boxShadow: 3,
        }}
      />
    </Box>













    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Cela mettra l'image et le texte en colonne par défaut
        alignItems: "center", // Centre tout le contenu horizontalement
        justifyContent: "center", // Centre tout le contenu verticalement
        minHeight: "100vh", // S'assure que le Box prend toute la hauteur de l'écran
        backgroundColor: "#F5F5F5",
        padding: "4rem 0",
      }}
    >
      {/* Contenu texte */}
      <Box sx={{ textAlign: "center", width: "100%", maxWidth: "1000px", padding: "1rem" }}>
        <Paper
          sx={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // fond légèrement transparent pour le texte
            borderRadius: '12px',
            boxShadow: 3,
            marginBottom: '2rem', // Ajouter un espace entre le texte et l'image
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="rgba(108, 49, 3, 0.9)" gutterBottom>
          Shiatsu Massage
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            <strong>Ingrédients :</strong> Utilise des techniques de massage puissantes et profondes pour atteindre
            les couches musculaires plus profondes. Des outils de massage sont parfois utilisés.
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Objectif :</strong> Traiter les tensions profondes et les douleurs chroniques, notamment chez les
            personnes souffrant de problèmes musculaires.
          </Typography>
        </Paper>
      </Box>

      {/* Image */}
      <Box
        sx={{
          width: "80%", // L'image occupe 80% de la largeur
          maxWidth: "600px", // Limite la largeur maximale de l'image
          height: "300px", // Ajustez la hauteur selon vos besoins
          backgroundImage: `url(${deepImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          boxShadow: 3,
        }}
      />
    </Box>












    















      {/* Bouton de réservation */}
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Button
          
            variant="contained" 
          onClick={handleOpenDialog}
          sx={{
            fontSize: "16px",
            padding: "10px 20px",
            textTransform: "uppercase",
            borderRadius: "50px",
            backgroundColor: "rgba(143, 75, 3, 0.5)",
          }}
        >
          {isBooked ? "Votre place a été réservée avec succès !" : "Prendre rendez-vous"}
        </Button>
      </Box>

      {/* Formulaire de réservation */}
      <Box sx={{ backgroundColor: "rgba(143, 75, 3, 0.5)", borderRadius: "16px" }}>
      <Dialog open={openDialog} onClose={handleCloseDialog} >
      
      
      
      
        <DialogTitle>Prendre rendez-vous pour un massage</DialogTitle>
        <DialogContent >
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Type de massage</InputLabel>
            <Select
              value={massageType}
              onChange={(e) => setMassageType(e.target.value)}
              label="Type de massage"
            >
              <MenuItem value="Relaxant">Deep Tissue Massage</MenuItem>
              <MenuItem value="Therapeutic">Hot Stone Massage</MenuItem>
              <MenuItem value="Sports">Aromatherapy Massage</MenuItem>
              <MenuItem value="Sports">Sports Massage</MenuItem>
              <MenuItem value="Sports">Shiatsu Massage</MenuItem>
              <MenuItem value="Sports">Lymphatic Drainage Massage</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Date et heure du rendez-vous"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="votre nom"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="votre numero"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="#8F4B03">
            Annuler
          </Button>
          <Button onClick={handleBooking} color="#8F4B03">
          Confirmez votre réservation
          </Button>
        </DialogActions>
      </Dialog></Box>




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

    
    </>
  );
};

export default Spa;
