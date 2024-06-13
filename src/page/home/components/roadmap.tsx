import Image from "next/image"


const data = [
    {
        name: "Оценка и аудит",
        desc: "Стоимость разработки дизайна и верстки зависит от количества экранов в прототипе, их сложности и варьируется от 1000 до 4 000 рублей за блок. Проводим аудит вашей сферы бизнеса и анализ конкурентов.",
    },
    {
        name: "Структура",
        desc: "Самая важная часть сайта. На этом этапе закладывается структура, логическая последовательность экранов, прорабатываются точки захвата контактов, пишется текст.",
    },
    {
        name: "Верстка, анимация, техническая настройка",
        desc: "Заключительный этап работы по созданию сайта. Верстаем макет дизайна, адаптируем под планшеты и мобильные устройства, подключаем приемщик заявок, проводим все необходимые интеграции c доп.сервисами.",

    },
]

export function RoadMap() {
    return(
        <section>
            <div className=" relative container px-11 pb-11 pt-14 bg-[#F7FEE70D] rounded-[2.25rem]">
                <Image
                    src={'/images/roadmap/zed.svg'}
                    className=" absolute w-96 h-96 right-14 -top-16"
                    width={256}
                    alt=""
                    height={256}
                />
                <p className=" text-5xl mb-16">План работы прост <br/>до безобразия</p>
                <div className=" relative flex max-md:overflow-x-auto md:grid md:grid-cols-3 gap-4">
                    {data.map((el,idx)=>(
                        <div className=" max-md:w-96 max-md:flex-shrink-0 py-8 px-6 bg-[#1F1F1F] rounded-2xl" key={el.name+el.desc+idx}>
                            <p className=" text-xl font-semibold mb-10 bg-white text-[#151515] w-10 h-10 rounded-full flex items-center justify-center">{idx+1}</p>
                            <p className=" font-medium text-2xl">{el.name}</p>
                            <p className=" mt-5 font-[350] text-[#909090]">{el.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}