'use client';
import { Counter } from '../ui/dashboard/Counter';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="mb-4">Context demo with counter</h1>
      <Counter />
    </main>
  );
}
