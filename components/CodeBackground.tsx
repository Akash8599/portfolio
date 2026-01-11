import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  text: string;
  velocity: number;
  color: string;
  size: number;
  driftOffset: number;
}

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Code snippets related to the resume
  const snippets = [
    "class Microservice", "extends Service", "implements Serializable", 
    "@Override", "public static void", "return new ResponseEntity<>",
    "List<String>", "Map<String, Object>", "Optional.ofNullable()",
    "Stream.of()", ".filter()", ".map()", ".collect()",
    "SpringApplication.run()", "@Autowired", "@GetMapping",
    "docker run", "kubectl apply", "git commit", "mvn clean install",
    "KafkaTemplate", "RedisCache", "Azure.Function",
    "{ }", "< />", "->", "::", "// TODO", "/* FIX */",
    "404 NOT FOUND", "200 OK", "500 ERROR", "System.out.println",
    "npm install", "yarn build", "pip install",
    "010101", "0xB5", "void*", "nullptr", "0x1A", "&&", "||", "=>"
  ];

  const colors = [
    "#00f3ff", // Neon Cyan
    "#bc13fe", // Neon Purple
    "#4d4dff", // Neon Blue
    "#ff00ff", // Magenta
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;

    // Configuration
    const particleCount = 75; 
    const fov = 400; // Field of view
    const viewDistance = 1200; 

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createParticle = (resetY?: number): Particle => {
      const z = Math.random() * viewDistance;
      const scale = fov / (fov + z);
      const xRange = width / scale;
      const x = (Math.random() - 0.5) * xRange;
      const visibleHeight = height / scale;
      const y = resetY !== undefined ? resetY : (Math.random() - 0.5) * visibleHeight;

      return {
        x,
        y,
        z,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        velocity: (0.2 + Math.random() * 0.5), // Varied speed
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 16 + Math.random() * 14,
        driftOffset: Math.random() * Math.PI * 2
      };
    };

    const init = () => {
      resize();
      particles = Array.from({ length: particleCount }, () => createParticle());
    };

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Sort particles by Z so far ones draw first
      particles.sort((a, b) => b.z - a.z);

      particles.forEach((p, index) => {
        // Move particle down
        p.y += p.velocity;
        
        // Add subtle sine wave drift
        const drift = Math.sin(time + p.driftOffset) * 0.5;
        p.x += drift;

        // 3D Projection
        const scale = fov / (fov + p.z);
        const x2d = (p.x * scale) + (width / 2);
        const y2d = (p.y * scale) + (height / 2);

        // Calculate opacity based on depth
        let alpha = 1 - (p.z / viewDistance);
        if (alpha < 0) alpha = 0;
        
        // Depth of field blur
        const blurAmount = (p.z / viewDistance) * 4;
        ctx.filter = `blur(${blurAmount}px)`;

        // Draw
        ctx.font = `bold ${p.size * scale}px "Space Grotesk", monospace`;
        ctx.fillStyle = p.color;
        
        // Apply alpha
        ctx.globalAlpha = alpha * 0.8; 
        ctx.fillText(p.text, x2d, y2d);
        ctx.filter = 'none'; // Reset filter

        // Reset if particle goes below screen
        if (y2d > height + 100) {
          const newZ = Math.random() * viewDistance;
          const newScale = fov / (fov + newZ);
          const startY = -(height / 2 + 100) / newScale; 
          
          particles[index] = {
            ...p,
            z: newZ,
            x: (Math.random() - 0.5) * (width / newScale),
            y: startY,
            text: snippets[Math.floor(Math.random() * snippets.length)],
            driftOffset: Math.random() * Math.PI * 2
          };
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default CodeBackground;