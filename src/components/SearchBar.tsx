import React, { FormEvent, Dispatch, SetStateAction, useState, useEffect } from 'react'
import SearchBarSuggestions from './SearchBarSuggestions'
import { FaSearchengin } from 'react-icons/fa6'

type Props = {
    setSearchTerm: Dispatch<SetStateAction<string>>
    searchInput: string,
    setSearchInput: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({setSearchTerm, searchInput, setSearchInput}) => {
    const searchBar = React.useRef(null)
    const [selectedBar, setSelectedBar] = useState(true)
    const inputElement = document.getElementById("input")
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        setSearchTerm(searchInput)
        setSearchInput(searchInput)
        setSelectedBar(false)
    }
    function handleClick(value: string){
        setSearchTerm(value)
        setSearchInput(value)
    }

    useEffect(() => {
        inputElement?.focus()
    }, [])
    function delaySelectionAction(select: boolean){
        setTimeout(() => {
            setSelectedBar(select)
        }, 50);
    }
    
    return (
        <form onSubmit={handleSubmit} autoComplete='off' className='relative'>
            <div className='flex flex-col gap-2'>
                <label 
                    htmlFor='search' 
                    className='text-xl'
                >
                    Type the name of the pokemon
                </label>
                <div className=' flex gap-1 pr-1 border border-black rounded'>
                    <input
                        type='text'
                        id='input'
                        name='search'
                        ref={searchBar}
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                        onFocus={() => delaySelectionAction(true)}
                        onBlur={() => delaySelectionAction(false)}
                        className="grow"
                        />
                    <button type='submit'>
                        <FaSearchengin />
                    </button>
                </div>
            </div>
                <SearchBarSuggestions searchInput={searchInput} selectedBar={selectedBar} handleClick={handleClick} />
        </form>
    )
}

export default SearchBar