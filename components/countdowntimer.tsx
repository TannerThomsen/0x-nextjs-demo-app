import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const endTime = new Date('2023-08-24T00:00:00'); // Setting the end time to 00:00 on 8/24/2023
    return Math.floor((endTime.getTime() - now.getTime()) / 1000); // Difference in seconds
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      {formatTime(timeRemaining)}
    </div>
  );
};

export default CountdownTimer;