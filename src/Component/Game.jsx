import React, { useRef, useEffect, useState } from 'react';

const Game = () => {
  const canvasRef = useRef(null);
  const [ball, setBall] = useState({ x: 250, y: 200, dx: 5, dy: 5, radius: 10 });
  const [paddle, setPaddle] = useState({ x: 200, y: 350, width: 80, height: 10, speed: 8 });
  const [canvasWidth, setCanvasWidth] = useState(500);  // Smaller width
  const [canvasHeight, setCanvasHeight] = useState(400); // Smaller height

  // Key state tracking
  const [keys, setKeys] = useState({ left: false, right: false });

  // Handle key press
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setKeys((prev) => ({ ...prev, left: true }));
    if (e.key === 'ArrowRight') setKeys((prev) => ({ ...prev, right: true }));
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft') setKeys((prev) => ({ ...prev, left: false }));
    if (e.key === 'ArrowRight') setKeys((prev) => ({ ...prev, right: false }));
  };

  // Update game state
  const updateGame = () => {
    const newBall = { ...ball };
    const newPaddle = { ...paddle };

    // Move paddle
    if (keys.left && newPaddle.x > 0) newPaddle.x -= newPaddle.speed;
    if (keys.right && newPaddle.x < canvasWidth - newPaddle.width) newPaddle.x += newPaddle.speed;

    // Move ball
    newBall.x += newBall.dx;
    newBall.y += newBall.dy;

    // Ball-wall collision
    if (newBall.x - newBall.radius < 0 || newBall.x + newBall.radius > canvasWidth) {
      newBall.dx *= -1;
    }
    if (newBall.y - newBall.radius < 0) {
      newBall.dy *= -1;
    }

    // Ball-paddle collision
    if (
      newBall.y + newBall.radius > newPaddle.y &&
      newBall.x > newPaddle.x &&
      newBall.x < newPaddle.x + newPaddle.width
    ) {
      newBall.dy *= -1;
    }

    // Keep ball inside the screen (no game over)
    if (newBall.y + newBall.radius > canvasHeight) {
      newBall.y = canvasHeight - newBall.radius;  // Ball stays within the bottom of the canvas
    }

    setBall(newBall);
    setPaddle(newPaddle);
  };

  // Draw game elements
  const drawGame = (ctx) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas

    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    // Draw paddle
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Game loop
    const gameLoop = () => {
      updateGame();
      drawGame(ctx);
    };

    const interval = setInterval(gameLoop, 1000 / 60); // 60 FPS

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [ball, paddle, keys, canvasWidth, canvasHeight]); // Re-run when ball, paddle, or keys change

  useEffect(() => {
    // Event listeners for key presses
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: '2px solid black', backgroundColor: '#f0f0f0' }}
      ></canvas>
    </div>
  );
};

export default Game;
