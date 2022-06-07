import React from "react";
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import { Container, Typography, CircularProgress, Button } from '@material-ui/core';

import useTypedSelector from '../hooks/useTypedSelector'
import { DateTime } from 'luxon';
import CountdownTimer from '../components/countdownTimer/CountdownTimer';
import { Parallax } from "react-parallax";
import style from '../components/style';


function LaunchesDetails() {

  let navigate = useNavigate();
  const classes = style();
  const params = useParams();
  const actionsRedux = useTypedSelector(state => state)
  const detailsRedux:any = actionsRedux.getLaunchesUpcoming.find((element:any)=> element.flight_number === Number(params.flight_number))

  if (!detailsRedux) {
    return <CircularProgress size={50} color="primary"/>;
  }

  const handleHomeClick = () => {
    navigate(`/`);
  };

  const timeStampFormatDateLaunched = DateTime.fromISO(detailsRedux.date_utc).toMillis();

  return (
    <Parallax bgImage={require('..//UI/background.jpg')} bgImageAlt="the cat" strength={100}>
    <Container className={classes.cardContainerTimer}>
      <Typography variant="h3">{detailsRedux.name}</Typography>
      <CountdownTimer countdownTimestampMs={timeStampFormatDateLaunched}/>
      <Button color="primary" variant="contained" onClick={handleHomeClick}>Return</Button>
    </Container>
    </Parallax>
  );
}

export default React.memo(LaunchesDetails);
