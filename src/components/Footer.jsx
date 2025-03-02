import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { Link } from "react-router-dom"
// Components
import Heading3 from "./common/Heading3"
import Logo from "./Logo"
import { FaGithub } from "react-icons/fa6"

export function Footer() {
    const { type, popularCities, popularAttractions } = useContext(MainContext)

    return (
        <footer className="bg-lighter-gray">
            <div className="px-4 py-4 mx-auto container">
                <div className="py-4 border-b-2 lg:hidden">
                    <Logo />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols gap-8 mt-5 lg:mb-5">

                    <div className="flex flex-col gap-y-2 text-sm">
                        <Heading3>Popular cities</Heading3>
                        {
                            popularCities.map(city => (
                                <Link key={city.id} to={`/${type}/results/location/${city.location_id}`} className="text-black hover:underline hover:text-gray-700 font-light">
                                    {city.full_name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-y-2 text-sm">
                        <Heading3>Popular attractions</Heading3>
                        {
                            popularAttractions.map(attraction => (
                                <Link key={attraction.location_id} to={`/attractions/get-details/${attraction.location_id}`} className="text-black hover:underline hover:text-gray-700 font-light">
                                    {attraction.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1 flex lg:flex-col justify-center items-center lg:items-start lg:justify-start py-5 lg:pt-0 border-t-2 lg:border-t-0">
                        <div className="mb-4 hidden lg:block">
                            <Logo />
                        </div>
                        <span className="flex gap-1 text-neutral-600 text-sm">
                            Developed by <a href="https://github.com/heberth-uh" target="_blank" className="flex items-center gap-1 hover:underline"><FaGithub/>heberth-uh</a>
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    )
}