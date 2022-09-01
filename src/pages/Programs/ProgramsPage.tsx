import * as React from "react";
import {FunctionComponent} from "react";
import {useProgramsQuery} from "../../services/Programs/programs.service";
import {ProgramCard} from "../../components/Program/Card/ProgramCard";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
interface ProgramsPageProps {
}

export const ProgramsPage: FunctionComponent<ProgramsPageProps> = ({...props}) => {
    const { data, loading } = useProgramsQuery();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return <div className='p-3 h-[100vh] m-auto'>
        {loading && <div>Chargement</div>}
        {data && <Carousel responsive={responsive}>
                {data?.program?.map((program, index) => {
                    return <ProgramCard program={program} key={index}/>
                })}
        </Carousel>
        }

    </div>
}
