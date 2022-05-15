<template>
  <div>
    <About id="about"></About>
    <Menus id="menu"></Menus>
    <Event id="event"></Event>
    <Contact id="contact"></Contact>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
@font-face {
    font-family: Tempestua;
    src: url("~/assets/fonts/Tempestua D.otf") format("opentype");
}
@font-face {
    font-family: JMH;
    src: url("~/assets/fonts/jmh_typewriter/JMH Typewriter.otf") format("opentype");
}
@font-face {
    font-family: JMHBlack;
    src: url("~/assets/fonts/jmh_typewriter/JMH Typewriter-Black.otf") format("opentype");
}
@font-face {
    font-family: JMHBold;
    src: url("~/assets/fonts/jmh_typewriter/JMH Typewriter-Bold.otf") format("opentype");
}
@font-face {
    font-family: JMHThin;
    src: url("~/assets/fonts/jmh_typewriter/JMH Typewriter-Thin.otf") format("opentype");
}
</style>
