import SearchFilter from '../components/searchFilter'
import Result from '../components/Results'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Index = () => {
	return (
		<>
			<Header />
			<div className='flex justify-center items-center bg-home'>
				<SearchFilter />
			</div>
			<main className='container mx-auto w-2/4 py-5 px-5 mt-5'>
				<Result />
			</main>
			<Footer />
		</>
	)
}
export default Index
