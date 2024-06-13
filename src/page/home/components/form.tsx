import { PhoneInput } from "@/common/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export function Form() {
    return(
        <section>
            <div className=" relative bg-[#1C1C1C] max-md:flex-col flex gap-12 justify-between p-[3.25rem] rounded-[1.875rem] container ">
                <div className=" pointer-events-none select-none absolute inset-0 bg-[url(/images/form/circle.png)] bg-cover"/>
                <div className=" my-auto md:max-w-[22rem]">
                    <p className=" text-3xl font-medium">Остались вопросы<br/>
                    о проекте?</p>
                    <p className=" mt-6 text-xl text-[#909090]">Оставьте свои контакты, мы свяжемся с вами и сделаем бесплатную консультацию!</p>
                </div>
                <div className=" max-md:h-52 relative w-full">
                    <Image 
                        className=" absolute w-56 h-56 max-md:-left-10  -bottom-8 object-cover -rotate-[9deg] "
                        src={'/images/form/man.png'}
                        alt=""
                        width={400}
                        height={400}
                    />
                    <Image 
                        className=" absolute -right-10 md:right-0 w-96 h-56 object-cover rotate-6 "
                        src={'/images/form/woman.png'}
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
                <div>
                    <form className=" space-y-2.5 w-full text-black md:max-w-xs">
                        <input className=" rounded-2xl outline-none w-full py-5 px-4" placeholder="Электронная почта" type="email" />
                        <PhoneInput/>
                        <Button className="bg-[#84CC16] rounded-2xl text-white py-5 px-4 w-full border-none">
                            Получить консультацию
                        </Button>
                    </form>
                    <p className=" mt-4 w-full whitespace-nowrap text-xs text-center text-[#909090]">Нажимая на кнопку «Получить консультацию»,<br/> я соглашаюсь с <span className=" text-[#D4D4D4]">политикой конфиденциальности</span><br/> сайта</p>
                </div>
            </div>
        </section>
    )
}