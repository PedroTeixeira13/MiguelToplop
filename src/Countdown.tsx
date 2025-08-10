import { Box, Grid, Typography } from '@mui/material'
import { intervalToDuration, type Duration } from 'date-fns'
import { useEffect, useState } from 'react'
import Clock from './Clock'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<Duration | null>(null)
  const [isCountingDown, setIsCountingDown] = useState(true)

  const targetDate = new Date('2025-10-24T00:00:00-03:00')

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const duration = intervalToDuration({ start: now, end: targetDate })

      if (now.getTime() >= targetDate.getTime()) {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsCountingDown(false)
      } else {
        setTimeLeft(duration)
      }
    }

    updateCountdown()
    const intervalId = setInterval(updateCountdown, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  if (!timeLeft || (timeLeft.months === 0 && timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && !isCountingDown)) {
    return (
      <Typography variant='h2' color='white'>
        JÁ PODE TROCAR O NICK :(((
      </Typography>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Grid size={{ xs: 12 }}>
        <img style={{ height: '200px'}} src='../src/assets/toploplev.png' />
        <img style={{ height: '200px'}} src='../src/assets/dating.png' />
        <img style={{ height: '200px'}} src='../src/assets/pirulito.png' />
      </Grid>
      <Clock timeLeft={timeLeft} />
    </Box>
  )
}

export default Countdown