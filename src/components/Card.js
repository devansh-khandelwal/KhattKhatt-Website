import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ img, title, text }) {
  return (
    <Card
      sx={{}}
      style={{
        margin: "15px",
        background: "rgba(164,170,136,0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardActionArea
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={img}
          sx={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
