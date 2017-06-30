<template>
  <nav class="nav container-blue">
    <div class="nav-left">
      <a class="nav-item">
        <img src="../assets/bakwan_logo.png" alt="Bakwan logo">
      </a>
    </div>


    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a class="nav-item">
        Home
      </a>
      <a class="nav-item">
        About
      </a>
      <a class="nav-item">
        Sign in
      </a>

      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary is-inverted is-outlined">
              <span>Sign up</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
.container-blue {
  background: #ff4e50;
  /*border-radius: 20px;*/
}

.nav-item {
  color: white;
  font-weight: bold;
}

</style>
