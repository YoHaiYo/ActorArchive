"use client" // use client : 이 컴포넌트는 client side에서 hydrate(정적 사이트를 동적으로 활성화)하겠다는 뜻.
// 백엔드에서 랜더하고 프론트에서 hydrate or interactive하겠다는 뜻이기도 하다.
// 인터렉티브한 페이지에 써야됨. 즉 useState같은 것에 필수.

import Link from "next/link"
import { usePathname } from "next/navigation"
import SearchActor from "./searchActor";
import "./style/navigation/navigation.min.css"
import React, { useEffect, useState } from 'react'

export default function Navigation() {
  const [toggle, setToggle] = useState(false)


  const path = usePathname();
  // console.log(path)
  return (
    <header id="hd" className="container">
      {/* pc-view */}
      <nav className="pc-view fixed-top py-4 container-fluid border-bottom
      d-flex justify-content-between align-items-center">
        <h1 className="w-0 z-up"><Link href="/">LogoPC</Link></h1>
        <div className="navi navi-ani-off d-flex d-nonexxx flex-grow-1 justify-content-between">
          <ul id="gnb" className="d-flex flex-grow-1 justify-content-center">
            <li className="mx-3"><Link href="/">Home</Link>{path === "/" ? "★" : ""}</li>
            <li className="mx-3"><Link href="/all">all</Link>{path === "/all" ? "★" : ""}</li>
            <li className="mx-3"><Link href="/criteria">criteria</Link>{path === "/criteria" ? "★" : ""}</li>
            <li className="mx-3"><Link href="/about">about</Link>{path === "/about" ? "★" : ""}</li>
          </ul>
        </div>
        <div className="d-flex w-0 justify-content-end">
          <SearchActor />
        </div>
      </nav>
      {/* mobile-view */}
      <nav className={`mobile-view fixed-top py-4 d-flex justify-content-center border-bottom`}>
        <h1 className="w-0 z-up"><Link href="/">LogoMobile</Link></h1>
        <div className="d-flex justify-content-end"><button onClick={() => setToggle(!toggle)}>햄버거바</button></div>
        <div className={`${toggle ? "active" : ""} navi position-relative text-end`}>
          <ul id="gnb" className="text-center">
            <li className="mx-3"><Link href="/">Home</Link>{path === "/" ? "★" : ""}</li>
            <li className="mx-3"><Link href="/all">all</Link>{path === "/all" ? "★" : ""}</li>
            <li className="mx-3"><Link href="/criteria">criteria</Link>{path === "/criteria" ? "★" : ""}</li>
            <li className="mx-3"><Link href="/about">about</Link>{path === "/about" ? "★" : ""}</li>
          </ul>
          <div className="d-flex justify-content-center">
            <SearchActor />
          </div>
        </div>
      </nav>
    </header>
  )
}