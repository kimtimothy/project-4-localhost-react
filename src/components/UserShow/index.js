import React, { Component } from 'react'
import MapContainer from '../MapContainer'
import {Marker} from 'google-maps-react'
import './style.css'


class UserShow extends Component {
    state = {
        user: {}
    }
    async componentDidMount(){
        const reqUser = await fetch(`${process.env.REACT_APP_API_URL}/users/${this.props.id}`)
        console.log(reqUser, '<----reqUser')
        const parsedUser = await reqUser.json()
        this.setState({
            user: parsedUser
        })
    }
    render(){
        return(
            <div>
            <div>
            {
            this.props.postsCreated.map((e, i) =>
            <div key={i}>
            <div variant="top" src={e.homePics} className='card-img-top'/>
                <div>
                    <div className="title">{e.title}</div>
                    <div>
                        {e.info}
                    </div>
                   
                </div>
            </div>
            )
            }
        </div>
        </div>
        )
        
        return(
        <div className="map">
        <MapContainer
            google={this.props.google}
            center={{lat: this.props.lat, lng: this.props.long }}
            height='300px'
            zoom={15}
        />
        </div>
        )
    }
}

export default UserShow