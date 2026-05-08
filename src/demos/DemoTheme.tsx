import { Lightbulb, Moon, Sun } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

export default function DemoTheme() {
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const setDark = useThemeStore((state) => state.setDark);
  const setLight = useThemeStore((state) => state.setLight);

  return (
    <div
      className={`p-8 rounded-2xl transition-all duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* header */}
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-yellow-500" />

        <h2 className="text-2xl font-bold">Demo 1 Theme Store</h2>
      </div>

      {/* penjelasannnya */}
      <div
        className={`p-4 rounded-lg mb-6 ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
      >
        <p className="text-sms">
          Analogi seperti saklar pusat di kos kosan pencet sekali, semua kamar
          ikut berubah
        </p>
      </div>
      {/* tombol kontrol */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {isDark ? (
            <Sun className="w-10 h-10" />
          ) : (
            <Moon className="w-10 h-10" />
          )}
        </button>

        {/* set light */}
        <button
          onClick={setLight}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
        >
          <Sun className="w-10 h-10" />
        </button>

        {/* set dark */}

        <button
          onClick={setDark}
          className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          <Moon className="w-10 h-10" />
        </button>
      </div>

      {/* child component yang share data */}

      <ThemeCard title="Ruang Tamu" />
      <ThemeCard title="Dapur" />
      <ThemeCard title="Kamar tidur" />
    </div>
  );
}

// function themecard

function ThemeCard({ title }: { title: string }) {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`p-6 rounded-xl border-2 transition-all duration-500 ${
        isDark
          ? "bg-gray-800 border-gray-700"
          : "bg-yellow-50 border-yellow-200"
      }`}
    >
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="flex items-center gap-2">
        {isDark ? (
          <>
            <Moon className="w-7 h-7 text-purple-400" />
            <span>Lampu mati</span>
          </>
        ) : (
          <>
            <Sun className="w-7 h-7 text-yellow-500" />
            <span>Lampu nyala</span>
          </>
        )}
      </div>
    </div>
  );
}
