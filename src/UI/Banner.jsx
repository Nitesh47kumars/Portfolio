import React from 'react'

const Banner = () => {
  return (
    <div>
        <section class="my-20 py-20 relative">
            {/* <!-- Background bar --> */}
            <div class="absolute inset-0 z-0 translate-y-10 rotate-6 bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-4 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-8"></div>

            {/* <!-- Marquee content --> */}
            <div class="relative z-10 -mx-1 flex -rotate-3 items-center justify-center overflow-x-clip bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-1.5 lg:py-3">
            <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--duration:30s]">
                
                {/* <!-- Repeating marquee content --> */}
                <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                {/* <!-- Repeat these items --> */}
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Accessible</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Responsive</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Dynamic</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Scalable</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Search Optimized</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Interactive</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Secure</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Reliable</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                <div class="inline-flex items-center gap-2 lg:gap-4">
                    <span class="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">Engaging</span>
                    <img src="./star.svg" alt="star" class="w-5 lg:w-7" />
                </div>
                </div>

                <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                </div>

            </div>
            </div>
        </section>
    </div>
  )
}

export default Banner

