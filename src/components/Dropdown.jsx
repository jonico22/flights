import Select from 'react-select'


const Dropdown = ({ options, onChange }) => {
	return (
		<>
			<Select
				//defaultValue={options.find((option) => option.value === option.value)}
				options={options}
				onChange={onChange}
				placeholder={'SELECCIONE'}
			/>
		</>
	)
}

export default Dropdown
