import React from 'react'
import { APIProvider, Map , Marker } from '@vis.gl/react-google-maps'

export const Maps = () => {
    const position = {lat: 32.72983299115272 , lng:-97.34209987153314 }
  return (
<APIProvider apiKey='AIzaSyCmHhG0Lh9cU8S9nLiARC6hcmXKuhULmI4'>
    <Map center={position} zoom={10}>
        <Marker position={position} />
    </Map>
</APIProvider>
  )
}
