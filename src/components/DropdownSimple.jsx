const DropdownSimple = ({ options, value, handleChange,name } )=> {
    return(
        <>
            <div className="w-full">
                <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm" 
                name={name} id={name}
                value={value} onChange={handleChange}>
                    <option value="">Seleccione</option>
                    {options.map(elem => (<option key={elem.value} value={elem.value}>{elem.label}</option>))}
                </select>
            </div>
        </>
    )
}

export default DropdownSimple