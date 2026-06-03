'use client';

import { useState } from 'react';
import { GenerationResult } from '@/types';

interface OutputViewerProps {
  result: GenerationResult;
}

export default function OutputViewer({ result }: OutputViewerProps) {
  const [activeTab, setActiveTab] = useState<string>('overview');

  if (result.error) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Error</h3>
        <p className="text-red-700">{result.error}</p>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'uiSchema', label: '🎨 UI Schema' },
    { id: 'apiSchema', label: '🔌 API Schema' },
    { id: 'databaseSchema', label: '💾 Database' },
    { id: 'authConfig', label: '🔐 Auth' },
    { id: 'businessLogic', label: '⚙️ Business Logic' },
  ];

  const getTabContent = () => {
    if (activeTab === 'overview') {
      return result.metadata;
    }
    const config = result.configuration;
    switch (activeTab) {
      case 'uiSchema':
        return config?.uiSchema;
      case 'apiSchema':
        return config?.apiSchema;
      case 'databaseSchema':
        return config?.databaseSchema;
      case 'authConfig':
        return config?.authConfig;
      case 'businessLogic':
        return config?.businessLogic;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ Generated Configuration</h2>

      {result.stages && result.stages.length > 0 && (
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Generation Stages</h3>
          <div className="space-y-2">
            {result.stages.map((stage, idx) => (
              <div key={idx} className="bg-green-50 p-3 rounded text-sm border-l-4 border-green-500">
                <p className="font-semibold text-green-900">✓ {stage.name}</p>
                <p className="text-green-700 text-xs mt-1">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <pre className="p-4 text-sm text-gray-100 overflow-x-auto max-h-96 font-mono">
            {JSON.stringify(getTabContent(), null, 2)}
          </pre>
        </div>
      </div>

      <button
        onClick={() => {
          const json = JSON.stringify(result.configuration, null, 2);
          const blob = new Blob([json], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'configuration.json';
          a.click();
        }}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
      >
        📥 Download Configuration JSON
      </button>
    </div>
  );
}
