import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { MainContext } from "../context/MainContext";
// Components
import Dropdown from "./common/Dropdown";
import TypeRadioButton from "./widgets/TypeRadioButton.jsx";
// Icons
import { IoIosSearch } from "react-icons/io";


export default function SearchForm({ searchString, setSearchString, searchLocations, isLoading }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const { type, setType, typeList } = useContext(MainContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ search: searchString })
        searchLocations()
    }

    const handleChangeString = (e) => {
        if (e.target.value.startsWith(' ')) return
        setSearchString(e.target.value)
    }

    return (
        <section className="px-4 mt-3 mb-8 md:mb-10 lg:mb-16 container mx-auto">
            <TypeRadioButton options={typeList} defaultValue={type} handlerValue={setType} />
            <div className="bg-search-form bg-cover bg-no-repeat rounded-2xl mt-3 px-6 py-10 lg:py-28 min-h-60 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/0 via-black/30 to-black/40" />
                <div className="flex flex-col gap-6 lg:gap-10 items-center relative">
                    <h1 className="text-3xl lg:text-5xl text-center font-semibold text-white drop-shadow-xl">
                        Where to go?
                    </h1>
                    <p className="text-sm lg:text-base text-white text-center drop-shadow-lg">
                        Search for {type} in...
                    </p>
                    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
                        <div className="hidden lg:block">
                            <Dropdown options={typeList} defaultValue={type} handlerValue={setType} />
                        </div>
                        <input
                            type="text"
                            placeholder='Paris, Madrid, New York...'
                            value={searchString}
                            onChange={handleChangeString}
                            className="text-sm lg:text-base text-start border-2 border-light-gray rounded-full py-2 px-4 w-full min-w-36 lg:min-w-80 outline-none placeholder:text-dark-gray placeholder:text-center"
                        />
                        <button type="submit"
                            disabled={isLoading || searchString.length < 3}
                            className="p-2 lg:p-[10px] rounded-full border-2 bg-highlight text-xl hover:bg-primary border-highlight hover:border-primary cursor-pointer">
                            <IoIosSearch/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}