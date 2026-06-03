'use client';

import { useState } from 'react';

interface GeneratorProps {
  onGenerate: (prompt: string) => Promise<void>;
  loading: boolean;
}

export default function Generator({ onGenerate, loading }: GeneratorProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      await onGenerate(prompt);
    }
  };

  const examplePrompts = [
    'Build a CRM with login, contacts management, dashboard, role-based access, premium features with payment integration, and admin analytics.',
    'Create a task management application with user authentication, team collaboration features, task priorities, and progress tracking.',
    'Build an e-commerce platform with product catalog, shopping cart, checkout process, and payment gateway integration.',
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-2">
            Describe Your Application
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Build a CRM with login, contacts, dashboard, role-based access..."
            className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="loading-spinner mr-3"></div>
              Generating Configuration...
            </div>
          ) : (
            '✨ Generate Configuration'
          )}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          📝 Example Prompts
        </h3>
        <div className="space-y-2">
          {examplePrompts.map((example, idx) => (
            <button
              key={idx}
              onClick={() => setPrompt(example)}
              disabled={loading}
              className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-700 disabled:opacity-50 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
