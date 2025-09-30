"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import phoneOneBig from "@/assets/phone-mockup-preview-BIG.png"
import phoneTwoBig from "@/assets/phone-mockup-preview-BIG-second.png"
import phoneThreeBig from "@/assets/phone-mockup-preview-BIG-third.png"
import phoneOneSmall from "@/assets/phone-mockup-preview-SMALL.png"
import phoneTwoSmall from "@/assets/phone-mockup-preview-SMALL-second.png"
import phoneThreeSmall from "@/assets/phone-mockup-preview-SMALL-third.png"
import aiTechImage from "@/assets/ai-tech-new.png"
import CTA from "@/components/CTA"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

// Import your local video files and iPhone frame
import project1Video from "@/assets/project1.mp4"
import project2Video from "@/assets/project2.mp4"
import project3Video from "@/assets/project3.mp4"
import iphoneFrame from "@/assets/Iphone.png"

const Projects = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const desktopVideoRefs = useRef([])
  const mobileVideoRefs = useRef([])
  const mobileSwiperRef = useRef(null)

  const videoFiles = [project1Video, project2Video, project3Video]
  const phoneMockups = [phoneOneBig, phoneTwoBig, phoneThreeBig]
  const phoneMockupsSmall = [phoneOneSmall, phoneTwoSmall, phoneThreeSmall]

  const handleVideoEnd = () => {
    if (isTransitioning) return

    setIsTransitioning(true)

    setTimeout(() => {
      const nextIndex = (currentVideoIndex + 1) % videoFiles.length
      setCurrentVideoIndex(nextIndex)
      setIsTransitioning(false)
    }, 700)
  }

  useEffect(() => {
    const sync = (arr) => {
      arr.forEach((videoEl, idx) => {
        if (!videoEl) return
        try {
          if (idx === currentVideoIndex) {
            const p = videoEl.play?.()
            if (p && typeof p.catch === "function") p.catch(() => {})
          } else {
            videoEl.pause?.()
            try {
              videoEl.currentTime = 0
            } catch {}
          }
        } catch {}
      })
    }
    sync(desktopVideoRefs.current)
    sync(mobileVideoRefs.current)
    // Keep mobile swiper centered on the active index
    try {
      const swiper = mobileSwiperRef.current
      if (swiper && typeof swiper.slideTo === "function") {
        swiper.slideTo(currentVideoIndex, 600)
      }
    } catch {}
  }, [currentVideoIndex])

  const getPhoneStyle = (idx) => {
    // Calculate relative position from current center
    let relativePosition = idx - currentVideoIndex

    // Handle wrap-around for circular array
    if (relativePosition > 1) relativePosition -= videoFiles.length
    if (relativePosition < -1) relativePosition += videoFiles.length

    // During transition, calculate where phone is moving from/to
    if (isTransitioning) {
      const nextIndex = (currentVideoIndex + 1) % videoFiles.length
      const prevRelativePosition = idx - ((currentVideoIndex - 1 + videoFiles.length) % videoFiles.length)

      // Adjust for wrap-around in previous position
      let adjustedPrevPos = prevRelativePosition
      if (adjustedPrevPos > 1) adjustedPrevPos -= videoFiles.length
      if (adjustedPrevPos < -1) adjustedPrevPos += videoFiles.length
    }

    // Position mapping: -1 = left, 0 = center, 1 = right
    const positions = {
      "-1": { x: -350, scale: 0.85, opacity: 0.5, zIndex: 10 },
      "0": { x: 0, scale: 1.15, opacity: 1, zIndex: 20 },
      "1": { x: 350, scale: 0.85, opacity: 0.5, zIndex: 10 },
    }

    const pos = positions[relativePosition.toString()] || positions["1"]

    return {
      transform: `translateX(${pos.x}px) scale(${pos.scale})`,
      opacity: pos.opacity,
      zIndex: pos.zIndex,
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-7xl font-medium text-black inline-block tracking-tight max-md:text-5xl">
              Proven{" "}
              <span className="font-bold bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 text-transparent">
                Results,
              </span>{" "}
              Real{" "}
              <span className="font-bold bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 text-transparent">
                Impact
              </span>
            </h2>
          </div>
        </section>

        {/* Phone Mockups Section */}
        <section className="py-16 mb-10 bg-white relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl">
            <div className="hidden md:flex items-center justify-center gap-0 px-8 relative h-[600px]">
              {phoneMockups.map((_, idx) => {
                const style = getPhoneStyle(idx)

                return (
                  <div key={idx} className="absolute w-64 transition-all duration-700 ease-in-out" style={style}>
                    <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
                      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                        <video
                          ref={(el) => (desktopVideoRefs.current[idx] = el)}
                          className="w-full h-full object-cover"
                          style={{
                            transform: "scale(0.85) translateY(calc(1% + 10px))",
                            objectPosition: "center center",
                          }}
                          src={videoFiles[idx]}
                          autoPlay={idx === currentVideoIndex}
                          muted
                          onEnded={handleVideoEnd}
                          playsInline
                        />
                      </div>
                      <img
                        src={iphoneFrame || "/placeholder.svg"}
                        alt="iPhone frame"
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile Swiper - Show all 3 phones */}
            <div className="md:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={"auto"}
                centeredSlides={true}
                initialSlide={1}
                grabCursor={true}
                className="w-full py-20"
                onSwiper={(swiper) => {
                  mobileSwiperRef.current = swiper
                  try { swiper.slideTo(currentVideoIndex, 0) } catch {}
                }}
                onSlideChange={(swiper) => setCurrentVideoIndex(swiper.activeIndex)}
              >
                {phoneMockupsSmall.map((_, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={`!w-[60%] flex justify-center transition-transform duration-300 ${
                      idx === 1
                        ? "[&.swiper-slide-active]:scale-150 [&.swiper-slide-active]:z-30 [&.swiper-slide-active]:opacity-100"
                        : "[&:not(.swiper-slide-active)]:opacity-60 [&:not(.swiper-slide-active)]:scale-90"
                    }`}
                  >
                    <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
                      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                        <video
                          ref={(el) => (mobileVideoRefs.current[idx] = el)}
                          className="w-full h-full object-cover"
                          style={{
                            transform: "scale(0.82) translateY(calc(1% + 10px))",
                            objectPosition: "center center",
                          }}
                          src={videoFiles[idx]}
                          autoPlay={idx === currentVideoIndex}
                          muted
                          onEnded={handleVideoEnd}
                          playsInline
                        />
                      </div>
                      <img
                        src={iphoneFrame || "/placeholder.svg"}
                        alt="iPhone frame"
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="max-w-7xl mx-auto flex items-center justify-center md:bg-[#f2f5fe] px-6 py-16 md:px-16 lg:px-20 mb-28 md:rounded-3xl">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-1 md:order-2">
                <img
                  src={aiTechImage || "/placeholder.svg"}
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>

              <div className="p-6 rounded-lg order-2 md:order-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">Cadabra App</h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Transform your business processes with powerful AI automation, all without writing a single line of
                  code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="max-w-7xl mx-auto md:bg-[#f2f5fe] px-6 py-16 md:px-16 lg:px-20 mb-28 md:rounded-3xl md:shadow-md flex items-center justify-center">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src={aiTechImage || "/placeholder.svg"}
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>

              <div className="p-6 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">Cadabra App</h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Transform your business processes with powerful AI automation, all without writing a single line of
                  code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default Projects
