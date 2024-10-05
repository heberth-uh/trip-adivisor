import { useState, useContext } from 'react'
import { useLocations } from '../hooks/useLocation.js'
import LocationCard from '../components/LocationCard.jsx'
import { MainContext } from '../context/MainContext.jsx'

export default function Home() {
    const [searchString, setSearchString] = useState('')
    const { locations, searchLocations, isLoading } = useLocations(searchString)
    const { lang, units } = useContext(MainContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        searchLocations()
    }

    return (
        <main>
            <ul>
                <li>{lang}</li>
                <li>{units}</li>
            </ul>
            <h1>Where to go?</h1>
            <form onSubmit={handleSubmit}>
                {/* // prevent multi submit */}
                <input
                    type="text"
                    placeholder='Paris, Madrir, Hawai...'
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    required
                />
                <button type="submit" disabled={isLoading}>Search</button>
            </form>
            <section className='location-card'>
                {
                    isLoading && <div>Loading...</div>
                }
                {
                    locations && locations.map(({ result_object }) => (
                        <LocationCard location={result_object} key={result_object.location_id} />
                    ))
                }
            </section>
        </main>
    )
}