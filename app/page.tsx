'use client';

import { useState } from 'react';
import Generator from '@/components/Generator';
import OutputViewer from '@/components/OutputViewer';
import { GenerationResult } from '@/types';

export default function Home() {
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (prompt: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Generation failed:', error);
      setResult({
        success: false,
        error: 'Failed to generate configuration',
        stages: [],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🤖 AI Application Generator
          </h1>
          <p className="text-xl text-gray-600">
            Transform natural language into executable application configurations
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Generator onGenerate={handleGenerate} loading={loading} />
          </div>
          <div>
            {result && <OutputViewer result={result} />}
            {!result && !loading && (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <p className="text-gray-500">Enter a prompt to generate configurations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
