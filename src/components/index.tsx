import React from 'react';
import { Card, Typography, Grid, Button } from '@material-ui/core';
import { Container } from '@mui/material';
import _ from 'lodash';
import { Parallax, Background } from 'react-parallax';

import style from './style';
import StickyHeadTable from './tablePaginator/TablePaginator';

const LaunchesUpcoming = ({data}: any) => {
  const classes = style();

  return(

    <Parallax bgImage={require('../UI/background.jpg')} bgImageAlt="the cat" strength={300}>
        <Container  className={classes.poster} sx={{ width: "90%", overflow: "hidden"}}>
            <Card className={classes.cardContainer}>
        <Typography align='center' variant='h4'>Upcoming - Next Launches</Typography>
            <StickyHeadTable rows = { data } />
        </Card>
        <div style={{ height: '400px', width: '300%' }} />
        </Container>
      </Parallax>

  );
}

export default LaunchesUpcoming;
