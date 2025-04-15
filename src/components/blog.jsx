import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box
} from "@mui/material";

import { Facebook, Instagram, YouTube, Pinterest } from "@mui/icons-material";

import travelImage from "../assets/image/Top.webp";
import hotelImage from "../assets/image/Unmissable.webp";
import localGuideImage from "../assets/image/Local.avif";
import spaImage from "../assets/image/SPA4.jpg";
import tipsImage from "../assets/image/Travel.png";
import eventsImage from "../assets/image/Upcoming.jpg";
import bookingImage from "../assets/image/Booking-Hotel.jpg";
import covidImage from "../assets/image/corona.jpeg";
import feedbackImage from "../assets/image/Guest.png";
import foodImage from "../assets/image/signature.png";
import activitiesImage from "../assets/image/top5outdoor.jpg";

function Blog() {
  const blogPosts = [
    {
      title: "Top Travel Destinations for 2025",
      description: "Discover the most beautiful destinations this year with exclusive tips for an unforgettable experience.",
      image: travelImage,
      details: "In 2025, must-visit destinations include: the dazzling lights of Paris, the white sands of the Maldives, and Japan for a unique cultural experience.",
    },
    {
      title: "Unmissable Hotel Deals",
      description: "Explore the best offers at our luxury hotel for the perfect holiday.",
      image: hotelImage,
      details: "Our hotel offers discounts of up to 30% on early bookings, with complimentary breakfast and free access to spa and pool facilities.",
    },
    {
      title: "Local Traveler's Guide",
      description: "Discover hidden spots and local restaurants for an authentic experience.",
      image: localGuideImage,
      details: "Our local guide will take you to places you won’t find in any tourist guidebook, including authentic coffee shops and traditional markets.",
    },
    {
      title: "Relax and Recharge at Our Spa",
      description: "Pamper yourself with exclusive spa sessions and treatments at our wellness center.",
      image: spaImage,
      details: "Our spa offers massages, steam baths, and beauty treatments using organic products to refresh your body and soul.",
    },
    {
      title: "Travel Tips for First-Time Visitors",
      description: "Essential advice to make your trip smooth and enjoyable.",
      image: tipsImage,
      details: "Always keep a copy of your documents, learn a few local phrases, and avoid tourist traps for a better experience.",
    },
    {
      title: "Upcoming Events Near the Hotel",
      description: "Don’t miss cultural events, concerts, and exhibitions happening soon.",
      image: eventsImage,
      details: "Enjoy weekly live music nights, food festivals, and city-wide parades just minutes away from our hotel.",
    },
    {
      title: "How to Book Like a Pro",
      description: "Learn how to get the best rooms at the best prices with smart booking strategies.",
      image: bookingImage,
      details: "Book directly from the hotel website for better rates, use loyalty programs, and avoid booking during peak seasons.",
    },
    {
      title: "COVID-19 Safety Measures",
      description: "Learn about how we keep our guests safe and comfortable during their stay.",
      image: covidImage,
      details: "We ensure daily sanitization, contactless check-in, and provide free masks and sanitizers to all our guests.",
    },
    {
      title: "Guest Feedback Highlights",
      description: "Read what our visitors loved most about their stay.",
      image: feedbackImage,
      details: "Guests appreciated the friendly staff, quick service, clean rooms, and the scenic view from the rooftop.",
    },
    {
      title: "Our Restaurant’s Signature Dishes",
      description: "Explore our top culinary experiences and local flavors.",
      image: foodImage,
      details: "From traditional couscous to seafood platters and French-inspired desserts, every dish is a taste journey.",
    },
    {
      title: "Top Outdoor Activities",
      description: "Make your trip exciting with guided adventures and local experiences.",
      image: activitiesImage,
      details: "We offer hiking trips, city tours, kayaking, and even camel rides in the desert!",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClickOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
  };

  return (
    <>
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
          mb: 6,
          
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

      <Box id="about-us" sx={{ backgroundColor: "white", py: 8}}>
        <Container maxWidth="xl" >
          <Typography
            variant="h2"
            sx={{
              mt: 3,
              fontWeight: "bold",
              color: "rgba(248, 156, 86, 0.7)",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
              mb: 0,
              ml:12,
            }}
          >
            BLOG & NEWS
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ paddingY: 5, ml:12 }}>
       
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ width: "100%", margin: "auto", height: "100%", display: "flex", flexDirection: "column", boxShadow: 5, borderRadius: 3 }}>
                <CardMedia component="img" height="200" image={post.image} alt={post.title} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
                    {post.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ margin: "auto", backgroundColor: "rgba(143, 75, 3, 0.5)", color: "white" }}
                    onClick={() => handleClickOpen(post)}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Dialog for more details */}
        {selectedPost && (
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>{selectedPost.title}</DialogTitle>
            <DialogContent>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
              />
              <DialogContentText sx={{ textAlign: "justify", fontSize: "1.1rem" }}>
                {selectedPost.details}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: "#ffc107", color: "#000", margin: "auto", marginBottom: 2 }}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>




          <Box sx={{ backgroundColor: "#f5f5f5", padding: "40px 0", borderTop: "1px solid #ddd", width:"110%" }}>
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
          
              <Box sx={{ backgroundColor: "rgba(182, 139, 94, 0.9)", color: "#fff", textAlign: "center", p: 3, width:"110%" }}>
                <Typography variant="body2">© 2025 Hotel S&Ch. All rights reserved.</Typography>
              </Box>
      
    </>
  );
}

export default Blog;
