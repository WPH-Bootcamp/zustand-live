import { Coffee, LogIn, LogOut, Shield, User } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const DEMO_USERS = [
  { id: 1, name: "Budi Admin", email: "budi@kafe.com", role: "admin" as const },
  {
    id: 2,
    name: "Ani Customer",
    email: "ani@email.com",
    role: "customer" as const,
  },
];

export default function DemoAuth() {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const setLoading = useAuthStore((state) => state.setLoading);

  const handleLogin = (userData: (typeof DEMO_USERS)[0]) => {
    setLoading(true);
    setTimeout(() => {
      login(userData);
    }, 800);
  };

  return (
    <div className="p-8 bg-white rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Coffee className="w-6 h-6 text-amber-600" />
        <h2 className="text-2xl font-bold text-gray-800">Demo 2: Auth Store</h2>
      </div>

      <div className="p-4 bg-amber-50 rounded-lg mb-6">
        <p className="text-sm text-gray-700">
          <strong>Analogi:</strong> Seperti buku tamu digital di kafe. Setelah
          kamu tulis nama, kasir, pelayan, dan satpam SEMUANYA tahu siapa kamu.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-gray-700">
            Pilih User (Simulasi Login)
          </h3>

          {DEMO_USERS.map((u) => (
            <button
              key={u.id}
              onClick={() => handleLogin(u)}
              disabled={isLoading || !!user}
              className="w-full flex items-center gap-4 p-4 border-2 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  u.role === "admin"
                    ? "bg-red-100 text-red-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {u.role === "admin" ? (
                  <Shield className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">{u.name}</p>
                <p className="text-sm text-gray-500">
                  {u.email} • {u.role}
                </p>
              </div>
            </button>
          ))}

          {user && (
            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          )}

          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              Sedang login...
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg text-gray-700">Simulasi Aplikasi</h3>

          <Navbar />

          <Dashboard />

          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-xl">
      <span className="font-bold">🍽️ KafeApp</span>
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <User className="w-4 h-4" />
            <span className="text-sm">{user.name}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded ${
                user.role === "admin" ? "bg-red-500" : "bg-blue-500"
              }`}
            >
              {user.role}
            </span>
          </>
        ) : (
          <span className="text-sm text-gray-400">Belum login</span>
        )}
      </div>
    </div>
  );
}

function Dashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return (
      <div className="p-6 bg-gray-100 rounded-xl text-center text-gray-500">
        <LogIn className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p>Login dulu untuk lihat dashboard</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-50 rounded-xl">
      <h4 className="font-bold text-blue-800 mb-3">Dashboard</h4>
      {user.role === "admin" ? (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white rounded-lg text-center">
            <p className="text-2xl font-bold text-red-600">1.2K</p>
            <p className="text-xs text-gray-600">Total Penjualan</p>
          </div>
          <div className="p-3 bg-white rounded-lg text-center">
            <p className="text-2xl font-bold text-red-600">48</p>
            <p className="text-xs text-gray-600">Pesanan Hari Ini</p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="p-3 bg-white rounded-lg flex justify-between">
            <span className="text-sm">Pesanan Aktif</span>
            <span className="font-bold text-blue-600">#1024</span>
          </div>
          <div className="p-3 bg-white rounded-lg flex justify-between">
            <span className="text-sm">Poin Loyalty</span>
            <span className="font-bold text-blue-600">350 pts</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileCard() {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="p-4 bg-white border rounded-xl">
      <h4 className="font-bold text-gray-700 mb-2">Profile Card</h4>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
          {user.name[0]}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
