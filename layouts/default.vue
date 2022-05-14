<template>
  <div>
    <Layout>
      <header>
        <ul class="layout-header">
          <li v-for="(tab,idx) of tabs" :key="idx">
            <img v-show="tab.img" :src="tab.value">
            <span v-show="!tab.img">{{ tab.value.toUpperCase() }} </span>
          </li>
        </ul>
      </header>
      <Content class="content">
        <Nuxt />
      </Content>
      <footer>
        <span class="footer-button">{{ info.toUpperCase() }}</span>
        <img :src="require('~/assets/images/Asset 5.svg')">
      </footer>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
          { img: false, value: 'about' },
          { img: false, value: 'menu' },
          { img: true, value: require('~/assets/images/Asset 3.svg') },
          { img: false, value: 'event' },
          { img: false, value: 'contact' }
        ],
      info: 'Book now'
    }
  }

}
</script>

<style  scoped>
.content {
  min-height: 100vh;
  padding-top: 64px;
}
header{
  position: fixed;
  width: 100%;
}
.layout-header{
  height: 64px;
  display: flex;
  background: #523931;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  color: #fff;
  font-family: 'JMH';
}
.layout-header >li > img{
  width: 120px;
  transform: translate(0px,20px);
}
footer{
  position: sticky;
  width: 90px;
  display: flex;
  margin: 0 auto;
  transform: translate(-10px);
  bottom: 0;
}
.footer-button{
  position: absolute;
  color: #fff;
  font-size: 12px;
  transform: translate(12px,20px);
  font-weight: 500;
}
footer:hover{
  transition-timing-function:all 1s linear;
  transform: scale(1.1,1.1) translate(-10px);
}
</style>
