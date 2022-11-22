/* eslint-disable */
<template>
<MDBRow style="background-color: #000221">
<MDBCol>

  <MDBRow class="align-items-center ps-5 mx-5 mb-3" style="height: 100px; background-color: #000221">
      <MDBCol class="col-example stats align-items-center">  <MDBBtn outline="light" rounded style="font-weight:bold; ">15</MDBBtn>&nbsp;  Researchers  &nbsp;<i class="far fa-user-circle"></i></MDBCol>
      <MDBCol class="col-example stats align-items-center"><MDBBtn outline="light" rounded style="font-weight:bold; ">11</MDBBtn>&nbsp; Partners  &nbsp;<i class="far fa-building"></i> </MDBCol>
      <MDBCol class="col-example stats align-items-center"><MDBBtn outline="light" rounded style="font-weight:bold; ">25</MDBBtn>&nbsp;  Studies  &nbsp;<i class="far fa-newspaper"></i> </MDBCol>
      <MDBCol class="col-example stats align-items-center"><MDBBtn outline="light" rounded style="font-weight:bold; ">1</MDBBtn>&nbsp; Consortium  &nbsp;<i class="far fa-compass" size="lg"></i> </MDBCol>
    </MDBRow>

</MDBCol>
</MDBRow>
<MDBRow>
<MDBCol>
<MDBFooter class="footer" :text="['center', 'white']">
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <MDBBtn
          tag="a"
          outline="light"
          href="https://twitter.com/Disc4all_EU"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
        </MDBBtn>
        <!-- Linkedin -->
        <MDBBtn
          tag="a"
          outline="light"
          href="https://www.linkedin.com/company/disc4all-project/mycompany/"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="linkedin-in"></MDBIcon>
        </MDBBtn>
        <!-- Email -->
        <MDBBtn
          outline="light"
          floating
          class="m-1"
	  aria-controls="exampleModal"
   	  @click="exampleModal=true"
        >
          <MDBIcon iconStyle="far" icon="envelope"></MDBIcon>
        </MDBBtn>
	<MDBModal
    	id="exampleModal"
    	tabindex="-1"
    	labelledby="exampleModalLabel"
    	v-model="exampleModal"
  	>
    	<MDBModalHeader style="background-color: rgba(255, 239, 61, 0.25); border-bottom: 1px solid rgba(0, 2, 33, 0.85)">
      	<MDBModalTitle style="color: rgba(0, 2, 33, 0.85)"> Write to us! </MDBModalTitle>
    	</MDBModalHeader>
    	<MDBModalBody style="background-color: rgba(255, 239, 61, 0.25); color= rgba(0, 2, 33, 0.85); border-bottom: 1px solid rgba(0, 2, 33, 0.85)">
	<form>
        <div class="mb-3">
          <label for="sender-email" class="col-form-label">Your E-Mail: </label>
          <input
            type="email"
            class="form-control"
            id="sender-email"
            :value="modalContent"
          />
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Message:</label>
          <textarea class="form-control" id="message-text"></textarea>
        </div>
      </form>
	</MDBModalBody>
    	<MDBModalFooter style="background-color: rgba(255, 239, 61, 0.25); color= rgba(0, 2, 33, 0.85); border-bottom: 1px solid rgba(0, 2, 33, 0.85)">
      	<MDBBtn class="close" @click="exampleModal = false">Close</MDBBtn>
      	<MDBBtn class="submit">Submit</MDBBtn>
    	</MDBModalFooter>
  	</MDBModal>
      </section>
      <!-- Section: Social media -->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
    <div
      class="text-center p-3 copyright"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2022 Copyright:
      <a class="text-white" href="https://www.upf.edu/"
        > 2022   |   Universitat Pompeu Fabra   |   Barcelona</a
      >
    </div>
    <!-- Copyright -->
  </MDBFooter>
</MDBCol>
</MDBRow>
</template>

<script>
  import { ref } from 'vue';
  import { MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBTextarea, MDBInput,  MDBModalFooter, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBModal,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
      MDBFooter,
      MDBInput,
      MDBTextarea,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBBtn,
      MDBIcon
    },
  setup() {
      const exampleModal = ref(false);
      return {
        exampleModal,
      };
  },
  };
  
</script>


<style>
.footer {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  background: linear-gradient(to right, rgba(0, 2, 33, 0.85), rgba(255, 239, 61, 0.75));
}

.close {
 background-color: rgba(255, 239, 61, 0.45);
 color: rgba(0, 2, 33, 0.85)
}


.stats {

background-color: #000221;
color: white;
font-family: 'Albert Sans', sans-serif;
font-weight: bold;
text-transform: uppercase;
font-size: 20px


}

.submit {
background-color:  rgba(0, 2, 33, 0.85);
color: rgba(255, 239, 61, 0.75)

}

.copyright {
  background-color: #0a4275
}
</style>
