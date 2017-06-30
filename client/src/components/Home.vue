<template>

    <div class="container-blue">

      <div class="banner">
        <p class="banner-text-1">
          Your Favorite Bakwan
        </p>



        <div class="button-big-center">
          <a class="button button-custom">
            <span>Learn more</span>
          </a>
        </div>




        <p class="banner-text-2">
          Fresh and best ingredients. Try them today!
        </p>

      </div> <!-- end of banner -->

  </div> <!-- end of container-blue -->

</template>

<script>
export default {
};
</script>

<style>
body {
    /*background-image: url("../assets/background_02.png");*/
}

.container-blue {
  background: #ff4e50;
  /*#0099FF;*/
  /*border-radius: 20px;*/
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("../assets/bakwan_banner_02.png");
  background-repeat: no-repeat;
  background-position: center;

  /*padding-top: 20px;*/
  /*padding-bottom: 30px;*/
  padding: 30 0px;

}

.banner-image {
  /*margin: auto;*/
}

img {
    margin: auto;
}

.banner {
  /*margin: auto;*/
  /*padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;*/
  /*border-top: 1px solid #0099FF; */
}

.banner-text-1 {
  margin: auto;
  font-size: 5em;
  text-align: center;
  font-weight: bold;
  color: white;
  max-width: 700px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.banner-text-2 {
  margin: auto;
  font-size: 2em;
  text-align: center;
  font-weight: bold;
  color: white;
  max-width: 700px;
  padding-top: 70px;
  padding-bottom: 20px; }

.button-big {
  margin: auto;
  border-radius: 100px;
  background: white;
  padding: 20px;
  width: 600px;
  height: 110px;
  line-height: 110px;
  text-align: center; }

.button-big-text {
  display: inline-block;
  font-size: 4.5em;
  font-weight: bold;
  vertical-align: middle;
  line-height: normal; }

.button-big-center {
  margin: auto;
  padding: 20px;
  width: 600px;
  height: 110px;
  line-height: 110px;
  text-align: center;
}

.button-custom {
  font-size: 2em;
  font-weight: bold;
  padding: 0 30px;

}
</style>
