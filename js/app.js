// load all countries using rest api link
const loadCountriesInfo = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Process the response data
            displayCountriesInfo(data)
        })
        .catch(error => {
            // Handle any errors
            console.error(error)
        });
}

// display countries data on card 
const displayCountriesInfo = (getCountries) => {
    const countriesContainer = document.getElementById('countries-container')
    getCountries.forEach(getCountry => {
        console.log(getCountry)
        const getCountriesDiv = document.createElement('div')
        getCountriesDiv.classList.add('col')
        getCountriesDiv.innerHTML = `
        <div class="bg-red-600 p-4 rounded-lg shadow-lg">
            <img src="${getCountry.flags.png}" alt="">
            <h2 class="text-lg text-white font-bold mb-2">Name: ${getCountry.name.common}</h2>
            <p class="text-gray-300">Capital: ${getCountry.capital ? getCountry.capital : 'No exist'}</p>
            <button
                class="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 focus:outline-none mt-4">Details</button>
        </div>
        `
        countriesContainer.appendChild(getCountriesDiv)
    })
}

loadCountriesInfo()