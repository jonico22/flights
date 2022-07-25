import jsonData from '../data/airport.json'

export const filterCarriers = (id, carriers) => {
	let filter = carriers.filter((item) => item.id === id)
	return filter.length ? filter[0].name : null
}

export const getDataAirport = ()=>{
	let newData = []
	jsonData.map( item =>{
		newData.push(
			{
				value : item.IATA,
				label: item.city + ' - ' + item.country
			}
		)
	})
	return newData
}

export const filterAircraft = (id, aircraft) => {
	let filter = aircraft.filter((item) => item.id === id)
	return filter[0].name
}

export const objectToArray = (data) => {
	let newArray = []
	Object.entries(data).forEach(function (entry) {
		newArray.push({
			id: entry[0],
			name: entry[1],
		})
	})
	return newArray
}

export const detailFilter = (id,data)=>{
	let filter = data.filter((item)=> item.id === id)
	return filter[0]
}


