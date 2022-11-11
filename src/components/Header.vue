/* eslint-disable */
<template>
<MDBNavbar class="navbar navbar-expand-lg gradient-custom" />
<MDBNavbar expand="lg" container>
    <MDBNavbar class="navbar navbar-expand-lg gradient-custom" />
	<MDBNavbarBrand center class="mx-auto ms-5 ps-5 my-2" href="#">
	<img
        src="https://disc4all.upf.edu/wp-content/uploads/2021/09/Disc4all_120.png"
        class="h-auto w-75"
        loading="lazy"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
      class="toggler ms-0"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav right class="ps-5 ms-0 mb-4 mb-lg-0">
        <MDBNavbarItem class="prova" to="#" active style="color: #000221">
          Project
        </MDBNavbarItem>
        <MDBNavbarItem class="prova" href="#">
          Platform
        </MDBNavbarItem>
        <MDBNavbarItem class="prova" href="#">
          Consortium
        </MDBNavbarItem>
        <MDBNavbarItem class="prova" href="#">
          News & Events 
        </MDBNavbarItem>
        <MDBNavbarItem class="prova" href="#">
          Related Projects
        </MDBNavbarItem>
        <MDBBtn class="me-md-2 fw-bolder prova1">
          Contact Us
        </MDBBtn>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>



import {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBProgress, 
    MDBProgressbar
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  export default {
    components: {
      MDBBtn,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem,
      MDBProgress, 
      MDBProgressbar

    },
    setup() {
      const collapse1 = ref(false);
      const dropdown1 = ref(false);
      return {
        collapse1,
        dropdown1
      }
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

  height: 10px;
}


.prova {

  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
  padding: 5px 15px 4px;
  color:  rgba(0.0.61);
}

.prova1 {

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 13px;
  padding: 5px 15px 4px;
  background: rgba(0, 2, 33, 0.85);
  color: rgba(255, 239, 61, 0.75);

}

.toggler {
  color: rgba(0, 2, 33, 0.85);
}


</style>                       
