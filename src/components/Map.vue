<template>
  <div id="app">
    <div class="content">
      <world-map
        :items="items"
        :gradient="gradient"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
const LOCATIONS = [
  [0, 0],
  [57.73283538388789, -4.241936641313221],
  [51.485905768057684, -0.14113400412646243],
  [37.32475021003936, -122.01721335742904],
  [-54.62752473177673, -67.65375534812648],
  [-24.95315154448069, 45.115388878969846],
  [31.93205160405814, 130.96855844480496],
  [39.85273248216445, -74.43660081415356],
  [-34.458802502666884, 19.732674269808914],
  [-46.095954579349495, 168.56824018104518],
];

export default {
  name: "App",
  data: () => ({
    width: 1600,
    height: 900,
    gradient: [
      "#DFEBFF",
      "#307CFF",
      "#4B4EEF",
      "#33307A",
      "#242748",
      "#962E5B",
      "#943157",
      "#FDE28B",
    ],
    items: LOCATIONS.map((location) => ({
      name: `location-${Math.random()}`,
      location,
      value: Math.random() * 100,
    })),
  }),
};
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

