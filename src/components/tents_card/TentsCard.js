import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function TentsCard({ img, title, content }) {
  return (
    <Card
      sx={{ maxWidth: "25%", height: "auto" }}
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        background: "rgba(164,170,136,0.2)",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} content={content} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Button
          size="small"
          color="primary"
          style={{ margin: "0 auto", display: "flex" }}
          variant="contained"
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
