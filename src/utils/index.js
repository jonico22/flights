export const filterCarriers = (id, carriers) => {
	let filter = carriers.filter((item) => item.id === id)
	return filter[0].name
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
	console.log(filter[0].itineraries)
	return filter[0].itineraries
}


