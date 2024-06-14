import Image from "next/image";
import Link from 'next/link'
import Script from 'next/script'
import NavBar from "@/app/components/Navigation/NavBar";
import Iframe from 'react-iframe'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <NavBar/>
        <div className={`electionMap bg-slate-400 w-full h-96`}>
            <Iframe url={"strategi_map.html"} className={`w-full h-full`}/>
        </div>
        <div className={`articleContainer w-full h-96 flex flex-wrap justify-around`}>
            <div className="article w-96 h-80 bg-slate-400 "></div>
            <div className="article w-96 h-80 bg-slate-400"></div>
            <div className="article w-96 h-80 bg-slate-400"></div>
        </div>
    </main>
  );
}
