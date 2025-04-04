const baseUrl = 'https://www.swapi.tech/api/'

const characterService = {
    getPeople: async () => {
        try {
            const resultPeople = localStorage.getItem("getPeople")
            if (resultPeople) {
                return JSON.parse(resultPeople)
            }
            const request = await fetch(`${baseUrl}/people?page=1&limit=30&expanded=true`, {
                method: "GET"
            })
            const response = await request.json();
            localStorage.setItem("getPeople", JSON.stringify(response))
            return response
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    getPlanet: async () => {
        try {
            const resultPlanet = localStorage.getItem("getPlanet")
            if (resultPlanet) {
                return JSON.parse(resultPlanet)
            }
            const request = await fetch(`${baseUrl}/planets?page=1&limit=30&expanded=true`, {
                method: "GET"
            })
            const response = await request.json();
            localStorage.setItem("getPlanet", JSON.stringify(response))
            return response
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    getVehicle: async () => {
        try {
            const resultVehicle = localStorage.getItem("getVehicle")
            if (resultVehicle) {
                return JSON.parse(resultVehicle)
            }
            const request = await fetch(`${baseUrl}/starships?page=1&limit=30&expanded=true`, {
                method: "GET"
            })
            const response = await request.json();
            localStorage.setItem("getVehicle", JSON.stringify(response))
            return response
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
}

export default characterService