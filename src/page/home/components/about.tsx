
const data = [
    {
        name: "6 месяцев",
        desc: "гарантия",
    },
    {
        name: "12 месяцев",
        desc: "сопровождение",
    },
    {
        name: "SEO",
        desc: "на этапе прототипа",
    },
    {
        name: "52+",
        desc: "сотрудника",
    },
]

export function About() {
    return(
        <section>
            <div className=" grid gap-11 grid-cols-1 md:grid-cols-[3fr_6fr] container">
                <div className=" space-y-8">
                    <p className=" text-5xl">
                        Привет, мы<br/>
                        компания TLT PRO
                    </p>
                    <p className=" text-xl font-[320] text-[#909090]">
                        Одна из ведущих команд low code разработки в Самарской области. Наши технологии Tilda, WordPress.
                        Быстро масштабируемваш проект и перенесём на нативный код, если потребуется из сайта сделать многофункциональную платформу
                    </p>
                </div>
                <div>
                    <div className=" h-96  bg-cover bg-[url(/images/about/video.png)] rounded-3xl mb-6"/>
                    <div className=" grid gap-3 grid-cols-1 md:grid-cols-4">
                        {data.map((el,idx)=>(
                            <div className="rounded-2xl font-medium bg-[#1C1C1C] p-7 md:px-4 md:py-7" key={el.name+idx+el.desc}>
                                <p className=" mb-2 text-2xl text-[#A3E635]">{el.name}</p>
                                <p className="text-[#909090]">{el.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}