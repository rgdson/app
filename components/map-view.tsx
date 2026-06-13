import Image from "next/image"

interface CarMarker {
  top: string
  left: string
  rotate: number
}

const cars: CarMarker[] = [
  { top: "30%", left: "55%", rotate: 20 },
  { top: "62%", left: "22%", rotate: -15 },
  { top: "62%", left: "78%", rotate: 200 },
]

export function MapView() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Map background */}
      <Image
        src="/map-background.png"
        alt="街道地图"
        fill
        priority
        className="object-cover"
      />

      {/* Soft overlay for muted look */}
      <div className="absolute inset-0 bg-background/10" />

      {/* Car markers */}
      {cars.map((car, i) => (
        <div
          key={i}
          className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow-md"
          style={{ top: car.top, left: car.left, transform: `translate(-50%, -50%) rotate(${car.rotate}deg)` }}
        >
          <Image src="/car-top.png" alt="附近车辆" width={48} height={48} className="h-full w-full object-contain" />
        </div>
      ))}

      {/* Pickup location radius + pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* radius circle */}
        <div className="absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/25" />
        <div className="absolute left-1/2 top-[3.75rem] h-12 w-12 -translate-x-1/2 rounded-full bg-primary/40" />

        {/* center dot */}
        <div className="absolute left-1/2 top-[5rem] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-card bg-primary" />

        {/* ETA bubble */}
        <div className="relative flex flex-col items-center">
          <div className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg">
            3 min
          </div>
          {/* connector line */}
          <div className="h-5 w-px bg-foreground/70" />
          {/* top pin dot */}
          <div className="h-4 w-4 rounded-full border-[3px] border-card bg-primary shadow" />
        </div>
      </div>
    </div>
  )
}
