import { cn } from "@/lib/utils"

const data = [
{
    image: "",
    className: "md:col-span-2 bg-[url(/images/cases/1.png)]",
},{
    image: "/images/cases/2.png",
    className: "md:col-span-1 bg-[url(/images/cases/2.png)]",
},{
    image: "/images/cases/3.png",
    className: "md:col-span-1 bg-[url(/images/cases/3.png)]",
},{
    image: "/images/cases/4.png",
    className: "md:col-span-1 bg-[url(/images/cases/4.png)]",
},{
    image: "/images/cases/5.png",
    className: "md:col-span-1 bg-[url(/images/cases/5.png)]",
},{
    image: "/images/cases/6.png",
    className: "md:col-span-1  bg-[url(/images/cases/6.png)]",
},{
    image: "/images/cases/7.png",
    className: "md:col-span-2  bg-[url(/images/cases/7.png)]",
}]

export function Cases() {
    return(
        <section>
            <div className=" container">
                <p className="  text-2xl mb-16 text-center">кейсы</p>
                <div className=" grid-cols-1  md:grid-cols-3 gap-5 col-span-2 grid-cases">
                    {data.map((el,idx)=>(
                        <div key={el.image+idx} className={cn(" bg-cover rounded-3xl",el.className)}>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}