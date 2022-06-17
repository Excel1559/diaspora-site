import React, { Suspense, useEffect } from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"
// import GoldMaskLogo from "../components/DiasporaLogo/GoldMaskLogo"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Discord } from "../components/Icons/Discord"
import { Envelop } from "../components/Icons/Envelop"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Layout } from "../components/Layout"
import { NavHeader } from "../components/NavHeader"
import Team from './team'
import sal from "sal.js"

const GoldMaskLogo = dynamic(() => import("../components/DiasporaLogo/GoldMaskLogo"), {
  ssr: false,
})

const Home: NextPage = () => {
  // useEffect(() => {
  //   // @ts-ignore
  //   sal({
  //     threshold: 0.1,
  //   })
  // })
  const [showModal, setShowModal] = React.useState(false);
  console.log('showModal ', showModal)
  return (
    <Layout showLogo>
      <div className={["md:fixed md:mt-10 inset-0 md:z-0"], (showModal ? 'hidden' : undefined)}>
        {/* @ts-ignore */}
        <Suspense fallback={null} r3f>
          <GoldMaskLogo />
        </Suspense>
      </div>

      <section className={["pointer-events-auto z-10 flex h-full min-h-screen flex-col"], (showModal ? 'hidden' : undefined)}>
        <div className="flex grow flex-col p-10">
          <NavHeader />

          <div className="md:grid md:h-full md:grow md:grid-cols-4 sm:text-center">
            <div className="col-span-2 flex h-full flex-col items-start justify-center">
              <div
                className="md:text-5xl text-4xl font-light leading-tight text-neutral-600 text-center"
                data-sal="slide-up"
                data-sal-delay="300"
              >
                Building a bridge
                <br />
                for the culture
                <br />& mint an ancestor
              </div>
            </div>
            <div
              className="col-span-2 md:mx-20 md:flex h-full md:flex-col items-end justify-center"
              data-sal="slide-up"
              data-sal-delay="500"
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="sm:hidden mt-[80px] text-center text-4xl font-light">
                  Great things
                  <br />
                  are coming
                </div>
                <div className="text-lg font-normal">Connect with us to stay updated</div>
                <div className="pointer-events-auto flex space-x-10">
                  <Discord />
                  <Instagram />
                  <Twitter />
                  <Envelop />
                </div>
                <div className="hidden p-2">
                  <button className="rounded-xl bg-[#F05E17] px-4 py-2 font-bold uppercase text-black">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pointer-events-auto z-10 flex h-full min-h-screen flex-col border-t-[1px] border-neutral-800">
        <div className="flex grow flex-col p-10">
          <div className={[`mx-auto`], (showModal ? 'hidden' : undefined)}>
            <img src="/images/logos/diaspora-team-logo.png" 
              alt="screenshot" 
              width="652" 
              height="172" />
          </div>

          <div className={[`container mx-auto mt-10 max-w-3xl`], (showModal && 'hidden')}>
            <p className={`text-center tracking-wide text-lg font-normal text-gray-400 `}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            </p>
          </div>
          {showModal && <NavHeader />}
          <Team showModal={showModal} setShowModal={setShowModal} />

        </div>

        <HomeFooter />
      </section>
    </Layout>
  )
}

export default Home
