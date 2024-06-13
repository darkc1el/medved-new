

import { Footer } from "@/components/footer";
import { About } from "./components/about";
import { Cases } from "./components/cases";
import { Form } from "./components/form";
import { Question } from "./components/question";
import { RoadMap } from "./components/roadmap";
import { Services } from "./components/services";
import { Welcome } from "./components/welcome";
import Image from "next/image";


export function HomePage() {
    return (
        <div className="  relative overflow-hidden">
            <Welcome />
            <Image
                src={'/images/bg-main.svg'}
                className=" left-1/2 -translate-x-1/2 -rotate-[30deg]  top-full aspect-square absolute h-[300vh] z-0"
                width={2000}
                alt=""
                height={2000}
            />
            <div className=" relative z-10 pb-16 space-y-24">
                <About />
                <Services />
                <RoadMap />
                <Cases />
                <Question />
                <Form />
                <Footer />
            </div>
        </div>
    );
}
