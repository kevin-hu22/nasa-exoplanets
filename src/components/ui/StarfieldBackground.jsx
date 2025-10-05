import React, { useRef, useEffect } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // --- Lógica de animación adaptada de tu JS original ---
    
    // Configuración del campo de estrellas
    const numStars = 5000;
    let focalLength;
    let centerX, centerY;
    const stars = [];
    
    // Velocidad constante para un movimiento continuo
    const warpSpeed = 0.05; // Ajusta este valor para más o menos velocidad
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      focalLength = canvas.width * 2;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      // La solución: reinicializa las estrellas con las nuevas dimensiones.
      initializeStars();
    };

    // Inicializa las estrellas
    const initializeStars = () => {
      stars.length = 0; // Limpia el array
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }
    };

    // Mueve las estrellas
    const moveStars = () => {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const speed = 1 + warpSpeed * 20; // Se ajusta la velocidad
        star.z -= speed;

        if (star.z < 1) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      }
    };

    // Dibuja las estrellas
    const drawStars = () => {
      ctx.fillStyle = "rgba(0, 2, 10, 1)"; // Color de fondo ajustado a un azul muy oscuro, casi negro.
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        const px = (star.x - centerX) * (focalLength / star.z) + centerX;
        const py = (star.y - centerY) * (focalLength / star.z) + centerY;
        const size = (1 - star.z / canvas.width) * 3;
        
        // Comprobación de seguridad para evitar radios negativos.
        if (size < 0) continue;

        // Dibuja un círculo en lugar de un rectángulo para un look más suave
        ctx.beginPath();
        ctx.arc(px, py, size / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / canvas.width})`; // Color de estrellas ajustado a blanco brillante.
        ctx.fill();
      }
    };

    // Bucle de animación
    const animate = () => {
      moveStars();
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    // --- Inicialización y limpieza ---
    resizeCanvas();
    // La llamada a initializeStars() aquí ya no es necesaria, porque resizeCanvas() la ejecuta.
    animate();

    window.addEventListener('resize', resizeCanvas);

    // Función de limpieza para cuando el componente se desmonte
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Se asegura que esté detrás de todo
        pointerEvents: 'none', // No interfiere con los clics
      }}
    />
  );
};

export default StarfieldBackground;


