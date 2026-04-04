import React from "react";

const Filament = () => {
  return (
    <div id="filament" className="flex items-center justify-center bg-surface-2 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[thedusWLB] text-body">Filamentide valik</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted max-w-3xl mx-auto">
            Meie standardfilamendid sobivad igapäevasteks projektideks — alates prototüüpimisest kuni funktsionaalsete detailideni.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-panel p-6 sm:p-8 border border-panel shadow-xl">
            <h3 className="text-lg sm:text-xl font-[thedusWLB] text-body">Basic</h3>
            <div className="mt-6 sm:mt-8 flex items-baseline gap-2 justify-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-body">$29</span>
              <span className="text-sm sm:text-base text-muted">/month</span>
            </div>
            <p className="mt-3 sm:mt-4 text-muted text-xs sm:text-sm">Parim valik isiklikuks kasutuseks ja väiksemate projektide jaoks.</p>
            <button className="mt-6 sm:mt-8 w-full rounded-full bg-accent px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#ff5c69]">
              Alusta
            </button>
            <ul role="list" className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-left text-muted text-xs sm:text-sm">
              <li className="flex items-center gap-2 sm:gap-3 text-body">
                <span className="inline-flex h-5 sm:h-6 w-5 sm:w-6 items-center justify-center rounded-full bg-accent text-white text-xs">✓</span>
                <span>10,000 visitors</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-body">
                <span className="inline-flex h-5 sm:h-6 w-5 sm:w-6 items-center justify-center rounded-full bg-accent text-white text-xs">✓</span>
                <span>Unlimited widgets</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-panel p-8 border border-panel shadow-xl">
            <h3 className="text-xl font-[thedusWLB] text-body">Essential</h3>
            <div className="mt-8 flex items-baseline gap-2 justify-center">
              <span className="text-5xl font-extrabold text-body">$49</span>
              <span className="text-muted">/month</span>
            </div>
            <p className="mt-4 text-muted text-sm">Tõhus valik professionaalsetele klientidele.</p>
            <button className="mt-8 w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5c69]">
              Vaata lähemalt
            </button>
            <ul role="list" className="mt-8 space-y-4 text-left text-muted text-sm">
              <li className="flex items-center gap-3 text-body">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs">✓</span>
                Prioriteetne toe juurdepääs
              </li>
              <li className="flex items-center gap-3 text-body">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs">✓</span>
                Laiaulatuslik materjalivalik
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-panel p-8 border border-panel shadow-xl">
            <h3 className="text-xl font-[thedusWLB] text-body">Growth</h3>
            <div className="mt-8 flex items-baseline gap-2 justify-center">
              <span className="text-5xl font-extrabold text-body">$79</span>
              <span className="text-muted">/month</span>
            </div>
            <p className="mt-4 text-muted text-sm">Kõige parem lahendus kasvavatele projektidele ja pidevale kasutusele.</p>
            <button className="mt-8 w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5c69]">
              Valige see
            </button>
            <ul role="list" className="mt-8 space-y-4 text-left text-muted text-sm">
              <li className="flex items-center gap-3 text-body">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs">✓</span>
                Täiustatud koostis
              </li>
              <li className="flex items-center gap-3 text-body">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs">✓</span>
                Veel funktsioone ja tugisüsteem
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filament;
