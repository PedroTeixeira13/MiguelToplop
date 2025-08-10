import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import Title from './Title';
import Detail from './Detail';
import { useState } from 'react';
import Countdown from './Countdown';

function App() {
  const [isHiddenTitle, setIsHiddenTitle] = useState(false);

  return (
    <Grid
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#001F3F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ButtonBase
        sx={{
          width: '50%',
          transition: 'transform 0.5s ease-in-out',
          transform: isHiddenTitle ? 'translateX(-100vw)' : 'translateX(0)',
          mr: 2,
        }}
        onClick={() => setIsHiddenTitle(true)}
      >
        <Detail />
      </ButtonBase>

      <Box
        sx={{
          transition: 'opacity 0.5s ease-in-out',
          opacity: isHiddenTitle ? 0 : 1,
        }}
      >
        <Title />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          transition: 'opacity 0.5s ease-in-out',
          opacity: isHiddenTitle ? 1 : 0,
        }}
      >
        <Countdown />
      </Box>
    </Grid>
  );
}

export default App;