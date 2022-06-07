import React, { useEffect } from "react";
import {
  Typography,
  TextField,
  Card,
  Button,
  Container,
  Grid
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import useActions from '../hooks/useActions'
import useTypedSelector from '../hooks/useTypedSelector'
import LaunchesUpcoming from '../components';

function Home() {

let navigate = useNavigate();
  const actions = useActions()
  const actionsRedux = useTypedSelector(state => state)

  const handleRecordLaunches = async () => {
    return actions.getLaunchesUpcomingApi({})
  };

  useEffect(() => {
    handleRecordLaunches()
  }, []);


  const getDataLaunches = actionsRedux.getLaunchesUpcoming;
  const isLoading = actionsRedux.isLoading;

  const handleGoToHomeClick = () => {
    navigate('/');
  };

  const renderLaunchesUpcoming = () => {
    if (getDataLaunches.length){
      return <LaunchesUpcoming data={getDataLaunches}/>;
    }else if(!isLoading){
      return(
        <div>
          <Typography >No existen resultados</Typography>
          <Button variant="contained" color="primary" onClick={handleGoToHomeClick}>Ir a inicio</Button>
        </div>
      )
    }else {
      return <div>Hola</div>
    }
  };

  return (
    <Container>
    {renderLaunchesUpcoming()}
    </Container>
  
  );
}

export default React.memo(Home);