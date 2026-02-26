export function RectSVG({ className }: { className?: string }) {
    return (
        <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
                <clipPath id="myInnerRoundedPath" clipPathUnits="objectBoundingBox">
                    <path d="
                    M 0 0 
                    L 0.9 0  
                    L 0.95 0 
                    L 1 0.25 
                    L 1 1 
                    L 0 1 
                    L 0 0 
                    Z" />
                </clipPath>
            </defs>
        </svg>
    );
}