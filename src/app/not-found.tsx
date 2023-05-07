import Image from "next/image";
import ConstructionImg from "@assets/images/underconstruction.png"

export default function NotFound() {
    return (
        <div className="grid place-items-center text-center text-gray-500 px-24">
            <div>
                <Image src={ConstructionImg} alt="404" />
                <h2 className="font-bold">This page is currently under construction.</h2>
                <p>Sorry for the inconvenience</p>
            </div>
        </div>
    );
}
