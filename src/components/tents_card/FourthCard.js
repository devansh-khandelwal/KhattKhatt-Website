import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{ maxWidth: "25%" }}
      style={{ marginRight: "15px", marginLeft: "15px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.trendhunterstatic.com/thumbs/swag-tent.jpeg?auto=webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            Single's Tent
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <li>Common Restroom</li>
            <li>Capacity – 1 Adult</li>
            <li>Rate of 1 Tent =</li>
            <li>Sleeping Bag</li>
            <li>
              Meals Included: (Tea& Snacks, Barbeque, Dinner , Morning Tea &
              Breakfast)
            </li>
            <li>Hot Water Availability</li>
            <li>Parking</li>
            <li>Bring your own toiletries</li>
            <li>Separate Seating Area</li>
            <li>Individual Restroom</li>
            <li>Hot Water Availability</li>
            <li>Parking</li>
            <li>Bring your own toiletries</li>
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          color="primary"
          style={{ margin: "0 auto", display: "flex" }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
