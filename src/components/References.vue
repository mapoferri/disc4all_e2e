<template>
<MDBContainer>
  <MDBRow>
    <MDBCol col="4" class="slide">
      col="4"<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div
      gets wrapped onto a new line as one contiguous unit.
    </MDBCol>
    <MDBCol col="6" class="slide">
      col="6"<br />Subsequent columns continue along the new line.
    </MDBCol>
  </MDBRow>
</MDBContainer>
</template>

<script setup lang="ts">
  import { MDBCol, MDBRow } from 'mdb-vue-ui-kit';
</script>


<style>
.slide {
  background: rgba(255, 239, 61, 0.35);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  color: rgba(255, 239, 61, 0.75)  !important;
  background-color: rgba(255, 239, 61, 0.75);
}


.fix {
  position: relative;
}


.boxes {
  color: rgba(0, 2, 33, 0.85);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-transform: uppercase;

}

.button {
  background-color: rgba(255, 239, 61, 0.45);
  color: rgba(0, 2, 33, 0.85)

}
</style>
