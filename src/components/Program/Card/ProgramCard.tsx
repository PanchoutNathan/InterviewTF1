import * as React from "react";
import {FunctionComponent} from "react";
import {Program} from "../../../entities/Program/Program";

interface ProgramCardProps {
    program: Program
}

export const ProgramCard: FunctionComponent<ProgramCardProps> = ({...props}) => {

    return <div className='mt-4 mr-3 flex flex-col justify-center items-center ' >
        <div className='relative'>
            <img alt='Affiche du programme' width={200} height={266} className='rounded-[8px]' src={props.program.thumnail.url}/>
            <div className='cursor-pointer bg-black/[.7] absolute rounded-[8px] text-white bottom-[6px] right-[7px] w-[32px] h-[32px] flex justify-center items-center'>
                <img width={16} height={16} src='/images/add.svg' alt={'add icon'}/>
            </div>
        </div>
        <div className='line-clamp-2 px-2 text-center' dangerouslySetInnerHTML={{__html: props.program.name}}/>

    </div>
}
