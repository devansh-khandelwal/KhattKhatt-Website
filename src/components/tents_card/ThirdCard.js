import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{ maxWidth: "25%", height: "100vh" }}
      style={{ marginRight: "15px", marginLeft: "15px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://r1imghtlak.mmtcdn.com/183c8346535511ecadf70a58a9feac02.png?&output-quality=75&downsize=910:612&crop=910:612;0,49&output-format=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            Twin Sharing Tent
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <li>Attached Restroom</li>
            <li>Capacity - 2 Adult 1 Kid (Below 10 years)</li>
            <li>Rate of 1 Hut =</li>
            <li>Twin Size Mattress</li>
            <li>
              Meals Included: (Tea &Snacks, Barbeque, Dinner, Morning Tea &
              Breakfast)
            </li>
            <li>Hot Water Availability</li>
            <li>Parking</li>
            <li>Bring your own toiletries</li>
            <br />
            <br />
            <br />
            <br />
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
