import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Card = ({ result }) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (<div className="p-3">
        <Image
            src={BASE_URL + result.backdrop_path}
            layout='responsive'
            width={200}
            height={100}
        />

        <div className="">
            <p className="truncate">
                {result.overview}
            </p>
            <h2>
                {result.title || result.name}
            </h2>
            <p>
                {result.release_date || result.first_air_date}
            </p>
            <HandThumbUpIcon className="h-5"/>
            {result.vote_count}
        </div>
    </div>);

}

export default Card;