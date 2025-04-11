import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

// Import des images (assurez-vous qu'elles existent dans src/assets/image)
import event1 from "../assets/image/event1.jpg";
import event2 from "../assets/image/event2.jpg";
import event3 from "../assets/image/event3.jpg";
import event4 from "../assets/image/event4.avif";
import event5 from "../assets/image/event5.avif";
import event6 from "../assets/image/event6.avif";
import event7 from "../assets/image/event7.avif";

const events = [
  { title: "Music Concerts", date: "25 APRIL", image: event1 },
  { title: "Yuga", date: "22 JUNE", image: event2 },
  { title: "Theatrical performances", date: "15 MAY", image: event3 },
  { title: "Tennis Star Event - Daniel Brands", date: "From 29 May 2025 to 1 Jun 2025", image: event4 },
  { title: "Grand Fair at the Kid's Resort", date: "30 May 2025", image: event5 },
  { title: "Rencontres Musicales d'Evian", date: "From 25 Jun 2025 to 5 Jul 2025", image: event6 },
  { title: "Little Guest Race", date: "8 Jun 2025", image: event7 },
];

const Events = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#f8f8f8" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Upcoming Events
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Don't miss our exclusive events!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: "auto", position: "relative" ,borderRadius:"20px"}}>
              <CardMedia component="img" height="200" image={event.image} alt={event.title} />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {event.title}
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  {event.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Events;