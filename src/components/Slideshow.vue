<template>
<MDBRow>
    <MDBCol lg="12" class="slide"><MDBCarousel
    v-model="carousel1"
    :items="items1"
    fade
    :controls="false"
    innerClass="shadow-4-strong"
  />
</MDBCol>
<MDBCol lg="12">
<MDBRow>
    <MDBCol sm="6 gx-0">
      <MDBCard text="center" class="boxes">
        <MDBCardBody>
          <MDBCardTitle>Data Sharing <MDBIcon icon="database" /> </MDBCardTitle>
          <MDBCardText>
            Click here to access the Data Catalogue and Data Frameworks available for your data
          </MDBCardText>
          <MDBBtn tag="a" href="#!" class="button">Disc4All Data</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol sm="6 gx-0">
      <MDBCard text="center" class="boxes">
        <MDBCardBody>
          <MDBCardTitle>Tools Investigation <MDBIcon icon="cubes" /></MDBCardTitle>
          <MDBCardText>
          Click here to access the Tools and Workflow platform for diagnosis investigation
	  </MDBCardText>
          <MDBBtn tag="a" href="#!" class="button">Disc4All tools</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBCol>
<MDBCol sm="12">
  <MDBRow class="g-3 mx-2 my-1" :cols="['1', 'md-5']">
    <MDBCol>
      <MDBCard shadow="2" bg="white" class="cartas h-100" >
        <MDBCardImg src="https://www.showsbee.com/newmaker/www/u/2022/20229/cfr_img/ORS-PSRS.png" top alt="tst"/>
        <MDBCardBody>  <MDBBadge class="button position-relative top-0 start-0">Latest</MDBBadge>
          <MDBCardTitle>ORS PSRS 6th International Spine Research Symposium </MDBCardTitle>
          <MDBCardText class="testo">
      	  The meeting will be held at Skytop Lodge located in picturesque Pocono Mountains, Pennsylvania, a short drive from Philadelphia from November 6-10, 2022. 
	  </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
     <MDBCard shadow="2" bg="white" class="cartas h-100" >
        <MDBCardImg src="https://i0.wp.com/orthocg.com/wp-content/uploads/2022/04/SpineWeek-2023.png?fit=2312%2C1540&ssl=1" top alt="tst"/>
        <MDBCardBody>  <MDBBadge class="button position-relative top-0 start-0">Latest</MDBBadge>
          <MDBCardTitle>Spineweek 2023 </MDBCardTitle>
          <MDBCardText class="testo">
	15 November 2022:Deadline Call for Abstracts.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
	 <MDBCard shadow="2" bg="white" class="cartas h-100" >
        <MDBCardImg src="https://marie-sklodowska-curie-actions.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_large/public/2022-08/640x360_Night_English-wt.jpg?h=ae1281eb&itok=mv1mYXDU" top alt="tst"/>
        <MDBCardBody>  <MDBBadge class="button position-relative top-0 start-0">Latest</MDBBadge>
          <MDBCardTitle>European Researchers' Night </MDBCardTitle>
          <MDBCardText class="testo">
        	This year, the event will take place in 26 countries on Friday 30 September 2022.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
	 <MDBCard shadow="2" bg="white" class="cartas h-100" >
        <MDBCardImg src="https://pbs.twimg.com/ext_tw_video_thumb/1582289669710139394/pu/img/UDptnNvByKLKkkKN.jpg" top alt="tst"/>
        <MDBCardBody>  <MDBBadge class="button position-relative top-0 start-0">Latest</MDBBadge>
          <MDBCardTitle>VPH 2022 CONFERENCE VIRTUAL PHYSIOLOGICAL HUMAN </MDBCardTitle>
          <MDBCardText class="testo">
	  Digital twins for personalized treatment development and clinical trials, 6 - 9 September 2022in Porto, Portugal.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard shadow="2" bg="white" class="cartas h-100" >
        <MDBCardImg src="https://eventum.upf.edu/_files/_event/_78383/_header_img/_107971.png" top alt="tst"/>
        <MDBCardBody>  <MDBBadge class="button position-relative top-0 start-0">Latest</MDBBadge>
          <MDBCardTitle> 6th Barcelona VPH SUMMER SCHOOL  </MDBCardTitle>
          <MDBCardText class="testo">
		The 6th VPH Summer School will be held on May 23-27, 2022, and will focus on Highly Multifactorial Disorders. 
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
</MDBRow>
</MDBCol>


<MDBRow>
<MDBCol xl="12 my-0">

  <header fluid>
  <div
      class="p-3 text-center bg-image"
      style="
        background-image: url('https://cdn.freebiesupply.com/logos/thumbs/2x/eu-logo.png');
        height: 400px;
        margin-top: 58px;
	background-size: cover;
      "
    >
	<div class="mask" style="background-color: rgba(0, 0, 61, 0.85);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3 itn">Marie Sklodowska Curie actions</h1>
            <h4 class="mb-3 itn2">The European innovative training networks (ITN) aim to train a new generation of researchers in their early stages who are creative, enterprising and innovative, capable of dealing with the challenges of the future and turn knowledge and ideas into products and services with an economic and a social benefit. ITN programmes within the framework of the European Commission’s Marie Sklodowska-Curie Actions support joint competitive programmes for training in research or joint doctorates. These programmes will be implemented by partnerships of universities, research centres, businesses, SMEs and other stakeholders in Europe and the rest of the world.</h4>
            <MDBBtn tag="a" size="lg" lg  class="button" href="https://disc4all.upf.edu/" role="button"
              >Official Disc4All ITN</MDBBtn>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>


</MDBCol>
</MDBRow>

<MDBRow>

<MDBListGroup horizontal="md" class="list-group-light px-3 gx-2 mx-4">
  <MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://www.cmb.cat/wp-content/uploads/2014/01/BSC-Logo.jpg"
        alt=""
        style="width: 100px; height: 100px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://www.upf.edu/documents/7283915/7376028/simbol.png/50ed58bf-66df-ef68-e34e-ac1b3983c2f7?t=1484925917916"
        alt=""
        style="width: 150px; height: 150px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>


<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/University_of_Li%C3%A8ge_logo.svg/2560px-University_of_Li%C3%A8ge_logo.svg.png"
        alt=""
        style="width: 150px; height: 70px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>

<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://i0.wp.com/www.bcnuej.org/wp-content/uploads/2013/11/imim.png"
        alt=""
        style="width: 150px; height: 120px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>



<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="http://www.ub.edu/cursosmedsccm/wp-content/uploads/2017/09/logosbeques_universitat_de_barcelona-1-1.png"
        alt=""
        style="width: 120px; height: 120px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
<MDBListGroupItem class="d-flex justify-content-between align-items-center mx-2">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/King%27s_College_London_logo.svg"
        alt=""
        style="width: 110px; height: 80px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Logo_Universit%C3%A4t_Bern.svg/2048px-Logo_Universit%C3%A4t_Bern.svg.png"
        alt=""
        style="width: 100px; height: 100px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>

<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://app.scientist.com/providers/protatonce/logo"
        alt=""
        style="width: 150px; height: 80px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="http://nationaltechnicianscentre.ac.uk/wp-content/uploads/2021/02/NTDC-Partner-Sheffield-Hallam-University.jpg"
        alt=""
        style="width: 120px; height: 80px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>

<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://www.sttinfo.fi/data/images/00666/c2a02b06-3c1b-46f1-8fbe-360b5584159e-w_300_h_100.png"
        alt=""
        style="width: 100px; height: 90px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
</MDBListGroup>

</MDBRow>



<MDBRow>

<MDBListGroup horizontal="md" class="list-group-light px-3 mx-4">
<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://insilico.world/sito/wp-content/uploads/2021/06/Insilico-World-Consortium-Ist.jpg"
        alt=""
        style="width: 270px; height: 80px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://image.itea3.org/Gqj20BvP9gKoPQKb-zOh_XRXFP8=/350x/center/https://itea4.org/img/o/2174-1619694909.jpg"
        alt=""
        style="width: 150px; height: 150px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
<MDBListGroupItem class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center pe-2">
      <img
        src="https://app.scientist.com/providers/protatonce/logo"
        alt=""
        style="width: 150px; height: 80px"
      />
      <div class="ms-3">
      </div>
    </div>
  </MDBListGroupItem>
</MDBListGroup>


</MDBRow>


</MDBRow>

</template>
<script>
import { ref } from "vue";
  import { MDBFooter, MDBListGroup, MDBListGroupItem, MDBBadge, MDBCardFooter, MDBIcon, MDBCol, MDBRow, MDBCarousel, MDBBtn, MDBCard, MDBCardBody, MDBCardImg, MDBContainer,  MDBCardTitle, MDBCardText, MDBCardHeader } from "mdb-vue-ui-kit";
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
  font-size: 13px;
  color: rgba(255, 239, 61, 0.45)

}

.slide {
  background: rgba(255, 239, 61, 0.35);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 17px;
  color: rgba(255, 239, 61)  !important;
  background-color: rgba(255, 239, 61, 0.75);
}


.fix {
  position: relative;
}


.boxes {
  color: #000221;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-transform: uppercase;

}

.button {
  background-color: rgba(255, 239, 61, 0.45);
  color: #000221

}

.footer {

 background: linear-gradient(to right, #000221, rgba(255, 239, 61, 0.75));
}

.cartas {

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  color: #000221;

}

.testo {

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #000221;


}


</style>                       
