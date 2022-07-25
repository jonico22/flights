import Select from 'react-select'


const Dropdown = ({ options, onChange }) => {
	return (
		<>
			<Select
				options={options}
				onChange={onChange}
				placeholder={'SELECCIONE'}
			/>
		</>
	)
}

export default Dropdown
