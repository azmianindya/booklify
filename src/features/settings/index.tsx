import { useState } from "react"
import SettingsHeader from "./SettingsHeader"

const inputClass = "border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#4F46E5]"
const cardClass = "bg-white rounded-2xl border border-[#E5E7EB] p-6"

const riwayat = [
  { no: 1, judul: "Buku A", status: "dipinjam" },
  { no: 2, judul: "Buku B", status: "dikembalikan" },
  { no: 3, judul: "Buku C", status: "dikembalikan" },
]

const SettingsList = () => {
  const [selectedLang, setSelectedLang] = useState("Indonesia")

  return (
    <div>
      <SettingsHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Grid 1 - Profil & Bahasa */}
        <div className="flex flex-col gap-6">

          <div className={cardClass}>
            <div className="font-bold text-[#111827] text-lg mb-4">Informasi Profil</div>
            <div className="flex flex-col gap-4">
              {[["Nama", "text", "Masukkan nama"], ["Email", "email", "Masukkan email"]].map(([label, type, placeholder]) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="text-sm text-[#6B7280]">{label}</div>
                  <input type={type} placeholder={placeholder} className={inputClass} />
                </div>
              ))}
              <div className="w-full bg-[#4F46E5] text-white rounded-xl py-2 text-sm font-medium text-center cursor-pointer">Simpan Perubahan</div>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-bold text-[#111827] text-lg mb-4">Bahasa Tampilan</div>
            <div className="flex flex-col gap-3">
              {["Indonesia", "English"].map((lang) => (
                <div key={lang} className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedLang(lang)}>
                  <div className="w-4 h-4 rounded-full border-2 border-[#4F46E5] flex items-center justify-center">
                    {selectedLang === lang && <div className="w-2 h-2 rounded-full bg-[#4F46E5]" />}
                  </div>
                  <div className="text-sm text-[#111827]">{lang}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Grid 2 - Ganti Password & Riwayat */}
        <div className="flex flex-col gap-6">

          <div className={cardClass}>
            <div className="font-bold text-[#111827] text-lg mb-4">Ganti Password</div>
            <div className="flex flex-col gap-4">
              {[["Password Baru", "Masukkan password baru"], ["Konfirmasi Password", "Ulangi password baru"]].map(([label, placeholder]) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="text-sm text-[#6B7280]">{label}</div>
                  <input type="password" placeholder={placeholder} className={inputClass} />
                </div>
              ))}
              <div className="w-full bg-[#4F46E5] text-white rounded-xl py-2 text-sm font-medium text-center cursor-pointer">Ubah Password</div>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-bold text-[#111827] text-lg mb-4">Riwayat Peminjaman</div>
            <div className="flex flex-col gap-3">
              {riwayat.map((item) => (
                <div key={item.no} className="flex items-center justify-between border-b border-[#F3F4F6] pb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-[#6B7280] w-5">{item.no}</div>
                    <div className="text-sm text-[#111827]">{item.judul}</div>
                  </div>
                  {item.status === "dipinjam" ? (
                    <div className="bg-[#FEE2E2] text-[#DC2626] text-[12px] font-medium px-3 py-1 rounded-full">Dipinjam</div>
                  ) : (
                    <div className="bg-[#DCFCE7] text-[#16A34A] text-[12px] font-medium px-3 py-1 rounded-full">Dikembalikan</div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SettingsList