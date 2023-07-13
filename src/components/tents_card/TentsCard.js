import React, { useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

import "./TentsCard.css";

export default function TentsCard({ img, title, content, Link, Attribute }) {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = Link;
    script.setAttribute("data-payment_button_id", Attribute);
    script.async = true;

    const formElement = formRef.current;
    if (formElement) {
      formElement.appendChild(script);
    }

    return () => {
      if (formElement) {
        formElement.removeChild(script);
      }
    };
  }, [Link, Attribute]);

  return (
    <Card
      sx={{
        maxWidth: "25%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        background: "rgba(164,170,136,0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="tentsCard"
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
        <form ref={formRef}>
          <div id="razorpay-button-container"></div>
        </form>
      </CardActions>
    </Card>
  );
}
