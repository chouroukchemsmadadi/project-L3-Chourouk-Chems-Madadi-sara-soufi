import React, { useState } from "react";
import { Box, Typography, Button, TextField, Select, MenuItem, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import hotelImage from "../assets/image/sch.jpg";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("client");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f2e6d9",
        overflow: "hidden",
      }}
    >
      {/* الصورة مع التظليل */}
      <Box
        sx={{
          position: "relative",
          width: "50vw",
          height: "100vh",
          borderRadius: "10px",
          boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={hotelImage}
          alt="Hôtel S&Ch"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
      </Box>

      {/* إطار تسجيل الدخول والتسجيل */}
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          maxWidth: "400px",
          backgroundColor: "#fffaf0",
          borderRadius: "12px",
          boxShadow: "5px 5px 20px rgba(0,0,0,0.15)",
          mx: "auto",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#8b5e3b", mb: 2 }}>
          {isLogin ? "Connexion" : "Inscription"}
        </Typography>

        {!isLogin && (
          <>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <TextField label="Nom" variant="outlined" fullWidth sx={{ bgcolor: "#f9f3e6", borderRadius: "5px" }} />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Prénom" variant="outlined" fullWidth sx={{ bgcolor: "#f9f3e6", borderRadius: "5px" }} />
              </Grid>
            </Grid>

            <TextField
              label="Téléphone"
              type="tel"
              variant="outlined"
              fullWidth
              sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
            />

            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              fullWidth
              displayEmpty
              sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
            >
              <MenuItem value="client">Client</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employe">Employé</MenuItem>
            </Select>
          </>
        )}

        {/* Email */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
        />
        {/* Mot de passe */}
        <TextField
          label="Mot de passe"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
        />

        {/* Sélecteur rôle فقط في login */}
        {isLogin && (
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            fullWidth
            displayEmpty
            sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
          >
            <MenuItem value="client">Client</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="employe">Employé</MenuItem>
          </Select>
        )}

        {/* Confirm mot de passe فقط في التسجيل */}
        {!isLogin && (
          <TextField
            label="Confirmer le mot de passe"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
          />
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: "25px",
            fontSize: "1rem",
            mb: 2,
            backgroundColor: "#B58459",
            "&:hover": { backgroundColor: "#8b5e3b" },
          }}
        >
          {isLogin ? "Se connecter" : "S'inscrire"}
        </Button>

        {isLogin && (
          <Typography
            sx={{
              cursor: "pointer",
              color: "#8b5e3b",
              textDecoration: "underline",
              fontSize: "0.9rem",
              mb: 1,
              "&:hover": { color: "#a67c52" },
            }}
            onClick={() => alert("Lien de récupération envoyé à votre email")}
          >
            Mot de passe oublié ?
          </Typography>
        )}

        <Typography
          sx={{
            cursor: "pointer",
            color: "#8b5e3b",
            textDecoration: "underline",
            fontSize: "0.9rem",
            "&:hover": { color: "#a67c52" },
          }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Créer un compte" : "Déjà un compte ? Connectez-vous"}
        </Typography>
      </Box>
    </Box>
  );
}

export default Auth;
