import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Container, Typography } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  // React Spring animation for background color
  const backgroundAnimation = useSpring({
    backgroundColor: `rgba(0, 100, ${count * 10}, 0.6)`,
    height: `${count * 10}px`,
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Counter: {count}
      </Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <Button variant="contained" onClick={() => setCount(count - 1)}>
        Decrement
      </Button>
      <Button variant="contained" onClick={() => setCount(0)}>
        Reset
      </Button>
      <animated.div style={backgroundAnimation} className="background" />
    </Container>
  );
};

export default Counter;
