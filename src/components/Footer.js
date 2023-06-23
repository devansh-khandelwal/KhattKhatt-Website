import React from "react";
import Card from "@mui/material/Card";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Avatar from "@material-ui/core/Avatar";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import WebAssetIcon from "@material-ui/icons/WebAsset";

import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: "#023020",
  },
  midColumn: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#01140e",
    },
    secondary: {
      main: "rgb(25,25,25",
    },
  },
});

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    header: "Lorem ipsum dolor sit amet",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
    contact1: "Address",
    "contact1-desc1": "234, 2nd Cross, Kundahalli,",
    "contact1-desc2": "ITPL main Road, Bangalore 560037",
    contact2: "Email",
    "contact2-desc1": "customercare@majorscamp.com",
    "contact2-desc2": "Booking@majorscamp.com",
    "contact2-desc3": "Help@majorscamp.com",
    contact3: "Social Media",
    contact4: "Phone",
    "contact4-desc": "+91 9155607067",
    ...props.content,
  };

  return (
    <Card
      style={{
        background: "rgb(80,96,44,0.8)",
        paddingLeft: "100px",
      }}
      className="footerCard"
    >
      <Container maxWidth="lg" className="container">
        <Box py={5}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom={true}
                style={{ fontWeight: "bold", color: "#023020" }}
              >
                {content["header"]}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {content["description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.midColumn}>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon fontSize="small" sx={{ color: "#023020" }} />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography
                      variant="h6"
                      gutterBottom={true}
                      style={{ fontWeight: "bold", color: "#023020" }}
                    >
                      {content["contact1"]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {content["contact1-desc1"]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {content["contact1-desc2"]}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon fontSize="small" sx={{ color: "#023020" }} />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography
                      variant="h6"
                      gutterBottom={true}
                      style={{ fontWeight: "bold", color: "#023020" }}
                    >
                      {content["contact2"]}
                    </Typography>
                    <Link
                      href="mailto:customercare@majorscamp.com"
                      variant="body2"
                      color="textSecondary"
                      style={{ textDecoration: "none" }}
                    >
                      {content["contact2-desc1"]}
                    </Link>
                    <br />
                    <Link
                      href="mailto:Booking@majorscamp.com"
                      variant="body2"
                      color="textSecondary"
                      style={{ textDecoration: "none" }}
                    >
                      {content["contact2-desc2"]}
                    </Link>
                    <br />
                    <Link
                      href="mailto:Help@majorscamp.com"
                      variant="body2"
                      color="textSecondary"
                      style={{ textDecoration: "none" }}
                    >
                      {content["contact2-desc3"]}
                    </Link>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" mb={3} className="socialMediaBox">
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <WebAssetIcon fontSize="small" sx={{ color: "#023020" }} />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography
                    variant="h6"
                    gutterBottom={true}
                    style={{ fontWeight: "bold", color: "#023020" }}
                  >
                    {content["contact3"]}
                  </Typography>
                  <ThemeProvider theme={theme}>
                    <IconButton href="#" color="primary">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton href="#" color="primary">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton href="#" color="primary">
                      <LinkedInIcon />
                    </IconButton>
                  </ThemeProvider>
                </Box>
              </Box>
              <Box display="flex" style={{ marginTop: "-20px" }}>
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <PhoneIcon fontSize="small" sx={{ color: "#023020" }} />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography
                    variant="h6"
                    gutterBottom={true}
                    style={{ fontWeight: "bold", color: "#023020" }}
                  >
                    {content["contact4"]}
                  </Typography>
                  <Link
                    href="tel:6362147935"
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "none" }}
                  >
                    {content["contact4-desc"]}
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Typography
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "-10px",
              color: "#023020",
              fontSize: "1.1rem",
            }}
            className="lastLine"
          >
            Powered by – KhattKhatt Hospitality India Pvt. Ltd
          </Typography>
        </Box>
      </Container>
    </Card>
  );
}
