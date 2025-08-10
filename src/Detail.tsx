import { Box, Typography } from '@mui/material'
import pbtoplop from './assets/p_btoplop.svg'

const Detail = () => {
  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
      backgroundColor: '#b0b0b0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img style={{ height: '400px'}} src={pbtoplop} />
      <Box>
        <Box
          sx={{
            '--t': '45%',
            '--h': '40%',
            aspectRatio: '3/2',
            width: '250px',
            background: '#001F3F',
            clipPath: 'polygon(100% calc(50% - var(--t)/2),var(--h) calc(50% - var(--t)/2),var(--h) 0,0 50%,var(--h) 100%,var(--h) calc(50% + var(--t)/2),100% calc(50% + var(--t)/2))',
          }}
        />
        <Typography py={2} fontSize={25} sx={{ color: '#001F3F'}}>CLIQUE AQUI</Typography>
      </Box>
    </Box >
  )
}

export default Detail