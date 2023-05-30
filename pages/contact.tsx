import React from 'react'

export default function contact() {
  return (
    <>
        {/* <!-- component --> */}
<section className="py-24 lg:py-36 bg-[#60A5FA] overflow-hidden filter ">
  <div className="container  px-4 mx-auto">
    <div className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8 text ">
        <div className="md:max-w-md text ">
          <div className="flex items-center text justify-center mb-8 w-20 h-20 rounded-xl contact-form1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2077 3.19551C13.9184 0.268161 18.0816 0.268162 18.7923 3.19552C19.2514 5.08655 21.4179 5.98396 23.0797 4.97142C25.6522 3.40398 28.596 6.34784 27.0286 8.92031C26.016 10.5821 26.9135 12.7486 28.8045 13.2077C31.7318 13.9184 31.7318 18.0816 28.8045 18.7923C26.9135 19.2514 26.016 21.4179 27.0286 23.0797C28.596 25.6522 25.6522 28.596 23.0797 27.0286C21.4179 26.016 19.2514 26.9135 18.7923 28.8045C18.0816 31.7318 13.9184 31.7318 13.2077 28.8045C12.7486 26.9135 10.5821 26.016 8.92031 27.0286C6.34784 28.596 3.40398 25.6522 4.97142 23.0797C5.98396 21.4179 5.08655 19.2514 3.19552 18.7923C0.268162 18.0816 0.268161 13.9184 3.19551 13.2077C5.08655 12.7486 5.98396 10.5821 4.97142 8.92031C3.40398 6.34784 6.34784 3.40398 8.92031 4.97141C10.5821 5.98396 12.7486 5.08655 13.2077 3.19551Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <h3 className="mb-6 text-3xl SpaceGroteskBold text ">&ldquo;Basko is a total game-changer! Streamlined workflow &amp; productivity. Highly recommend!&rdquo;</h3>
          <h4 className="SpaceGroteskBold tracking-tight mb-1 text ">Annabelle Porter</h4>
          <span>Co-Founder, Marin-Jones Inc.</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <form className="flex flex-wrap -m-3" action="#">
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="SpaceGroteskBold px-4 py-4 w-full text-white-700 tracking-tight placeholder-white-700 outline-none border border-white-700 focus:border-white-400 rounded-lg transition duration-200" id="contactInput1-1" type="text" placeholder="First Name" />
            </label>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="SpaceGroteskBold px-4 py-4 w-full text-white-700 tracking-tight placeholder-white-700 outline-none border border-white-700 focus:border-white-400 rounded-lg transition duration-200" id="contactInput1-2" type="text" placeholder="Last Name" />
            </label>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="SpaceGroteskBold px-4 py-4 w-full text-white-700 tracking-tight placeholder-white-700 outline-none border border-white-700 focus:border-white-400 rounded-lg transition duration-200" id="contactInput1-3" type="text" placeholder="Email Address" />
            </label>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="SpaceGroteskBold px-4 py-4 w-full text-white-700 tracking-tight placeholder-white-700 outline-none border border-white-700 focus:border-white-400 rounded-lg transition duration-200" id="contactInput1-4" type="text" placeholder="Phone Number" />
            </label>
          </div>
          <div className="w-full p-3">
            <label className="block">
              <input className="SpaceGroteskBold px-4 py-4 w-full text-white-700 tracking-tight placeholder-white-700 outline-none border border-white-700 focus:border-white-400 rounded-lg transition duration-200" id="contactInput1-5" type="text" placeholder="Company (Optional)" />
            </label>
          </div>
          <div className="w-full p-3">
            <a className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Send</a>
            <span className="text-sm text-white-600 tracking-tight">* We never share user details with third parties, period.</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

