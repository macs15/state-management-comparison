import { useRef, useEffect } from 'react';

export function useRenderCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = String(
      Number(ref.current.textContent || '0') + 1,
    );
  });
  return (
    <span
      style={{
        backgroundColor: '#ccc',
        borderRadius: 4,
        padding: '2px 4px',
        fontSize: '0.8rem',
        margin: '0 6px',
        display: 'inline-block',
      }}
      ref={ref}
    />
  );
}
