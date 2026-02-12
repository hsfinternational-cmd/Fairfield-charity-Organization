import React from 'react';

export function ElleCaresBadge({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 300 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#AA8C2C', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00897B', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#004D40', stopOpacity: 1 }} />
                </linearGradient>
            </defs>

            <g transform="translate(10, 10)">
                <path d="M40 80 C 10 70, 0 40, 0 30 C 0 10, 20 0, 40 10 C 60 0, 80 10, 80 30 C 80 40, 70 70, 40 80 Z"
                    fill="url(#tealGradient)" stroke="#2C3E50" strokeWidth="2" />

                <path d="M40 10 L 40 80" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 30 L 60 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M40 50 L 60 40" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M40 30 L 20 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M40 50 L 20 40" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

                <path d="M25 25 L 20 5 L 30 15 L 40 0 L 50 15 L 60 5 L 55 25 Z"
                    fill="url(#goldGradient)" stroke="#4B3621" strokeWidth="1.5" />
            </g>

            <g transform="translate(100, 60)">
                <text fontFamily="'Playfair Display', serif" fontWeight="bold" fontSize="38" letterSpacing="2" fill="#3E2723">
                    FAIRFIELD
                </text>
                <text x="2" y="20" fontFamily="'Lato', sans-serif" fontWeight="400" fontSize="10" letterSpacing="3" fill="#D4AF37" style={{ textTransform: 'uppercase' }}>
                    The Elle Cares Initiative
                </text>
            </g>
        </svg>
    );
}
