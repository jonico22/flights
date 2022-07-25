
export async function apiShopping(params,token ) {
    let urlencoded = new URLSearchParams()
		urlencoded.append('originLocationCode', params.origin)
		urlencoded.append('destinationLocationCode', params.destination)
		urlencoded.append('adults', params.person)
		urlencoded.append('currencyCode', 'USD')
		urlencoded.append('children', params.children)
		urlencoded.append('departureDate', params.initDate)
        if (params.endDate !== '') {
            urlencoded.append('returnDate', params.endDate)
        }
    try {
     const response = await fetch(
        `${import.meta.env.VITE_URL_API_SHOPPING}?${urlencoded}`,
        {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token },
        }
    )
     const data = await response.json();
     return Promise.resolve(data);
    } catch (error) {
     return Promise.reject(error);
    }
};

export async function apiAuht() {
    let urlencoded = new URLSearchParams()
		urlencoded.append('grant_type', 'client_credentials')
		urlencoded.append('client_id', import.meta.env.VITE_API_CLIENT_ID)
		urlencoded.append('client_secret', import.meta.env.VITE_API_CLIENT_SECRET)
    try {
     const response = await fetch(import.meta.env.VITE_URL_API_AUTH,
        {
            method: 'POST',
            body: urlencoded,
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        });
     const data = await response.json();
     return Promise.resolve(data);
    } catch (error) {
     return Promise.reject(error);
    }
};