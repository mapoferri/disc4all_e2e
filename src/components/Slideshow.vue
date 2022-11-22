/* eslint-disable */


<template>
<MDBCol class="slide">
<MDBRow class="mx-5 my-0 py-0 slide">
  <div
      class="p-0 text-center bg-image rounded-9"
      style="
        background-image: url('');
        height: 300px;
        background-size: cover;
	background-color: #000221
      "
    >
        <div class="mask" style="background-color: rgba(0, 2, 33, 0.65);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
	    <h2> Central platform for Data Access and Tools Management</h2>
        <h3 style="font-variant: small-caps ;text-transform:lowercase; font-size: 18px"> Disc4All project</h3>
	<h5 class="text-center" style="font-variant: small-caps; text-transform:lowercase;  color: rgba(255, 239, 61, 0.60)">LBP is the largest cause of morbidity worldwide, yet there remains controversy as to the specific cause leading to poor treatment options and prognosis. LDD is reported to account for 50% of LBP in young adults, but the interplay of factors from genetics, environmental, cellular responses and social and psychological factors is poorly understood. Unfortunately, the integration of such data into a holistic and rational map of degenerative processes and risk factors has not been achieved, requiring creation of professional crosscompetencies, which current training programmes fail to address.</h5> 
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->

</MDBRow>
</MDBCol>

<MDBCol sm="12">
	<MDBRow class="px-0 mx-0 my-0 slide">
		<MDBCardGroup>
			<MDBCard text="left" class="boxes">
				<MDBCardBody>
				<MDBCardText>

				<h6> From this page you can access the openVRE as the workspace of the project, where you can upload, analyse and visualize your data and results for Simulations and Models in the diagnosis for Intervertebral Disc Degeneration. You can also find direct access to the Data platform and catalog, for uploading and storing your data. 
				</h6>
				</MDBCardText>
				</MDBCardBody>
      			</MDBCard>

      			<MDBCard text="center" class="boxes">
        			<MDBCardBody>
          			<MDBCardText>
            			Click here to access the Data Catalogue and Data Frameworks available for your data
          			</MDBCardText>
          				<MDBBtn tag="a" href="#!" class="button">Disc4All Data  <MDBIcon icon="database" /> </MDBBtn>
        			</MDBCardBody>
      			</MDBCard>
     			<MDBCard text="center" class="boxes">
        			<MDBCardBody>
         	 		<MDBCardText>
          			Click here to access the Tools and Workflow platform for diagnosis investigation
          			</MDBCardText>
          			<RouterLink to="/prova"><MDBBtn tag="a" class="button">Launch openVRE <MDBIcon icon="cubes" /></MDBBtn></RouterLink>
        			</MDBCardBody>
      			</MDBCard>
		</MDBCardGroup>
  	</MDBRow>
</MDBCol>


<MDBRow class="mx-0 my-0 py-0">
  <div
      class="p-3 text-center bg-image"
      style="
        background-image: url('https://i.postimg.cc/wBZmG6fb/eudesign.png');
        height: 300px;
	background-size: cover;
      "
    >
	<div class="mask" style="background-color: rgba(0, 2, 33, 0.55);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3 itn">Marie Sklodowska Curie actions</h1>
            <h4 class="mb-3 itn2"> This is an ITN programmes within the framework of the European Commission’s Marie Sklodowska-Curie Actions support joint competitive programmes for training in research or joint doctorates.</h4>
            <MDBBtn tag="a" size="lg" lg  class="button" href="https://disc4all.upf.edu/" role="button"
              >Official Disc4All ITN</MDBBtn>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->

</MDBRow>
<RouterView />
</template>

<script>
import { ref } from "vue";
  import { MDBFooter, MDBListGroup, MDBListGroupItem, MDBBadge, MDBCardFooter, MDBIcon, MDBCol, MDBRow, MDBCarousel, MDBBtn, MDBCard, MDBCardBody, MDBCardImg, MDBContainer,  MDBCardTitle, MDBCardText, MDBCardHeader } from "mdb-vue-ui-kit";
  import { RouterLink, RouterView } from "vue-router";
  export default {
    components: {
      MDBListGroup,
      MDBListGroupItem,
      MDBCardHeader,
      MDBBadge,
      MDBCardFooter,
      MDBCardImg,
      MDBFooter,
      MDBIcon,
      MDBCol,
      MDBRow,
      MDBCarousel,
      MDBBtn,
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBContainer
    },
    setup() {
      const items1 = [
        {
	  src: "https://i.postimg.cc/vThGWj1H/image.jpg",	
          alt: "...",
          label: "An EU infrastructure for multi-omics study in Intervertebral Disc Degeneration",
          caption: "Developing the first centralised platform",
	  interval: 10
        },
        {
	  src: "https://i.postimg.cc/vThGWj1H/image.jpg", 
	  alt: "...",
          label: "Training network to advance integrated computational simulations in translational medicine",
          caption: "International ESRs community for research in spine diseases"
        },
        {
	  src: "https://i.postimg.cc/vThGWj1H/image.jpg",
	  alt: "...",
          label: "Developing the first centralised platform",
          caption:
            "For data sharing and pre-diagnosis tools for investigating Low Back Pain"
        }
      ];
      const carousel1 = ref(0);
      return {
        items1,
        carousel1
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
  background: linear-gradient(to right, #000221 , rgba(255, 239, 61, 0.75));

  height: 10px
}

.itn {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  color: rgba(255, 239, 61, 0.65)
}

.itn2 {

  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  color: rgba(255, 239, 61, 0.45)

}

.slide {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 400;
  font-variant: small-caps;
  font-size: 17px;
  color: rgba(255, 239, 61)  !important;
  background-color:  #000221;
}


.fix {
  position: relative;
}


.boxes {
  color: white;
  font-family: 'Albert Sans', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #000221;

}

.button {
  background-color: rgba(255, 239, 61, 0.45);
  color: #000221;
 font-family: 'ALbert Sans', sans-serif;
  font-weight: 400;

}

.footer {

 background: linear-gradient(to right, #000221, rgba(255, 239, 61, 0.75));
}

.cartas {

  font-family: 'Albert Sans', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  color: #000221;

}

.testo {

  font-family: 'Albert Sans', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #000221;


}


</style>                       
