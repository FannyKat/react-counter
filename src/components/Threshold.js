import { React, useState } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function Threshold ({ counter }) {
  const [threshold, setThreshold] = useState(10);

  const handleThreshold = (event) => {
    const newThreshold = parseInt(event.target.value, 10);
    setThreshold(isNaN(newThreshold) ? 0 : newThreshold);
  };

  return (
    <div className='threshold-slider'>
      <Box sx={{ width: 500 }}>
        <Slider
          aria-label="Threshold"
          value={threshold}
          onChange={handleThreshold}
          defaultValue={30}
          valueLabelDisplay="on"
          step={1}
          min={0}
          max={110}
        />
      </Box>
      <div className='threshold-alert'>
        {(counter + 5) > threshold && counter < threshold && <Alert severity="warning" variant="filled">Warning : Threshold uncoming !</Alert>}
        { counter >= threshold && <Alert severity="error" variant="filled">Threshold reached !</Alert>}
      </div>
    </div>
  );
}