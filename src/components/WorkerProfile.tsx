import { ImageWithFallback } from "./figma/ImageWithFallback";

interface WorkerProfileProps {
  name: string;
  image: string;
  biography: string[];
  onDonate: () => void;
}

export function WorkerProfile({ name, image, biography, onDonate }: WorkerProfileProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-[var(--color-calico)] translate-x-4 translate-y-4 -z-10" />
          <div className="relative overflow-hidden aspect-[3/4]">
            <ImageWithFallback
              src={image}
              alt={`Portrait of ${name}`}
              className="w-full h-full object-cover grayscale opacity-90"
            />
            {/* Film grain overlay */}
            <div 
              className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            />
          </div>
          {/* Tailor mark detail */}
          <div className="absolute -bottom-2 -right-2 w-24 h-24 border-2 border-[var(--color-stitching)] opacity-40" />
        </div>

        {/* Biography Section */}
        <div className="space-y-8">
          {/* Name with decorative mark */}
          <div className="relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-[var(--color-ochre)] opacity-60" />
            <h2 className="text-[var(--color-dusk-indigo)] mb-2">{name}</h2>
            <div className="w-12 h-px bg-[var(--color-stitching)]" />
          </div>

          {/* Biography text */}
          <div className="space-y-6">
            {biography.map((paragraph, index) => (
              <p 
                key={index}
                className="text-[var(--color-chestnut)] opacity-90"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Donate Button */}
          <div className="pt-4">
            <button
              onClick={onDonate}
              className="group relative px-10 py-4 bg-[var(--color-clay-red)] text-[var(--color-chalk)] 
                       transition-all duration-300 hover:bg-[var(--color-dusk-indigo)]
                       border border-[var(--color-clay-red)] hover:border-[var(--color-dusk-indigo)]"
            >
              <span className="relative z-10">Support Rifky</span>
              {/* Stitch mark decoration */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--color-chalk)] opacity-30 
                            group-hover:opacity-50 transition-opacity" />
            </button>
            <p className="mt-3 text-sm text-[var(--color-stitching)] opacity-75">
              Every contribution supports fair wages and dignity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
