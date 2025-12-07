import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CampaignExplanationProps {
  backgroundImage: string;
}

export function CampaignExplanation({ backgroundImage }: CampaignExplanationProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-32 bg-[var(--color-calico)]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src={backgroundImage}
          alt="Fabric texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Header with craft marks */}
        <div className="mb-16 text-center">
          <div className="inline-block relative">
            {/* Chalk mark decoration */}
            <div className="absolute -top-6 left-0 w-full h-px bg-[var(--color-chalk)] opacity-50" />
            <div className="absolute -top-4 left-1/2 w-px h-4 bg-[var(--color-chalk)] opacity-50 -translate-x-1/2" />
            
            <h2 className="text-[var(--color-dusk-indigo)] mb-4">The Afterhrs Campaign</h2>
            
            {/* Subtitle with thread line */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-8 h-px bg-[var(--color-stitching)]" />
              <p className="text-[var(--color-stitching)] uppercase tracking-[0.2em] text-sm">
                Marks of the Maker
              </p>
              <div className="w-8 h-px bg-[var(--color-stitching)]" />
            </div>
          </div>
        </div>

        {/* Campaign content grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Mission */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-[var(--color-ochre)] opacity-20 leading-none">
                &ldquo;
              </div>
              <h3 className="text-[var(--color-clay-red)] mb-4 relative z-10">Our Mission</h3>
              <p className="text-[var(--color-chestnut)] opacity-90">
                Afterhrs is a study of marks — the traces of labour, the quiet rituals of making, 
                and the stories whispered through garments. We exist to honour the hands behind 
                every piece, ensuring that those who create are seen, valued, and supported.
              </p>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-[var(--color-ochre)] border-opacity-40">
              <p className="text-[var(--color-chestnut)] opacity-90">
                Every garment carries the weight of invisible labour. Our campaign brings visibility 
                to the makers, advocating for fair wages, safe conditions, and dignity in craft.
              </p>
            </div>
          </div>

          {/* Right column - What We Do */}
          <div className="space-y-8">
            <h3 className="text-[var(--color-clay-red)]">What We Do</h3>
            
            <div className="space-y-6">
              {[
                {
                  title: "Direct Support",
                  description: "100% of donations go directly to garment workers like Rifky, supporting immediate needs and long-term security."
                },
                {
                  title: "Ritual of Making",
                  description: "We document and share the meditative, repetitive nature of craft—honoring the time and skill embedded in every stitch."
                },
                {
                  title: "Evidence of Labour",
                  description: "Through storytelling and visual documentation, we make visible the marks, mistakes, and processes that reveal the true cost of making."
                },
                {
                  title: "Material as Memory",
                  description: "We believe cloth absorbs time, sweat, and stories. Our campaign preserves these narratives for future generations."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Thread mark bullet */}
                  <div className="absolute left-0 top-2 w-4 h-4 border border-[var(--color-stitching)] 
                                opacity-60 rotate-45" />
                  <h4 className="text-[var(--color-dusk-indigo)] mb-2">{item.title}</h4>
                  <p className="text-[var(--color-chestnut)] opacity-90 text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 pt-12 border-t border-[var(--color-stitching)] border-opacity-30 text-center">
          <p className="text-[var(--color-dusk-indigo)] italic max-w-3xl mx-auto">
            Our visual world blends atelier intimacy with earthy calm, using chalk marks, raw fabrics, 
            and botanical pigments to honour the hands behind every piece.
          </p>
        </div>
      </div>
    </section>
  );
}
