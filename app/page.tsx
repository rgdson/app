import { MapView } from "@/components/map-view"
import { AddressSheet } from "@/components/address-sheet"
import { AlignLeft, LocateFixed } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-0 sm:p-6">
      {/* Phone frame */}
      <div className="relative h-screen w-full overflow-hidden bg-background sm:h-[780px] sm:max-w-[390px] sm:rounded-[2.5rem] sm:shadow-2xl">
        <MapView />

        {/* Top-left menu button */}
        <button
          type="button"
          aria-label="打开菜单"
          className="absolute left-5 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-md transition-transform active:scale-95"
        >
          <AlignLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Recenter button (above the sheet) */}
        <button
          type="button"
          aria-label="回到当前位置"
          className="absolute bottom-[46%] right-5 flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground shadow-md transition-transform active:scale-95"
        >
          <LocateFixed className="h-5 w-5" aria-hidden="true" />
        </button>

        <AddressSheet />
      </div>
    </main>
  )
}
