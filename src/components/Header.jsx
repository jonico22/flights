import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar'

const Header = () => {
	return (
		<>
			<Navbar fluid={true} rounded={true}>
				<Navbar.Brand href='/'>
					<img
						src='https://flowbite.com/docs/images/logo.svg'
						className='mr-3 h-6 sm:h-9'
						alt='Flowbite Logo'
					/>
					<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
						VUELA BARATO
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link
						href='https://developers.amadeus.com/api-usage'
						active={true}
					>
						DOCUMENTACION API
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default Header
