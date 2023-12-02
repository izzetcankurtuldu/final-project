import React from 'react'

function GoogleMaps({iframeData}) {
  return (
    <div>
      <div className="map-responsive">
      <div dangerouslySetInnerHTML={ {__html: iframeData} } />
      </div>
    </div>
  )
}

export default GoogleMaps