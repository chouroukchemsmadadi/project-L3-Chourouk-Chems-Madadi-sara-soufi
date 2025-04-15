import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const ProfilePage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openModifyReservation, setOpenModifyReservation] = useState(false);
  const [openReservations, setOpenReservations] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "Name User",
    username: "UserName",
    gender: "Man",
    phone: "",
    email: "email@example.com",
  });

  const [reservations, setReservations] = useState([
    { id: 1, room: "Room 101", startDate: "2025-04-12", endDate: "2025-04-15", status: "Confirmed", type: "Deluxe" },
    { id: 2, room: "Room 102", startDate: "2025-04-18", endDate: "2025-04-20", status: "Pending", type: "Standard" },
  ]);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenNotifications = () => setOpenNotifications(true);
  const handleCloseNotifications = () => setOpenNotifications(false);
  const handleOpenModifyReservation = (id) => setOpenModifyReservation(id);  // فتح نافذة تعديل الحجز
  const handleCloseModifyReservation = () => setOpenModifyReservation(false);
  const handleOpenReservations = () => setOpenReservations(true);
  const handleCloseReservations = () => setOpenReservations(false);
  const handleOpenChangePassword = () => setOpenChangePassword(true);
  const handleCloseChangePassword = () => setOpenChangePassword(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    handleCloseEdit();
  };

  const handleCancelReservation = (id) => {
    setReservations(reservations.filter(reservation => reservation.id !== id));
    console.log(`Reservation ${id} has been cancelled`);
  };

  const handleModifyReservationDetails = (id, newStartDate, newEndDate, newRoomType) => {
    const updatedReservations = reservations.map(reservation =>
      reservation.id === id
        ? { ...reservation, startDate: newStartDate, endDate: newEndDate, type: newRoomType }
        : reservation
    );
    setReservations(updatedReservations);
    console.log(`Reservation ${id} has been modified`);
    handleCloseModifyReservation();
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword === passwordData.confirmNewPassword) {
      console.log("Password changed successfully to:", passwordData.newPassword);
      handleCloseChangePassword();
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <Box sx={{ width: "1500%", maxWidth: 1350, margin: "40px auto", p: 4, bgcolor: "rgba(172, 147, 123, 0.2)", borderRadius: 4, boxShadow: 3, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" mb={3} sx={{backgroundColor: "rgba(182, 139, 94, 0.7)",}}>Profile</Typography>

      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Avatar src="/path-to-profile.jpg" sx={{ width: 120, height: 120, margin: "0 auto" }} />
        <IconButton size="medium" sx={{ position: "absolute", bottom: 5, right: 5,backgroundColor: "rgba(182, 139, 94, 0.7)", color: "#fff", "&:hover": { bgcolor: "primary.dark" } }}>
          <EditIcon fontSize="medium" />
        </IconButton>
      </Box>

      <Typography variant="h5" mt={2}>{formData.name}</Typography>
      <Typography variant="body1" color="text.secondary">{formData.email}</Typography>

      <List sx={{ mt: 4 }}>
        <ListItem button sx={{ mb: 1 }} onClick={handleOpenEdit}>
          <ListItemIcon><PersonIcon color="#b68b5e" fontSize="large" /></ListItemIcon>
          <ListItemText primary="Edit Profile" />
          <ChevronRightIcon />
        </ListItem>

        <ListItem button sx={{ mb: 1 }} onClick={handleOpenNotifications}>
          <ListItemIcon><NotificationsIcon color="#b68b5e" fontSize="large" /></ListItemIcon>
          <ListItemText primary="Notification" />
          <ChevronRightIcon />
        </ListItem>

        <ListItem button sx={{ mb: 1 }} onClick={handleOpenReservations}>
          <ListItemIcon><LocationOnIcon color="#b68b5e" fontSize="large" /></ListItemIcon>
          <ListItemText primary="My Reservation" />
          <ChevronRightIcon />
        </ListItem>

        <ListItem button sx={{ mb: 1 }} onClick={handleOpenChangePassword}>
          <ListItemIcon><LockIcon color="#b68b5e" fontSize="large" /></ListItemIcon>
          <ListItemText primary="Change Password" />
          <ChevronRightIcon />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Button variant="contained" color="primary" startIcon={<LogoutIcon />} fullWidth size="large" sx={{ backgroundColor: "rgba(182, 139, 94, 0.7)",py: 1.5 }}>
        Sign Out
      </Button>

      {/* Modify Reservation Dialog */}
      <Dialog open={openModifyReservation !== false} onClose={handleCloseModifyReservation} fullWidth maxWidth="sm">
        <DialogTitle>Modify Reservation</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={reservations.find(r => r.id === openModifyReservation)?.startDate || ""}
            onChange={(e) => handleModifyReservationDetails(openModifyReservation, e.target.value, null, null)}
          />
          <TextField
            margin="dense"
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={reservations.find(r => r.id === openModifyReservation)?.endDate || ""}
            onChange={(e) => handleModifyReservationDetails(openModifyReservation, null, e.target.value, null)}
          />
          <TextField
            margin="dense"
            label="Room Type"
            fullWidth
            value={reservations.find(r => r.id === openModifyReservation)?.type || ""}
            onChange={(e) => handleModifyReservationDetails(openModifyReservation, null, null, e.target.value)}
            select
          >
            <MenuItem value="Deluxe">Deluxe</MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="Suite">Suite</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModifyReservation}>Cancel</Button>
          <Button onClick={() => handleModifyReservationDetails(openModifyReservation, "2025-04-16", "2025-04-18", "Deluxe")} variant="contained" sx={{backgroundColor: "rgba(182, 139, 94, 0.7)",}}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Reservations List (only displayed when clicked on My Reservation) */}
      {openReservations && (
        <Box sx={{ mt: 4, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
          <Typography variant="h6" fontWeight="bold" mb={2} color="white"sx={{backgroundColor: "rgba(182, 139, 94, 0.7)",}}>
            Your Reservations
          </Typography>
          {reservations.map((reservation) => (
            <Box key={reservation.id} sx={{ mb: 2 }}>
              <Typography variant="body1">
                {reservation.room} - {reservation.startDate} to {reservation.endDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {reservation.status} - Type: {reservation.type}
              </Typography>
              <Button onClick={() => handleOpenModifyReservation(reservation.id)} variant="contained" color="primary" size="small" sx={{ backgroundColor: "rgba(182, 139, 94, 0.7)",mr: 2 }}>
                Modifier
              </Button>
              <Button onClick={() => handleCancelReservation(reservation.id)} variant="outlined" color="error" size="small">
                Cancel
              </Button>
            </Box>
          ))}
        </Box>
      )}

      {/* Notifications Dialog */}
      <Dialog open={openNotifications} onClose={handleCloseNotifications} fullWidth maxWidth="sm">
        <DialogTitle>Notifications</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            🔔 Your profile was updated successfully.
          </Typography>
          <Typography variant="body1" gutterBottom>
            🔔 Your password will expire in 7 days.
          </Typography>
          <Typography variant="body1" gutterBottom>
            🔔 New offers are available in your region.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNotifications} variant="contained" sx={{backgroundColor: "rgba(182, 139, 94, 0.7)",}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Profile Dialog */}
      <Dialog open={openEdit} onClose={handleCloseEdit} fullWidth maxWidth="sm">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Gender"
            type="text"
            fullWidth
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Phone"
            type="text"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{backgroundColor: "rgba(182, 139, 94, 0.7)",}}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog open={openChangePassword} onClose={handleCloseChangePassword} fullWidth maxWidth="sm">
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Current Password"
            type="password"
            fullWidth
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
          />
          <TextField
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
          />
          <TextField
            margin="dense"
            label="Confirm New Password"
            type="password"
            fullWidth
            name="confirmNewPassword"
            value={passwordData.confirmNewPassword}
            onChange={handlePasswordChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseChangePassword}>Cancel</Button>
          <Button onClick={handleChangePassword} variant="contained" sx={{backgroundColor: "rgba(182, 139, 94, 0.7)",}}>
            Change Password
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfilePage;
