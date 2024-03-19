import React, { FormEvent, Dispatch, SetStateAction, EventHandler, useState } from 'react'

type Props = {
    searchTerm: string,
    setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({searchTerm, setSearchTerm}) => {
    const searchBar = React.useRef(null)
    const [input, setInput] = useState<string>(searchTerm)
    function handleInput(e: string){
        let num = parseInt(e)
        if(isNaN(num) || num < 1)
            num = 1
        setSearchTerm(num.toString())
    }
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        let num = parseInt(input)
        if(isNaN(num) || num < 1)
            num = 1
        setSearchTerm(num.toString())
        setInput(num.toString())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='search'>Type the number or the name of the pokemon</label>
                <input
                    type='number'
                    name='search'
                    ref={searchBar}
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    />
            </div>
        </form>
    )
}

export default SearchBar