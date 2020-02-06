import React from 'react';

import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card/Card'
import PlaceItem from './PlaceItem'
import Button from '../../shared/components/FormElements/Button'


const PlaceList = props => {

    if (props.item.length === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No place found. Maybe create one?</h2>
                <Button to='/places/new'>Share Place</Button>
            </Card>
        </div>
    }

    return (
        <ul className="place-list">
            {props.item.map(place => {
                return <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorID={place.creator}
                    coordinates={place.location}
                >
                </PlaceItem>
            })}
        </ul>
    )
}

export default PlaceList