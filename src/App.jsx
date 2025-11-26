import React from 'react'

export default function App() {
  const venmoUrl = 'https://venmo.com/jasmine-hampton-13'
  const paypalUrl = 'https://www.paypal.me/jasminehampton196'
  const chimeHandle = '$jasmine-hampton-18'
  const email = 'Jasminehampton4196@gmail.com'

  const copy = (text) => {
    if (navigator.clipboard) navigator.clipboard.writeText(text)
    alert('Copied: ' + text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden ring-1 ring-gray-200">
        <header className="p-6 bg-white/80 backdrop-blur-sm flex flex-col items-center">
          <img src="/logo.png" alt="Big Jas Logo" className="w-36 h-36 object-contain -mt-6" />
          <h1 className="text-2xl font-extrabold mt-2 text-slate-900 text-center">Jasmine Hampton</h1>
          <p className="text-sm text-slate-600 text-center mt-1">Sponsorship Opportunities</p>
          <p className="text-xs text-slate-500 text-center mt-2">Olympic Trials Bronze Medalist | Future World Champion</p>
          <p className="text-xs text-slate-400 text-center">Born and raised in Ann Arbor, MI | Student at Southern New Hampshire University</p>
        </header>

        <main className="p-5">
          <section className="mb-4">
            <h2 className="text-lg font-semibold text-slate-900">About Me</h2>
            <p className="text-sm text-slate-600 mt-2 leading-5">
              My name is Jasmine Hampton, and I've dedicated my life to boxing with one goal in mind — to become a World Champion. As an Olympic Trials Bronze Medalist, I represent determination, discipline, and community pride. Your sponsorship directly supports my training, travel, nutrition, and gym expenses — helping me stay focused on my craft and represent Michigan on the professional stage.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-slate-900">Monthly Sponsorship Packages</h3>

            <div className="mt-3 space-y-3">
              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <div className="text-sm font-bold">$250/month — Silver Champion</div>
                <div className="text-xs text-slate-500 mt-1">Helps with: gym fees, equipment, and local travel</div>
                <ul className="text-sm text-slate-600 mt-3 list-disc list-inside leading-5">
                  <li>Monthly social media thank-you and tag</li>
                  <li>Business name/logo featured on flyers or digital materials</li>
                  <li>Exclusive updates on training and fight schedule</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl border border-yellow-400 bg-white">
                <div className="text-sm font-bold">$500/month — Gold Champion</div>
                <div className="text-xs text-slate-500 mt-1">Helps with: nutrition, competition travel, and training costs</div>
                <ul className="text-sm text-slate-600 mt-3 list-disc list-inside leading-5">
                  <li>All Silver Champion benefits</li>
                  <li>Business logo placement on warm-up shirts or gym gear</li>
                  <li>Sponsor highlight post and story feature across social platforms</li>
                  <li>One ticket to next local fight (if available)</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <div className="text-sm font-bold">$1,000+/month — Elite Champion</div>
                <div className="text-xs text-slate-500 mt-1">Helps with: living expenses, pro boxing matches, and boxing equipment</div>
                <ul className="text-sm text-slate-600 mt-3 list-disc list-inside leading-5">
                  <li>All Gold Champion benefits</li>
                  <li>Logo placement on fight trunks or banner</li>
                  <li>Business recognition during media interviews and event promotions</li>
                  <li>Personalized appearance or community event collaboration</li>
                  <li>Two tickets to next local fight (if available)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-slate-900">One-Time Sponsorship Options</h3>
            <p className="text-sm text-slate-600 mt-2">Supporters who wish to contribute without a monthly commitment can do so with $250, $500, or custom amounts. All one-time sponsors receive a personalized thank-you or shoutout and recognition in upcoming social posts and event materials.</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-slate-900">Support / Donate</h3>
            <div className="flex gap-2 mt-3">
              <a href={venmoUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center rounded-lg py-2 px-3 border border-slate-200 font-medium text-sm hover:shadow-md">Venmo</a>
              <a href={paypalUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center rounded-lg py-2 px-3 border border-slate-200 font-medium text-sm hover:shadow-md">PayPal</a>
            </div>

            <div className="mt-3 flex gap-2">
              <button onClick={() => copy(chimeHandle)} className="flex-1 inline-flex items-center justify-center rounded-lg py-2 px-3 border border-slate-200 font-medium text-sm">Copy Chime handle</button>
              <button onClick={() => copy(venmoUrl)} className="flex-1 inline-flex items-center justify-center rounded-lg py-2 px-3 border border-slate-200 font-medium text-sm">Copy Venmo link</button>
            </div>
            <p className="text-xs text-slate-500 mt-2">Tip: open Venmo or PayPal on mobile to complete a donation quickly.</p>
          </section>

          <section className="pt-3 border-t border-slate-100">
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <p className="text-sm text-slate-700 mt-2">Email: <a href={`mailto:${email}`} className="text-sky-600 underline">{email}</a></p>
            <p className="text-sm text-slate-700 mt-1">Location: Ann Arbor, Michigan</p>
          </section>
        </main>

        <footer className="p-3 text-center text-xs text-slate-400 bg-white/50">© BigJasBoxing.com — Jasmine Hampton</footer>
      </div>
    </div>
  )
}
