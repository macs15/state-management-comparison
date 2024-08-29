import { useRenderCounter } from '@/app/hooks/useRenderCounter';
import { useCounterStore } from '@/app/lib/providers/counter-provider';
import { memo } from 'react';

export const Counter = memo(() => {
  // const { increment, decrement, count } = useCount();
  const { increment, decrement, count } = useCounterStore((s) => s);
  const renderCount = useRenderCounter();

  return (
    <>
      <section className="flex gap-4">
        <button
          className="rounded-sm bg-blue-600 px-4 text-white"
          onClick={decrement}
        >
          -1
        </button>
        <p>{count}</p>
        <button
          className="rounded-sm bg-blue-600 px-4 text-white"
          onClick={increment}
        >
          +1
        </button>
      </section>
      <div className="mt-4">
        <p>Render count: {renderCount}</p>
      </div>
    </>
  );
});

Counter.displayName = 'Counter';
