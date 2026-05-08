import { useState } from "react";

import DemoAuth from "./demos/DemoAuth";
import DemoTheme from "./demos/DemoTheme";

type TabId = "theme" | "auth" | "selector" | "middleware" | "persist";

const TABS: { id: TabId; label: string; desc: string }[] = [
  { id: "theme", label: "Theme Store", desc: "Gudang Data Pusat" },
  { id: "auth", label: "Auth Store", desc: "Buku Tamu Digital" },
  { id: "selector", label: "Selector", desc: "Pembaca Cermat" },
  { id: "middleware", label: "Middleware", desc: "CCTV Gudang" },
  { id: "persist", label: "Persist", desc: "Lemari Besi" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("theme");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Meet 21: Zustand
              </h1>
              <p className="text-sm text-gray-500">
                Client-Side State Management untuk React
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">
                Project: meet21-zustand-state
              </p>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {TABS.find((t) => t.id === activeTab)?.label}
              </h2>
              <p className="text-sm text-gray-500">
                {TABS.find((t) => t.id === activeTab)?.desc}
              </p>
            </div>
          </div>
        </div>

        {activeTab === "theme" && <DemoTheme />}
        {activeTab === "auth" && <DemoAuth />}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            Meet 21 - Dibuat untuk pembelajaran Zustand dengan analogi sederhana
          </p>
        </div>
      </footer>
    </div>
  );
}
