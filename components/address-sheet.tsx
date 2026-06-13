import { MapPin, Search } from "lucide-react"

interface AddressItem {
  title: string
  city: string
  muted?: boolean
}

const addresses: AddressItem[] = [
  { title: "Kings Cross Underground Statio...", city: "New York" },
  { title: "83, Midwood St", city: "New York" },
  { title: "67, Grand Central Pkwy", city: "New York", muted: true },
]

export function AddressSheet() {
  return (
    <div className="absolute inset-x-0 bottom-0 rounded-t-[2rem] bg-card pb-6 pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
      {/* Drag handle */}
      <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-foreground/15" />

      {/* Search input */}
      <div className="mx-5 mb-2 flex items-center gap-3 rounded-2xl bg-background px-4 py-4">
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          type="text"
          placeholder="Type your address here"
          className="w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Address list */}
      <ul>
        {addresses.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              className="flex w-full items-center gap-4 px-6 py-3.5 text-left transition-colors hover:bg-background/60"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  item.muted ? "bg-background" : "bg-background"
                }`}
              >
                <MapPin
                  className={`h-4 w-4 ${item.muted ? "text-muted-foreground/50" : "text-muted-foreground"}`}
                  aria-hidden="true"
                />
              </span>
              <span className="min-w-0">
                <span
                  className={`block truncate text-[15px] font-semibold ${
                    item.muted ? "text-muted-foreground/50" : "text-foreground"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`block text-[13px] ${
                    item.muted ? "text-muted-foreground/40" : "text-muted-foreground"
                  }`}
                >
                  {item.city}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
