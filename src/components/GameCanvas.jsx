import React, { useEffect, useRef } from 'react';
import Header from "./Header.jsx";

function GameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const render = () => {  // Game rendering loop
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas

      ctx.beginPath();
      ctx.rect(20, 40, 50, 50);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
      
      ctx.beginPath();
      ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(160, 10, 100, 40);
      ctx.strokeStyle = "rgb(0 0 255 / 50%)";
      ctx.stroke();
      ctx.closePath();

      requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(render);  // Cleanup
  }, []);

  return (
    <>
      <Header title="Game Canvas">HTML Canvas experiment</Header>
      <canvas ref={canvasRef} width={800} height={600} />
    </>
  )
}

export default GameCanvas;
