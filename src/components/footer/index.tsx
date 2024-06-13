import { navLinks } from "@/common/links";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return(
        <footer>
            <div className="rounded-[1.875rem] relative bg-white text-[#151515] container p-11">
                <nav className=" max-md:flex-col flex gap-11 w-full">
                    <ul className=" flex flex-col gap-4 ">
                        <li className=" text-lg mb-4 uppercase text-[#A3A3A3]">МЕНЮ</li>
                        {navLinks.map((el,idx)=>(
                            <li className=" font-normal text-xl" key={el.name+idx+el.href}>
                                <Link href={el.href}>{el.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className=" flex flex-col gap-4 ">
                        <li className=" text-lg mb-4 uppercase text-[#A3A3A3]">КОНТАКТЫ</li>
                        <li className=" font-normal text-xl">
                            <Link href={"/"}>+7 (962) 025-55-17</Link>
                        </li>
                        <li className=" font-normal text-xl">
                            <Link href={"https://t.me/AndreyTalpGroup"}>telegram: @AndreyTalpGroup</Link>
                        </li>
                        <li className=" font-normal text-xl">
                            <Link href={"https://web.whatsapp.com/send/?phone=79620255517&text&type=phone_number&app_absent=0"}>watsapp: +7 962 025-55-17</Link>
                        </li>
                    </ul>
                    <ul className=" flex flex-col gap-4 ">
                        <li className=" text-lg mb-4 uppercase text-[#A3A3A3]">Рабочее время компании</li>
                        <li className=" font-normal text-xl">ПН-ПТ</li>
                        <li className=" font-normal text-xl">10:00 - 18:00</li>
                    </ul>
                </nav>
                <Image 
                    className=" absolute object-cover md:w-96 md:h-96 w-80 h-80 right-0 md:right-20 -top-20"
                    width={600}
                    height={600}
                    alt=""
                    src={'/images/footer/cube.png'}
                />
            </div>
        </footer>
    );
}