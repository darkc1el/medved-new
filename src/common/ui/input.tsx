'use client'
import { cn } from "@/lib/utils";
import { IMaskInput } from "react-imask";



export function PhoneInput() {
    return(
        <IMaskInput 
                mask={'+{7} (000) 000-00-00'}
                className={cn(" outline-none rounded-2xl w-full py-5 px-4")}
                prepare={function (value, maskedInput) {
                    if(maskedInput.unmaskedValue.length === 1 && value !== "9") return "";

                    if (value === '8' && maskedInput.unmaskedValue.length === 0) {
                        return '7';
                    }

                    if(maskedInput.unmaskedValue.length === 0 && value!="7" && value!="8" && value!="" && value) {
                        if(value.length>1) return value.slice(1);
                        else return '79'+value;
                    }
                    
                    return value;
                }} 
                placeholder="+7 (000) 000-00-00 "
            />
    )
}