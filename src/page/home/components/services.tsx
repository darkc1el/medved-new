import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Services() {
    return(
        <section>
            <div className=" container">
                <p className=" text-2xl mb-16 text-center">наши услуги</p>
                <div className=" grid gap-5 grid-cols-1 md:grid-cols-3">
                    <div className=" relative pt-12 flex flex-col justify-between pb-8 px-6 bg-[#1C1C1C] rounded-2xl">
                        <div className=" absolute px-6 py-3 rounded-3xl bg-[#A3E635] text-[#151515] text-2xl -top-5 -left-8 -rotate-[20deg]">акция</div>
                        <p className=" border rounded-full border-[#404040] w-9 h-9 flex items-center justify-center">1</p>
                        <p className=" mt-8 text-3xl font-medium">Экспресс-лэндинги и посадочные страницы</p>
                        <p className=" mt-5 text-[#909090] font-[350]">Одностраничные лендинги, визитки и посадочные страницы для быстрого<br/>привлечения трафика</p>
                        <p className=" text-2xl mt-9">от 10 000 ₽</p>
                        <Button className="mt-6 text-lg border-none w-full bg-white text-black">
                            Обсудить проект
                        </Button>
                    </div>
                    <div className=" pt-12 flex flex-col justify-between pb-8 px-6 text-[#151515] bg-[#A3E635] rounded-2xl">
                        <p className=" text-2xl w-fit relative">
                            от 70 000 ₽
                            <Image
                                src={'/images/services/underline.png'}
                                alt=""
                                width={200}
                                height={200}
                                className="h-1.5 absolute -bottom-0.5"
                            />
                        </p>
                        <p className=" border mt-12 rounded-full border-[#151515] w-9 h-9 flex items-center justify-center text-[#151515]">2</p>
                        <p className=" mt-8 text-3xl font-medium">Разработка сайта и лэндингов</p>
                        <p className=" mt-5 font-[350]">Многостраничные сайты, каталоги, обучающие платформы и e-commerce платформы</p>
                        <Button className="mt-6 text-lg border-[#151515] w-full bg-transparent text-black">
                            Обсудить проект
                        </Button>
                    </div>
                    <div className=" pt-12 flex flex-col justify-between pb-8 px-6 bg-[#1C1C1C] rounded-2xl">
                        <div>
                            <p className=" border rounded-full border-[#404040] w-9 h-9 flex items-center justify-center">3</p>
                            <p className=" mt-8 text-3xl font-medium">Продвижение</p>
                            <p className=" mt-5 text-[#909090] font-[350]">Продвижение вашего проекта Seo, контекстная реклама</p>
                        </div>
                        <div>
                        <p className=" text-2xl mt-9">от 10 000 ₽</p>
                        <Button className="mt-6 text-lg border-none w-full bg-white text-black">
                            Обсудить проект
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}