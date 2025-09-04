import React from 'react';

export default function TabIndex({ tabItems, activeTab, setActiveTab }) {
  return (
    <div className="mb-4">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="h-9 grid w-full grid-cols-2 items-center justify-center rounded-lg p-[3px] bg-neutral-800/50"
      >
        {tabItems.map((tab) => (
            <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer
                    ${
                    activeTab === tab
                        ? 'bg-neutral-700 text-white shadow-sm'
                        : 'text-gray-400 hover:bg-neutral-800'
                    }`}
                >
                {tab}
            </button>
        ))}
      </div>
    </div>
  );
}
