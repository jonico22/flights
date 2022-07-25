const ContainerForm = ({ name, children }) => {
	return (
		<>
			<div className='mb-4 block flex-1'>
				<label className='block text-sm font-medium text-gray-700'>
					{name}
				</label>
				{children}
			</div>
		</>
	)
}

export default ContainerForm
