import React from 'react';
import Leaderboard from '../components/leaderboard';
import CountdownTimer from '../components/countdowntimer'; // Adjust path if necessary

const LeaderboardPage: React.FC = () => {
  return (
    <div 
        style={{
            position: 'relative',
            color: "#ffffff", 
            background: "#0e0e0e", 
            fontFamily: "'Rubik', sans-serif",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            minHeight: "100vh"
        }}
    >
      <Leaderboard />

      {/* Countdown Timer */}
      <div 
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            fontWeight: 'bold',  // Make the text bold
            fontSize: '2em',     // Increase the text size
            width: '100%',       // Take up the full width of its parent
            textAlign: 'center'  // Ensure text is centered
        }}
      >
        <CountdownTimer />
      </div>
      
      {/* Overlay */}
      <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(14, 14, 14, 0.8), transparent 70%)',
            backdropFilter: 'blur(2px)',
            pointerEvents: 'none'
        }}
      ></div>
    </div>
  );
};

export default LeaderboardPage;
