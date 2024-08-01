"use client";

import FirstSection from "@/components/firstSection";
import Header from "@/components/Header";
import SecondSection from "@/components/SecondSection";
import Image from "next/image";
import secondImage from "../../public/assets/test.webp";
import secondImageResponsive from "../../public/assets/secondImageResponsive.webp"
import thirdImage from "../../public/assets/questNft.webp";
import thirdImageResponsive from "../../public/assets/thirdImageResponsive.svg";
import appleBtn from "../../public/assets/appstore-icon.svg";
import playStore from "../../public/assets/playstore-icon.svg";
import fourthImage from "../../public/assets/fourthImage.webp";
import fourthImageResponsive from "../../public/assets/fourthImageResponsive.webp";
import fifthImage from "../../public/assets/lastImg.webp";
import fifthImageResponsive from "../../public/assets/lastImgResponsive.webp";
import subscribe from "../../public/assets/subscribe.png";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import nft1 from "../../public/assets/nft1.png";
import nft5 from "../../public/assets/nft7.png";
import nft3 from "../../public/assets/nft3.png";
import nft4 from "../../public/assets/nft4.png";
import lineThing1 from "../../public/assets/lineThing3.svg";
import gradient from "../../public/assets/gradientBlue.svg";
import cardGradient from '../../public/assets/card-gradient.png'
import roadMapBg from '../../public/assets/roadmap-bg.png'
import zfGradient from '../../public/assets/zf-gradient.webp'
import toggleUp from '../../public/assets/toggle-up.png'

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="flex self-center items-center justify-center bg-black overflow-x-hidden w-full">

        <main className="flex relative z-0 min-h-screen flex-col items-center justify-between  bg-black">

          <Header />
          <FirstSection />

          <div className="absolute left-0 z-[-1] w-[70%] top-[300px]">
            <Image src={lineThing1} />
          </div>

          <SecondSection

            preTitle={"Wearable Threads On Chain + AI "}
            blueText={"Gamified"}
            titleText={"DePin + SocialFI for AI "}
            paragraph={"Mini-games to level up your desired Identity on Smartwatch"}
            sectionImg={secondImage}
            responsiveImage={secondImageResponsive}
            
          />
           <div className="relative w-full">
           <Image style={{'top':'-22%'}} className="absolute right-0" src={zfGradient}/>
          <div className="container">
            <div className="gradient-text-container inter">
              <h1 className="gradient-text text-2xl sm:text-4xl xl:text-6xl font-bold mt-10 lg:mt-28"> Distributed Wearable Avatar Network </h1>
            </div>
            <p className="mx-auto text-white inter mt-5 md:mt-10 inter xl:text-xl  xl:w-[55%] md:text-center">
            Revolutionizing AI and social interactions. Users can engage in peer-to-peer zero knowledge exchanges, ensuring complete privacy and security during data transactions. Users will be rewarded for taking notes, interacting with artificial intelligence and communicating with other users.
            </p>
            <div className="flex mt-10 gap-4 justify-center">
              <div className="playStore flex align-center w-max gap-2 py-2 xl:py-3 justify-center">
                <Image src={playStore} className="object-contain app-store" />
                For Android
              </div>
              <div className="appStore flex align-center w-max gap-2 py-2 xl:py-3 justify-center">
                <Image src={appleBtn} className="object-contain app-store" />
                For IOS
              </div>
            </div>
          </div>
          </div>
          <gradientcontainer className="relative z-2 w-full">

            <SecondSection

              preTitle={"Incentivized But Not Play To Earn Model"}
              blueText={"ZK NFT Quests/"}
              titleText={"Games"}
              paragraph={"Gamified Threads with custom data variables"}
              sectionImg={thirdImage}
              responsiveImage={thirdImage}
            />
          </gradientcontainer>




          <SecondSection
            preTitle={"Earn desired cryptocurrency by creating  AI + DAO pools on the smartwatch"}
            blueText={"Pair your any token"}
            titleText={"with AI"}
            paragraph={"Your token will be able Tell Jokes, Provide Advice, Offer Tips and much more."}
          />
            <div className="cards w-full relative xl:mb-24">
              <Image style={{'top':'-30%'}} className="absolute left-0" src={cardGradient}/>
              <div className="container">

                <div className="px-2 sm:px-4 md:px-0 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 items-center justify-center">

                  <Card img={nft1} hearts={"6"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
                  <Card img={nft5} hearts={"7"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
                  <Card img={nft3} hearts={"8"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
                  <Card img={nft4} hearts={"6"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
                </div>

              </div>
            </div>



            <SecondSection
            className="mt-24"
              preTitle={"IDEA Engine: AI Wearable Crypto Collectibles Ecosystem"}
              titleText={"TokenoMics And Utility"}
              sectionImg={fourthImage}
              responsiveImage={fourthImageResponsive}
            />
            <div className="relative w-full mb-10 md:mb-20">
            <Image style={{'top':'-22%'}} className="w-[50%] hidden md:block absolute left-0" src={roadMapBg}/>

          <gradientcontainer className="relative z-2">
          <SecondSection

            preTitle={"IDEA Engine: AI wearable Crypto collectibles ecosystem"}
            titleText={"Roadmap"}
            sectionImg={fifthImage}
            responsiveImage={fifthImageResponsive}
          />
            {/* <Image src={gradient} className="absolute top-0 left-[-55%] z-[-1] opacity-70" /> */}
            {/* <Image src={gradient} className="absolute bottom-0 right-[-55%] z-[-1] opacity-70" /> */}

          </gradientcontainer>
          </div>



          <h4 className="text-white text-3xl md:text-4xl xl:text-6xl mb-5 lg:mb-10 Oxanium md:mt-10 font-bold">
            Join Whitelist
          </h4>
          <div className="px-2 w-full">
            <div className="w-[95%] mx-auto sm:w-[400px] xl:w-[680px] lg:w-[400px] flex-wrap justify-between flex px-2 py-1 xl:py-3 md:pl-7 rounded-[7px] border text-white border-[#5991ff] ">
              <input className="py-4 sm:w-auto  bg-opacity-0 reset-input "
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <div className="w-12 md:ml-10 cursor-pointer">
                <Image src={subscribe} />
              </div>
            </div>
          </div>
          <Footer />
          <button onClick={scrollToTop} className="toggleUp hidden md:block fixed bottom-0 right-0 p-10 cursor-pointer">
              <Image src={toggleUp}/>
          </button>
        </main>

      </div>
    </>
  );
}
