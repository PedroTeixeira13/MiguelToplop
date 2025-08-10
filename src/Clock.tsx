import { Grid, Typography } from '@mui/material'
import type { Duration } from 'date-fns'
import ClockPart from './ClockPart'

interface IClockProps {
  timeLeft: Duration
}

const Clock = ({ timeLeft }: IClockProps) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      gap={1}>
      <ClockPart title='meses' value={timeLeft.months} />
      <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: 70, color: '#b0b0b0' }}>:</Typography>
      <ClockPart title='dias' value={timeLeft.days} />
      <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: 70, color: '#b0b0b0' }}>:</Typography>
      <ClockPart title='horas' value={timeLeft.hours} />
      <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: 70, color: '#b0b0b0' }}>:</Typography>
      <ClockPart title='minutos' value={timeLeft.minutes} />
      <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: 70, color: '#b0b0b0' }}>:</Typography>
      <ClockPart title='segundos' value={timeLeft.seconds} />
    </Grid>
  )
}

export default Clock