import { Box } from '@mui/material'

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
      <img src='../src/assets/p&btoplop.png' />
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
    </Box >
  )
}

export default Detail