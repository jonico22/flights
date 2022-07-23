const DropdownSimple = ({ options, value, handleChange,name } )=> {
    return(
        <>
            <div className="w-full">
                <select className="flex items-center justify-center w-full text-sm py-3 pl-2 pr-2 border" 
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