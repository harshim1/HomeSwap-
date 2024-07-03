import React from 'react';
 // Import makeStyles from @mui/material/styles
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import useStyles from './styles';


const LandingPage = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {/* First Column */}
          <Grid item xs={12} md={6} className={classes.imageContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8485f7d0d9b712fbe49ae100fbc082391b9b953e5779041d98e7093735f967f0?apiKey=fa2096a9fc3d4d7b919ba4b3e003fe5f&width=400"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74b4274f1c557fb498b04ae830b6be550112779bbc5c7cc63b51f4f7897868a0?apiKey=fa2096a9fc3d4d7b919ba4b3e003fe5f&"
              alt=""
            />
            {/* Add more images as needed */}
          </Grid>
  
          {/* Second Column */}
          <Grid item xs={12} md={6} className={classes.paperContainer}>
            <Paper elevation={3} className={classes.paperInnerContainer}>
              <div>
                <Typography variant="h6" className={classes.typography}>Home</Typography>
                <Typography variant="h6" className={classes.typography}>Explore City</Typography>
                <Typography variant="h6" className={classes.typography}>All Hotels</Typography>
                <Typography variant="h6" className={classes.typography}>About Us</Typography>
                <Typography variant="h6" className={classes.typography}>Contact Us</Typography>
                <Typography variant="h6" className={classes.typography}>FAQs</Typography>
              </div>
              <div>
                <Button variant="outlined" className={classes.button}>SIGN IN</Button>
                <Button variant="contained" color="primary" className={classes.button}>SIGN UP</Button>
              </div>
            </Paper>
  
            {/* Additional Paper Section */}
            <Paper elevation={3} className={classes.paperInnerContainer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25f325921ff098b6f21dbde223425be356f883a5d48e6196ee34707f687d95eb?apiKey=fa2096a9fc3d4d7b919ba4b3e003fe5f&width=800"
                alt=""
              />
              <div>
                <Typography variant="h6" className={classes.typography}>TIME FOR <span style={{ color: 'rgba(33, 13, 13, 1)' }}>ADVENTURES</span> & EXPERIENCES</Typography>
                <div>
                  <div>
                    <Typography variant="body1">Caves</Typography>
                    <Typography variant="body1">Farms</Typography>
                    <Typography variant="body1">Pools</Typography>
                    <Typography variant="body1">Villas</Typography>
                    <Typography variant="body1">Beach Front</Typography>
                    <Typography variant="body1">Lake House</Typography>
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ed8413f1f4bebfc97e30eda5170f4c903616133128471956374b3c33b3d8a6e?apiKey=fa2096a9fc3d4d7b919ba4b3e003fe5f&"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d590c13ee1e6d7592f8826bd18574690931f956b0fcf0d9be39cde501fed732?apiKey=fa2096a9fc3d4d7b919ba4b3e003fe5f&"
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <Typography variant="body1">Location</Typography>
                      <Typography variant="body1">45 Street, New York</Typography>
                    </div>
                    <div>
                      <Typography variant="body1">Check In</Typography>
                      <Typography variant="body1">14 June 2024</Typography>
                    </div>
                    <div>
                      <Typography variant="body1">Check Out</Typography>
                      <Typography variant="body1">20 June 2024</Typography>
                    </div>
                    <Button variant="contained" color="primary" className={classes.button}>SEARCH</Button>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default LandingPage;