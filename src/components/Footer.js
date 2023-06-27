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
import img from "../assets/logo/logo1_without_bg.png";

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
            <Grid item xs={1} md={3} className="footerLogo">
              <Link href="/">
                <img src={img} alt="" />
              </Link>
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
                      Address/Link To Reach Major's Camp
                    </Typography>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="https://www.google.com/maps/place/13%C2%B028'13.7%22N+77%C2%B028'09.4%22E/@13.4704832,77.4670845,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.4704832!4d77.4692732?entry=ttu"
                    >
                      <Typography variant="body2" color="textSecondary">
                        Major's Camp, Imam Ali Road, Alipur Village, Tondebhavi,
                        Hobli,Gauribednur Taluka, Alipura, Karnataka - 561213
                      </Typography>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="https://majorscamp.com"
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ marginTop: "10px" }}
                      >
                        www.majorscamp.com
                      </Typography>
                    </Link>
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
                      Email
                    </Typography>
                    <Link
                      href="mailto:Info@majorscamp.com"
                      variant="body2"
                      color="textSecondary"
                      style={{ textDecoration: "none" }}
                    >
                      Info@majorscamp.com
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
                    Social Media
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
                    Phone
                  </Typography>
                  <Link
                    href="tel:9599962165"
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "none" }}
                  >
                    +91 9599962165
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
