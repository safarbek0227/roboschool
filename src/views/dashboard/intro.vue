<template>
  <div class="page-data">
    <div class="section">
        <br><br>
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <h1 class="w-100">1) arduino nima</h1>
            <img src="@/assets/fixing-robot.png" alt="">
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officia ipsum blanditiis autem hic temporibus consectetur commodi recusandae nisi odit? Unde facere nulla similique, explicabo maiores necessitatibus consectetur. Pariatur, ipsa.</h3>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card sticky"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
  .section{
    padding: 25px;
  }
  .section .row{
    margin-left: 45px;
  }
  .section .card{
    display: flex;
    flex-wrap: wrap;
    height: unset;
    padding: 25px;
    box-shadow: inset 5px 5px 10px #a9a9aa77,
    inset -5px -5px 10px #ffffff7e;
  }
  .sticky{
    position: sticky;
    top: 100px;
    background: dodgerblue;
}
.w-100{
  width: 100%;
}
@media (max-width: 992px) {
  .sticky{
    position: relative;
  }
  
}
</style>