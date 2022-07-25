import { Footer } from 'flowbite-react/lib/cjs/components/Footer'

const FooterComponent = () => {
	return (
		<>
			<Footer container={true}>
				<div className='w-full'>
					<div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
						<div>
							<Footer.Brand
								href='/'
								src='https://flowbite.com/docs/images/logo.svg'
								alt='Flowbite Logo'
								name='VUELA BARATO'
							/>
						</div>
					</div>
					<Footer.Divider />
					<div className='w-full sm:flex sm:items-center sm:justify-between'>
						<Footer.Copyright href='#' by='VUELA BARATO' year={2022} />
						<div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'></div>
					</div>
				</div>
			</Footer>
		</>
	)
}

export default FooterComponent
