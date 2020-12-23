import React from 'react'
import axios from 'axios'
import './Css/PokeDexPage.css'



class PokeDexPage extends React.Component
{
    state = {
        pokemon :[]
    }

    componentWillMount()
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
           console.log(res)
           this.setState({pokemon: 
                res.map((data) => ({
                    name: data.name,
                    id: data.id,
                    image: data.sprites['front_default'],
                    type: data.types.map((type) => type.type.name).join(', ')
                }))
           }) 
        })
    }

    render()
    {
        return(
            <div class="container">
            <div class="row">
                <div class="text-center" style={{paddingTop: 20}}>
                    <h2>PokeDex</h2>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {
                (this.state.pokemon == "")?
                
                    <h1>Loading</h1>
                :
                
                this.state.pokemon.map(data =>
                    {
                        return (<React.Fragment>
                        <div class="col">
                            <div class="card">
                                <img src={data.image} class="card-img-top" alt="..."/>
                                <div class="card-body text-center">
                                    <h2 class="card-title">{data.name.toUpperCase()}</h2>
                                    <h6 class="card-title">Type: {data.type}</h6>
                                </div>
                            </div>
                        </div>
                        </React.Fragment>)
                    })
                
            }
            </div>
        </div>
            
        )
    }
}

export default PokeDexPage
