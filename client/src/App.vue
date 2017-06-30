<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <section-first></section-first>
    <section-second></section-second>
    <footer-custom></footer-custom>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import SectionFirst from './components/SectionFirst';
import SectionSecond from './components/SectionSecond';
import FooterCustom from './components/FooterCustom';

export default {
  name: 'app',
  components: {
    Navbar,
    SectionFirst,
    SectionSecond,
    FooterCustom,
  },
};
</script>

<style lang="sass">
// 1. Import the initial variables
@import "~bulma/sass/utilities/initial-variables"

// 2. Set your own initial variables
// Update blue
$blue: #72d0eb
// Add pink and its invert
$pink: #ffb3b3
$pink-invert: #fff
// Add a serif family
// $family-serif: "Merriweather", "Georgia", serif
$family-serif: "Avenir", "Helvetica"

// 3. Set the derived variables
// Use the new pink as the primary color
$primary: $pink
$primary-invert: $pink-invert
// Use the existing orange as the danger color
$danger: $orange
// Use the new serif family
$family-primary: $family-serif
$body-size: 15px

// 4. Import the rest of Bulma
@import "~bulma"

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 5px;
// }

=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius
  padding-left: 14px
  padding-right: 14px

.button
  +border-radius(100px)

</style>
