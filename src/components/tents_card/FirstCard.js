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
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201507/tree-house-story_647_071315064353.jpg?VersionId=bvq.uOokchcak3MXKMW.Czy5CfwGkKe1"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            Tree Hut
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <li>Capacity - 2 Adult 1 Kid (Below 10 years)</li>
            <li>Rate of 1 Hut = 6500</li>
            <li>Twin Size Mattress</li>
            <li>
              Meals Included: (Tea & Snacks, Barbeque, Dinner, Morning Tea &
              Breakfast)
            </li>
            <li>Splash Pool</li>
            <li>Personal Barbeque</li>
            <li>Resting Chairs</li>
            <li>Personal LED Projector</li>
            <li>Separate Seating Area</li>
            <li>Individual Restroom</li>
            <li>Hot Water Availability</li>
            <li>Parking</li>
            <li>Bring your own toiletries</li>
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
