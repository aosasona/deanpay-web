/* eslint-disable @next/next/no-img-element */
import Meta from "@/components/Meta";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IoRocket } from "react-icons/io5";
import { FaUser, FaAngleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Meta title="Home" />
      <Nav />
      <main className="w-[98vw] h-full mx-auto md:w-[90%] sm:mx-auto xl:mx-auto mt-24">
        <div className="w-full h-max flex md:items-center md:justify-between space-x-5">
          <div className="h-auto w-[90%] mx-auto text-[#2e63c0] leading-normal md:leading-loose text-[1.5rem] md:text-4xl font-semibold">
            Easy Bill Payment On-The-Go With No Hidden Fees
            <div className="w-max mx-auto">
              <img src="/img/Line.svg" alt="Line" className="" />
            </div>
            <div className="text-slate-500 font-medium text-xs md:text-sm my-8">
            Purchase airtime and mobile data in just a few clicks. Send money to any DeanPay wallet for free! - Sign up now to start enjoying 1.5% cashback on every purchase made on DeanPay! 😎
            </div>
            <div className="w-full mt-8 text-sm grid grid-cols-2 items-center gap-3 md:gap-5">
              <a href="https://app.deanpay.com/signup">
                <button className="w-full flex items-center justify-center space-x-2 bg-[#2e63c0] font-semibold text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md">
                  <IoRocket />
                  <span>Get Started</span>
                </button>
              </a>

              <a href="https://app.deanpay.com/login">
                <button className="w-full flex items-center justify-center space-x-2 border-2 border-[#2e63c0] font-semibold text-[#2e63c0] px-6 py-3 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md">
                  <FaUser />
                  <span>Sign In</span>
                </button>
              </a>
            </div>
          </div>
          <div className="relative w-full h-full hidden md:flex md:justify-end">
            <img
              src="/img/Transfer.svg"
              alt="Hero Image"
              className="w-4/5"
            />
          </div>
        </div>

        <h1 className="mt-16 text-2xl md:text-3xl font-semibold px-5 md:px-0">Meet DeanPay</h1>
        <div className="w-[90vw] md:w-[90vw] mx-auto flex flex-col md:flex-row mt-10 mb-12 space-y-8 md:space-x-5 md:space-y-0 text-[#121212] font-medium">
          <div className="bg-[#FCE7F3] w-full flex flex-col items-center space-y-14 rounded-xl px-5 py-12">
            <img src="/img/funding.png" alt="Image" className="w-3/5"/>

            <h2 className="text-[0.8rem]">With a debit card or bank account, you can easily effortlessly and securely fund your wallet via a trusted payment gateway.</h2>
          </div>

          <div className="bg-[#E0F2FE] w-full flex flex-col items-center space-y-14 rounded-xl px-5 py-12">
            <img src="/img/debit-card.png" alt="Image" className="w-3/5"/>

            <h2 className="text-[0.8rem]">Receive payments using your email address, purchase airtime, mobile data, and other services with ease.</h2>
          </div>

          <div className="bg-[#2e63c0] text-white w-full flex flex-col items-center space-y-14 rounded-xl px-5 py-12">
            <img src="/img/mem1.png" alt="Image" className="w-3/5"/>

            <h2 className="text-[0.8rem]">Transactions that are lightning fast and completely automated, with no hidden fees or additional costs to you!</h2>
          </div>
        </div>
      </main>
     
      <Footer />
    </>
  );
}
