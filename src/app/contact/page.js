import React from 'react'

const contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center w-full min-h-screen py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-surface-2">
      <div className="responsive max-w-4xl w-full rounded-[2rem] border border-panel bg-panel p-6 sm:p-8 lg:p-10 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.15)]">
        <h2 className="text-3xl sm:text-4xl font-[thedusWLB] text-accent mb-3 sm:mb-4 uppercase tracking-wider">Võtke meiega ühendust</h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg font-['thedusCLR'] text-muted">
          Kui sul tekib küsimusi või soovid tellimusest teavet, kirjuta meile julgelt. Aitame suuisna kiidumagi!
        </p>
        <div className="grid gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <p className="text-lg font-[thedusWLB] text-accent">E-post</p>
            </div>
            <div>
              <p className="text-base text-muted">info@hoku3d.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <p className="text-lg font-[thedusWLB] text-accent">Asukoht</p>
            </div>
            <div>
              <p className="text-base text-muted">Saaremaa, Eesti</p>
            </div>
          </div>
        </div>
        <a
          href="mailto:info@hoku3d.com?subject=Hoku3D%20päringu%20saaja&body=Tere%20Hoku3D%2C%0A%0AMul%20on%20küsimus%20seoses%20..."
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition hover:bg-[#ff5c69] hover:scale-105 uppercase tracking-wider"
        >
          Kontakt
        </a>
      </div>
    </div>
  )
}

export default contact
