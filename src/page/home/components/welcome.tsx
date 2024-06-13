import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export function Welcome() {
    return(
        <section className=" bg-[url(/images/home/bg-home.svg)] bg-cover">
            <div className="flex gap-9 container items-center flex-col justify-center h-[calc(100dvh-6.625rem)]">
                <p
                    className={cn(
                        " text-[#A3E635]   uppercase text-center text-4xl md:text-7xl font-medium"
                    )}
                >
                    Разрабатываем сайты для<br className=" max-md:hidden"/> малого и среднего бизнеса
                </p>
                <p className=" max-w-3xl text-center text-xl md:text-3xl">Вы нашли нас, потому что мы в топе выдачи и знаем как поднять в топ вас</p>
                <Button>
                    Обсудить проект
                </Button>
            </div>
        </section>
    );
}