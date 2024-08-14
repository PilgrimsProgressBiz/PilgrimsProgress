import React, { useState } from 'react';
import { Box } from '@mui/material';

const Popup = ({ onClose }) => {
  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          maxWidth: '600px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          width="100%"
          height="400"
          src="https://9e056495.sibforms.com/serve/MUIFAEQRDDU7SgF3IkppCGlbScFnMx4nkYUXl0aH1VSp-NO77lV8Ehc3qf0vBSnGtUSnZ-L_02RyGod0czt__05cABGN1TN85Mrat21-Y9lNJ5vkIY2q-S6sarHL-nWicvGRUOA5peACVDTrMTzS6MlHXAPrLWBA0nLgC0tcxIStS8dcXith0UnlzTuZDY5i5kZ42k1q9hWDqXYg"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{ display: 'block', margin: 'auto' }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default Popup;