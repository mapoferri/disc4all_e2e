<template>
<div id="map-with-bullets"></div>
</template>

<script>

const map = document.getElementById('map-with-bullets');

const mapInstance = new VectorMap(map, {
  readonly: true,
  tooltips: false,
  hover: false,
  fill: '#E0E0E0',
  stroke: '#fff',
  btnClass: 'btn-secondary',
  markers: [
    {
      x: 533,
      y: 290,
      label: 'Warsaw',
      type: 'bullet',
      fill: '#B23CFD',
    },
    {
      x: 267,
      y: 337,
      label: 'New York',
      type: 'bullet',
      fill: '#FFA900',
    },
    {
      x: 474,
      y: 294,
      label: 'London',
      type: 'bullet',
      fill: '#F93154',
    },
    {
      x: 505,
      y: 252,
      label: 'Oslo',
      type: 'bullet',
      fill: '#39C0ED',
    },
    {
      x: 481,
      y: 308,
      label: 'Paris',
      type: 'bullet',
      fill: '#00B74A',
    },
    {
      x: 800,
      y: 338,
      label: 'Beijing',
      type: 'bullet',
      fill: '#1266F1',
    },
  ],
});

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #1d2b41;
  margin: 0;
  padding: 0;
}
</style>

