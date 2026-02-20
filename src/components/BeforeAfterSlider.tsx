import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  label?: string;
  height?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  label = '',
  height = 'h-72',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(4, Math.min(clientX - rect.left, rect.width - 4));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    e.preventDefault();
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const stopDrag = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    const handleMouseUp = () => { isDragging.current = false; };
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className={`relative ${height} overflow-hidden rounded-2xl shadow-lg cursor-ew-resize select-none`}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchMove={onTouchMove}
      >
        {/* After image (full) */}
        <img
          src={afterSrc}
          alt="After junk removal"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Before image (clipped from right) */}
        <img
          src={beforeSrc}
          alt="Before junk removal"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          draggable={false}
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize z-10 transition-transform hover:scale-110"
          style={{
            left: `${position}%`,
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <ChevronsLeftRight className="w-5 h-5 text-green-700" />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-red-600/85 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 bg-green-600/85 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none">
          AFTER
        </div>

        {/* Drag hint on first render */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Drag to compare
        </div>
      </div>
      {label && (
        <p className="text-center text-sm font-bold text-gray-600 mt-3">{label}</p>
      )}
    </div>
  );
}
