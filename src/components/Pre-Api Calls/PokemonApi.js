import axios from 'axios'

const pokemon = () =>
{
    const promises = []
    for(let i = 1; i <= 898; i++)
    {
       promises.push(axios.request({
           method: 'GET',
           url:`https://pokeapi.co/api/v2/pokemon/${i}`
       }).then((res) => res.data ))
    }

    Promise.all(promises).then(res => {
        return res.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }))    
    })      
}

    


module.exports = {pokemon}