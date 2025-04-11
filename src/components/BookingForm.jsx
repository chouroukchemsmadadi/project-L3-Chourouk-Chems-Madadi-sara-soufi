import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { Email, CalendarToday, People, Bed } from "@mui/icons-material";

const BookingForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardType, setCardType] = useState("");

  // Dialog fields
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountPassword, setAccountPassword] = useState("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    // Reset all fields if needed
    setPaymentMethod("");
    setCardType("");
    setAccountName("");
    setAccountPassword("");
  };

  const handleConfirm = () => {
    // هنا يمكنك التعامل مع البيانات مثل الإرسال إلى السيرفر
    console.log({
      customerName,
      phoneNumber,
      paymentMethod,
      cardType,
      accountName,
      accountPassword,
    });
    handleCloseDialog();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        background: "rgba(255, 255, 255, 0.8)",
        padding: 2,
        borderRadius: 12,
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {/* 🧩 Row 1: Email + Room Type */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="E-mail"
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: <Email sx={{ color: "gray", mr: 1 }} />,
          }}
        />
        <TextField
          select
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
          defaultValue="double"
          InputProps={{
            startAdornment: <Bed sx={{ color: "gray", mr: 1 }} />,
          }}
        >
          <MenuItem value="single">Single Room</MenuItem>
          <MenuItem value="double">Double Room</MenuItem>
          <MenuItem value="suite">Suite</MenuItem>
        </TextField>
      </Box>

      {/* 🧩 Row 2: Check-in + Check-out */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <TextField
          type="date"
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: <CalendarToday sx={{ color: "gray", mr: 1 }} />,
          }}
        />
        <TextField
          type="date"
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: <CalendarToday sx={{ color: "gray", mr: 1 }} />,
          }}
        />
      </Box>

      {/* 🧩 Row 3: Guests + Button */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          mb: 4,
        }}
      >
        <TextField
          type="number"
          variant="outlined"
          size="small"
          sx={{ width: 150 }}
          placeholder="Guests"
          InputProps={{
            startAdornment: <People sx={{ color: "gray", mr: 1 }} />,
          }}
        />
        <Button
          variant="contained"
          onClick={handleOpenDialog}
          sx={{
            width: 150,
            height: 40,
            fontSize: "14px",
            backgroundColor: "rgba(146, 98, 46, 0.8)",
            color: "#fff",
            "&:hover": { backgroundColor: "gray" },
            boxShadow: "3px 3px 10px rgba(62, 63, 63, 0.92)",
            borderRadius:"20px"
          }}
        >
          Reserver
        </Button>
      </Box>

      {/* ✅ Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Informations de Réservation</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          {/* Nom du client */}
          <TextField
            label="Nom du client"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            fullWidth
          />

          {/* Numéro de téléphone */}
          <TextField
            label="Numéro de téléphone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
          />

          {/* Méthode de paiement */}
          <TextField
            select
            label="Méthode de paiement"
            value={paymentMethod}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setCardType(""); // Reset card type on payment method change
            }}
            fullWidth
          >
            <MenuItem value="carte">Par carte</MenuItem>
            <MenuItem value="cash">Cash on delivery</MenuItem>
          </TextField>

          {/* Si paiement par carte, afficher type de carte */}
          {paymentMethod === "carte" && (
            <TextField
              select
              label="Type de carte"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              fullWidth
            >
              <MenuItem value="visa">Visa</MenuItem>
              <MenuItem value="paypal">PayPal</MenuItem>
              <MenuItem value="mastercard">Mastercard</MenuItem>
            </TextField>
          )}

          {/* Si type de carte est choisi, afficher les champs du compte */}
          {paymentMethod === "carte" && cardType && (
            <>
              <TextField
                label="Nom du account"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                fullWidth
              />
              <TextField
                label="Le code de carte"
                type="password"
                value={accountPassword}
                onChange={(e) => setAccountPassword(e.target.value)}
                fullWidth
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="error">
            Annuler
          </Button>
          <Button onClick={handleConfirm} variant="contained" color="primary">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BookingForm;
