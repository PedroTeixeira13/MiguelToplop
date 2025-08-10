import { Typography } from '@mui/material'
import { intervalToDuration, type Duration } from 'date-fns'
import { useEffect, useState } from 'react'

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

  const formatCountdown = (duration: Duration) => {
    const { months, days, hours, minutes, seconds } = duration

    if (months === undefined || days === undefined || hours === undefined || minutes === undefined || seconds === undefined) {
      return "Calculando..."
    }

    const formattedMonths = String(months).padStart(2, '0')
    const formattedDays = String(days).padStart(2, '0')
    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return `${formattedMonths} meses, ${formattedDays} dias, ${formattedHours} horas, ${formattedMinutes} minutos, ${formattedSeconds} segundos`;
  }

  if (!timeLeft || (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && !isCountingDown)) {
    return (
      <Typography variant='h2' color='white'>
        JÁ PODE TROCAR :(((
      </Typography>
    )
  }

  return (
    <Typography variant='h2' color='white'>
      {formatCountdown(timeLeft)}
    </Typography>
  )
}

export default Countdown