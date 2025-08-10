import { Grid } from '@mui/material';
import Title from './Title';
import Detail from './Detail';

function App() {
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
      <Detail />
      <Title />
    </Grid>
  );
}

export default App;