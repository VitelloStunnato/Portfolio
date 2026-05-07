// components/AnimatedBackground.tsx
// Sfondo animato globale con griglia tech e globi luminosi fluttuanti.

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Griglia a puntini (Dot Grid) in stile Tech/BI, svanisce dolcemente */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>

      {/* Sfere sfocate animate (Aura / Mesh Gradient) */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <style>
        {`
          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.5;
            animation: float 25s infinite ease-in-out alternate;
            /* Forza l'accelerazione hardware per animazioni fluide e a zero impatto sulla CPU */
            transform: translateZ(0);
            will-change: transform;
          }
          
          /* Orb Rosa/Magenta (Primary color del brand) */
          .orb-1 {
            top: -10%;
            left: -10%;
            width: 45vw;
            height: 45vw;
            background: rgba(255, 46, 147, 0.25); 
            animation-delay: 0s;
          }

          /* Orb Viola intenso */
          .orb-2 {
            top: 30%;
            right: -15%;
            width: 50vw;
            height: 50vw;
            background: rgba(138, 43, 226, 0.15); 
            animation-delay: -7s;
          }

          /* Orb Blu Elettrico */
          .orb-3 {
            bottom: -20%;
            left: 15%;
            width: 55vw;
            height: 55vw;
            background: rgba(59, 130, 246, 0.15);
            animation-delay: -14s;
          }

          /* Animazione complessa di spostamento e ridimensionamento (Lava Lamp effect) */
          @keyframes float {
            0% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            33% {
              transform: translate(8%, 12%) scale(1.1) rotate(5deg);
            }
            66% {
              transform: translate(-5%, 8%) scale(0.9) rotate(-5deg);
            }
            100% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  );
}
