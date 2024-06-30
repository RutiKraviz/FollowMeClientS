import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: theme.spacing(2),
//   },
// }));

const UpdateStation = ({ station, onUpdate }) => {
//   const classes = useStyles();
  const [fullAddress, setFullAddress] = useState(station.fullAddress);

  const handleAddressChange = (event) => {
    setFullAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ ...station, fullAddress });
  };

  return (
    <Paper>
     {/* className={classes.paper} */}
      <Typography variant="h5" gutterBottom>
        Update Station
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* className={classes.form} */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="fullAddress"
              label="Full Address"
              variant="outlined"
              value={fullAddress}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UpdateStation;
