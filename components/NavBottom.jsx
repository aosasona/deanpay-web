import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiTransfer, BiUserCircle } from 'react-icons/bi'
import { RiDashboardFill, RiUserFill } from 'react-icons/ri'

const NavBottom = () => {
  return (
    <>
      <div className="fixed w-full bottom-0 bg-slate-200 text-slate-600 flex justify-evenly py-3 text-2xl md:text-2xl shadow-xl">
        <Link href="/dashboard" passHref>
          <span>
            <RiDashboardFill />
          </span>
        </Link>
        <Link href="/transfer" passHref>
          <span>
            <BiTransfer />
          </span>
        </Link>
        <Link href="/account" passHref>
          <span>
            <BiUserCircle />
          </span>
        </Link>
      </div>
    </>
  )
}

export default NavBottom