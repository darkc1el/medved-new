import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks } from "@/common/links";
import Image from "next/image";


export function Header() {
    return(
        <header className=" z-50 sticky top-0 md:top-4">
            <div className="flex backdrop-blur-md bg-[#0D0D0D80] rounded-2xl px-5 items-center justify-between py-3 container ">
                <nav className=" w-full">
                    <ul className=" max-md:hidden flex gap-6 ">
                        {navLinks.map((el,idx)=>(
                            <li key={el.name+idx+el.href}>
                                <Link href={el.href}>{el.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Image
                    src={'/logo.svg'}
                    alt=""
                    width={150}
                    height={40}
                    className=" w-36 h-20"
                />
                <div className="flex  uppercase justify-end w-full">
                <Button>
                    <span className=" max-md:hidden">заполнить бриф</span>
                    <span className=" uppercase md:hidden"> бриф</span>
                </Button>
                </div>
            </div>
        </header>
    );
}