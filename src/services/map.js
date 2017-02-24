var map = null

function init (id) {
  map = new window.BMap.Map(id)
  map.setMapStyle({ style: 'grayscale' })
  var top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT, type: window.BMAP_NAVIGATION_CONTROL_SMALL})
  map.addControl(top_right_navigation)
}

function setPoint (address) {
  map.setCurrentCity(address.city)
  map.centerAndZoom(new window.BMap.Point(address.x, address.y), 14)

  var point = new window.BMap.Point(address.x, address.y)
  var opts = {
    width: 200,
    height: 150,
    title: address.name,
    enableMessage: true,
    message: ''
  }
  var infoWindow = new window.BMap.InfoWindow(address.content, opts)
  var marker = new window.BMap.Marker(point)
  map.addOverlay(marker)
  map.openInfoWindow(infoWindow, point)
  marker.addEventListener('click', function () {
    map.openInfoWindow(infoWindow, point)
  })
}

export default { init, setPoint }
