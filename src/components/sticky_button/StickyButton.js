import React from "react";
import "./StcikyButton.css";
import { CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StickyButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/tents");
  };

  return (
    <div className="stickyButton">
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="large"
          color="primary"
          style={{ margin: "0 auto", display: "flex" }}
          variant="contained"
          onClick={onClick}
        >
          Book Now
        </Button>
      </CardActions>
    </div>
  );
};

export default StickyButton;
