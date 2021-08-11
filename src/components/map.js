import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic3phY3NhYm95IiwiYSI6ImNrczdiY2VpajBqa24ybm9jNG81bTJic3QifQ.xkaPbA6k_6zApcjSi55Itw"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      // Empire State Building [lng, lat]
      center: [-73.9856, 40.7497],
      zoom: 10,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default Map
