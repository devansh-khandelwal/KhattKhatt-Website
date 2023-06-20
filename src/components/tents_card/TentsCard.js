import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

export default function TentsCard({ img, title, content }) {
  return (
    <Card
      sx={{ maxWidth: "25%", height: "auto" }}
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        background: "rgba(164,170,136,0.2)",
        display: "flex",
        flexDirection: "column", // Display children in a column
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
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          // Hover state
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#1565c0";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#1976d2";
          }}
          // Active state
          onMouseDown={(e) => {
            e.target.style.backgroundColor = "#0d47a1";
          }}
          onMouseUp={(e) => {
            e.target.style.backgroundColor = "#1565c0";
          }}
        >
          Book Now
        </button>
      </CardActions>
    </Card>
  );
}
