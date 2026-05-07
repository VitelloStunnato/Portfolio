"use client";

import React from "react";

export default function HeroAnimation() {
  return (
    <div className="w-full h-full min-h-[400px] relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            @keyframes slideUp {
              0% { transform: translateY(60px); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            @keyframes popIn {
              0% { transform: scale(0.5); opacity: 0; }
              70% { transform: scale(1.08); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes drawLine {
              to { stroke-dashoffset: 0; }
            }
            @keyframes swoopCursor {
              0% { transform: translate(100px, 150px); opacity: 0; }
              10% { opacity: 1; }
              60% { transform: translate(0px, 0px); }
              70% { transform: translate(0px, 0px) scale(0.85); }
              80% { transform: translate(0px, 0px) scale(1); }
              100% { transform: translate(0px, 0px) scale(1); opacity: 1; }
            }
            @keyframes popSlice {
              0%, 75% { transform: translate(0, 0); }
              100% { transform: translate(8px, -8px); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }

            .anim-bar { transform-origin: bottom; animation: slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
            .bar-1 { animation-delay: 0.1s; }
            .bar-2 { animation-delay: 0.25s; }
            .bar-3 { animation-delay: 0.4s; }

            .anim-pie { transform-origin: 280px 140px; animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards; opacity: 0; }
            .pie-slice { animation: popSlice 3s infinite alternate; }

            .anim-line { stroke-dasharray: 400; stroke-dashoffset: 400; animation: drawLine 1.2s ease-in-out 1s forwards; }

            .anim-panel { transform-origin: 80px 100px; animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards; opacity: 0; }
            .panel-float { animation: float 4s ease-in-out infinite; }

            .anim-cursor { animation: swoopCursor 3s infinite alternate; opacity: 0; }
          `}
        </style>

        <defs>
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6A55" />
            <stop offset="100%" stopColor="#FF2E93" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Grid Elements */}
        <g stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1">
          <path d="M 0 100 L 400 100 M 0 200 L 400 200 M 0 300 L 400 300" />
          <path d="M 100 0 L 100 400 M 200 0 L 200 400 M 300 0 L 300 400" />
          <circle cx="100" cy="100" r="2" fill="#ffffff" stroke="none" />
          <circle cx="200" cy="100" r="2" fill="#ffffff" stroke="none" />
          <circle cx="300" cy="100" r="2" fill="#ffffff" stroke="none" />
          <circle cx="100" cy="200" r="2" fill="#ffffff" stroke="none" />
          <circle cx="200" cy="200" r="2" fill="#ffffff" stroke="none" />
        </g>

        {/* Bar Chart (Bottom Left) */}
        <g transform="translate(60, 300)">
          {/* Axis */}
          <path d="M 0 0 L 220 0" stroke="#2D3748" strokeWidth="4" strokeLinecap="round" />
          
          {/* Bars */}
          <g transform="translate(0, 0)">
            <rect x="20" y="-80" width="40" height="80" rx="8" fill="#2D3748" className="anim-bar bar-1" />
            <rect x="85" y="-140" width="40" height="140" rx="8" fill="#4A5568" className="anim-bar bar-2" />
            <rect x="150" y="-200" width="40" height="200" rx="8" fill="url(#primaryGrad)" className="anim-bar bar-3" />
          </g>
        </g>

        {/* Glowing Line Chart */}
        <path d="M 60 220 L 140 180 L 210 210 L 320 100" fill="none" stroke="#FF6A55" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="anim-line" filter="url(#glow)" />
        
        {/* Pie Chart (Top Right) */}
        <g className="anim-pie">
          <circle cx="280" cy="140" r="60" fill="#1A202C" stroke="#2D3748" strokeWidth="6" />
          <path d="M 280 140 L 280 80 A 60 60 0 0 0 220 140 Z" fill="#2D3748" />
          <path d="M 280 140 L 220 140 A 60 60 0 0 0 280 200 Z" fill="#4A5568" />
          
          {/* Slice that pops out (Top Right Quadrant) */}
          <g className="pie-slice">
            <path d="M 280 140 L 280 80 A 60 60 0 0 1 340 140 Z" fill="url(#primaryGrad)" />
            {/* Overlay glow on slice */}
            <path d="M 280 140 L 280 80 A 60 60 0 0 1 340 140 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.5" />
          </g>
        </g>

        {/* Floating Panel (Top Left) */}
        <g className="anim-panel">
          <g className="panel-float">
            <rect x="40" y="60" width="130" height="90" rx="12" fill="#1A202C" stroke="#2D3748" strokeWidth="4" />
            <circle cx="65" cy="85" r="8" fill="url(#primaryGrad)" />
            <rect x="85" y="80" width="65" height="10" rx="5" fill="#4A5568" />
            <rect x="60" y="110" width="90" height="10" rx="5" fill="#2D3748" />
            <rect x="60" y="125" width="50" height="10" rx="5" fill="#2D3748" />
          </g>
        </g>

        {/* Cursor */}
        <g transform="translate(310, 110)" className="anim-cursor">
          <g filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.4))">
            <path d="M 0 0 L 12 35 L 18 20 L 35 12 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />
          </g>
        </g>

      </svg>
    </div>
  );
}
