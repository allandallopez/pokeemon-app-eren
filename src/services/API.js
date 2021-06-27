import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

const GetPokedex = async () => {
   const result = await axios
      .get(`${API_URL}/pokemon`)
      .then(({ data }) => data)
      .catch((err) => console.log(err))
   return result
}

const GetDetailPokedex = async (pokeName) => {
   const result = await axios
      .get(`${API_URL}/pokemon/${pokeName}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err))
   return result
}

const GetItems = async () => {
   const result = await axios
      .get(`${API_URL}/item`)
      .then(({ data }) => data)
      .catch((err) => console.log(err))
   return result
}

const GetDetailItem = async (itemName) => {
   const result = await axios
      .get(`${API_URL}/item/${itemName}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err))
   return result
}

export default {
   GetPokedex,
   GetDetailPokedex,
   GetItems,
   GetDetailItem,
}
