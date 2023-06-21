import React from 'react';

interface Props {
    className?: string;
}
function Underline({ className }: Props ) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1044.000000 182.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,182.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M4885 1244 c-347 -9 -854 -26 -1035 -34 -1166 -56 -1654 -97 -2295 -190 -88 -13 -391 -66 -536 -93 -70 -13 -136 -31 -148 -39 l-21 -15 25 -23 c27 -26 21 -26 205 10 25 5 74 13 110 19 36 6 108 17 160 26 686 109 1645 160 3495 186 816 12 2025 2 2545 -21 1073 -47 1186 -53 1550 -80 69 -5 199 -14 290 -21 91 -6 192 -14 225 -18 73 -8 115 3 151 40 26 27 26 29 10 53 -33 51 -53 55 -436 86 -487 39 -988 67 -1855 101 -241 10 -2168 20 -2440 13z"/>
            </g>
        </svg>
    );
}

export default Underline;
