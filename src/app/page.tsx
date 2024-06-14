import Image from "next/image";
import Link from 'next/link'
import Script from 'next/script'
import NavBar from "@/app/components/Navigation/NavBar";
import Iframe from 'react-iframe'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-8 pr-8">
        <NavBar/>
        <div className={`electionMap bg-slate-400 w-full min-h-screen`}>
            <Iframe url={"strategi_map.html"} className={`w-full min-h-screen`}/>
        </div>
        <div className="otherLinks w-full flex justify-center items-center space-x-4 pt-8 pb-8">
            <Link href="/" className={`link`}>About Us</Link>
            <Link href="/" className={`link`}>Contact Us</Link>
        </div>
        {/*<div className={`articleContainer w-full h-96 flex flex-wrap justify-around`}>*/}
        {/*    <div className="article w-96 h-80 bg-slate-400 "></div>*/}
        {/*    <div className="article w-96 h-80 bg-slate-400"></div>*/}
        {/*    <div className="article w-96 h-80 bg-slate-400"></div>*/}
        {/*</div>*/}
    </main>
  );
}
