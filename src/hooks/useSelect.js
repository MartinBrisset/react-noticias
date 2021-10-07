import { useState } from "react"


const useSelect = (stateIninitial, options) => {

    const [state, setstate] = useState(stateIninitial)
    
    const SelectNoticias = () => {
        return (

            <select 
                className='browser-default'
                value={state}
                onChange={(e) => setstate(e.target.value)}
            >
            
                {options.map(option => {
                    return (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    )
                })}

            </select>

        )
    }

    return [state, SelectNoticias]
}
 
export default useSelect;