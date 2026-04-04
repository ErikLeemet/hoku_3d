import React from 'react'

const contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center w-full min-h-screen py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-surface-2">
      <div className="responsive max-w-4xl w-full rounded-[2rem] border border-panel bg-panel p-6 sm:p-8 lg:p-10 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.15)]">
        <h2 className="text-3xl sm:text-4xl font-[thedusWLB] text-body mb-3 sm:mb-4">Võta ühendust</h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg font-['thedusCLR'] text-muted">
          Kirjuta meile oma projekti ideest või küsi täpsemat infot teenuste kohta.
        </p>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 mb-6 sm:mb-8">
          <div className="rounded-3xl bg-panel p-4 sm:p-6 border border-panel">
            <p className="mb-1 sm:mb-2 text-lg sm:text-xl font-[thedusWLB] text-body">E-post</p>
            <p className="text-sm sm:text-base text-muted">info@hoku3d.com</p>
          </div>
          <div className="rounded-3xl bg-panel p-4 sm:p-6 border border-panel">
            <p className="mb-1 sm:mb-2 text-lg sm:text-xl font-[thedusWLB] text-body">Asukoht</p>
            <p className="text-sm sm:text-base text-muted">Saaremaa, Eesti</p>
          </div>
        </div>
        <a
          href="mailto:info@hoku3d.com?subject=Hoku3D%20päringu%20saaja&body=Tere%20Hoku3D%2C%0A%0AMul%20on%20küsimus%20seoses%20..."
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition hover:bg-[#ff5c69]"
        >
          Saada kirja
        </a>
      </div>
    </div>
  )
}

export default contact
