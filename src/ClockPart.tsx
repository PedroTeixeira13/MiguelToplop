import { Box, Typography } from '@mui/material'

interface IClockPartProps {
  value: number | undefined
  title: string
}

const ClockPart = ({ value, title }: IClockPartProps) => {
  const fixedValue = value ? value : 0
  const formattedValue = String(fixedValue).padStart(2, '0')

  return (
    <Box
      sx={{
        width: 150,
        height: 170,
        backgroundColor: '#b0b0b0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px'
      }}>
      <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: 70 }}>{formattedValue}</Typography>
      <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: 20 }}>{title}</Typography>
    </Box>
  )
}

export default ClockPart