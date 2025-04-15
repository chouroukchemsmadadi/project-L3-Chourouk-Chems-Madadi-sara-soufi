import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import hotelImage from "../assets/image/sch.jpg";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("client");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // ✅ Redirection vers la page account.jsx
      navigate("/account");
    } else {
      // Pour inscription, tu peux ajouter une autre logique ici
      console.log("Inscription :", formData, role);
    }
  };

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
      {/* Image Section */}
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

      {/* Form Section */}
      <Box
        component="form"
        onSubmit={handleSubmit}
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

        {/* Register Fields */}
        {!isLogin && (
          <>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <TextField
                  label="Nom"
                  name="nom"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  value={formData.nom}
                  sx={{ bgcolor: "#f9f3e6", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Prénom"
                  name="prenom"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  value={formData.prenom}
                  sx={{ bgcolor: "#f9f3e6", borderRadius: "5px" }}
                />
              </Grid>
            </Grid>

            <TextField
              label="Téléphone"
              name="telephone"
              type="tel"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.telephone}
              sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
            />
          </>
        )}

        {/* Email */}
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.email}
          sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
        />

        {/* Password */}
        <TextField
          label="Mot de passe"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.password}
          sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
        />

        {/* Confirm Password (Register only) */}
        {!isLogin && (
          <TextField
            label="Confirmer le mot de passe"
            name="confirmPassword"
            type="password"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={formData.confirmPassword}
            sx={{ mb: 2, bgcolor: "#f9f3e6", borderRadius: "5px" }}
          />
        )}

        {/* Role Select */}
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

        {/* Button Se connecter / S'inscrire */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "rgba(146, 98, 46, 0.7)",
            "&:hover": { bgcolor: "grey" },
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          {isLogin ? "Se connecter" : "S'inscrire"}
        </Button>

        {/* Switch login/register */}
        <Typography variant="body2" sx={{ color: "#5c4033", cursor: "pointer" }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Créer un compte" : "Vous avez déjà un compte ? Connectez-vous"}
        </Typography>
      </Box>
    </Box>
  );
}

export default Auth;
