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
    getPersonDetails: async (id) => {
        try {
            const request = await fetch(`${baseUrl}/people/${id}`, {
                method: "GET"
            });
            if (!request.ok) {
                throw new Error(`HTTP error! status: ${request.status}`);
            }
            const response = await request.json();
            return response;
        } catch (error) {
            console.error("Error fetching person details:", error);
            throw error;
        }
    },

    getPlanetDetails: async (id) => {
        try {
            const request = await fetch(`${baseUrl}/planets/${id}`, {
                method: "GET"
            });
            if (!request.ok) {
                throw new Error(`HTTP error! status: ${request.status}`);
            }
            const response = await request.json();
            return response;
        } catch (error) {
            console.error("Error fetching planet details:", error);
            throw error;
        }
    },

    getVehicleDetails: async (id) => {
        try {
            const request = await fetch(`${baseUrl}/starships/${id}`, {
                method: "GET"
            });
            if (!request.ok) {
                throw new Error(`HTTP error! status: ${request.status}`);
            }
            const response = await request.json();
            return response;
        } catch (error) {
            console.error("Error fetching vehicle details:", error);
            throw error;
        }
    }
}

export default characterService