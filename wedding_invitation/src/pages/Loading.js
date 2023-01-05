import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import LoadingPic from '../images/loading.png';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LoadingStyle } from './Loading.style.js';

function LinearProgressWithLabel(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.src = LoadingPic;
    image.onload = () => setIsLoaded(true);
    image.onerror = () => setIsLoaded(true);
  }, [LoadingPic]);

  if (!isLoaded) {
    return <></>;
  }

  return (
    <LoadingStyle>
      <Box
        className="LoadingBox"
        sx={{
          background: `url(${LoadingPic}) no-repeat bottom/cover;`,
        }}
      >
        <div className="title1">
          <b>김동진과 박찬민의</b>
        </div>
        <div className="title2">백년가약</div>
        <Box
          sx={{
            position: 'absolute',
            bottom: '1em',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '90vw', mr: 1 }}>
            <LinearProgress variant="determinate" {...props} color="inherit" />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              props.value
            )}%`}</Typography>
          </Box>
        </Box>
      </Box>
    </LoadingStyle>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function Loading() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </>
  );
}
