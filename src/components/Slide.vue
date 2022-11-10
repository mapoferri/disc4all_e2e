<template>


<div class="grid">
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <MDBCarousel
    v-model="carousel5"
    :items="items5"
    :controls="false"
    :interval="false"
    />
  </div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
 </div>
</template>

<script>
import { ref } from "vue";
  import { MDBCarousel, MDBBtn } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCarousel,
      MDBBtn
    },
    setup() {
      const items5 = [
        {
	  src: "https://www.publicdomainpictures.net/pictures/90000/velka/grunge-blue-banner.jpg",	
          alt: "tst",
          label: "Training network to advance integrated computational simulations in translational medicine, applied to intervertebral disc degeneration",
          caption: "",
	  interval: 10
        },
        {
	  src: "https://www.publicdomainpictures.net/pictures/90000/velka/grunge-blue-banner.jpg", 
	  alt: "tst",
          label: "Second slide label",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
	  src: "https://www.publicdomainpictures.net/pictures/90000/velka/grunge-blue-banner.jpg",
	  alt: "tst",
          label: "Third slide label",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ];
      const carousel5 = ref(0);
      return {
        items5,
        carousel5
      };
    }
  };

</script>

<style>

.gradient-custom {
  /* fallback for old browsers */
  background: #001a8f;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(0, 26, 143, 0.75), rgba(255, 239, 61, 0.75));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(0, 2, 33, 0.85), rgba(255, 239, 61, 0.75));

  height: 10px
}



.slide {
  background: rgba(255, 239, 61, 0.35);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 13px;
  padding: 5px 15px 4px; 
}

</style>                       
