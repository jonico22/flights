import SearchFilter from '../components/SearchFilter'
import Result from '../components/Results'
import Header from '../components/Header'
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
		</>
	)
}
export default Index
