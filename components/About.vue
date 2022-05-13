<template>
    <div class="menu">
      <div style="margin-bottom: 92px">
        <div class="menu_title">OUR MENU</div>
        <img src="~/assets/images/Asset 11.svg" />
      </div>
      <div class="menu_content">
        <div class="menu_content_left">
          <div v-for="(item, index) of menuItems" :key="index" class="menu_item">{{item}}</div>
        </div>
        <div class="menu_content_right">
          <div v-for="(foodData, index) of data['FOOD']" :key="index">
            <div class="menu_content_title" v-html="foodData.title.toUpperCase()"></div>
            <div style="display: flex; flex:1 1 auto; flex-wrap: wrap">
              <div v-for="(item, contentIndex) of foodData.items" :key="contentIndex" style="max-width:50%; flex: 0 0 50%; margin-bottom: 40px; padding: 4px;">
                <div class="menu_item_title" v-html="item.title"></div>
                <div class="menu_item_content" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import menuData from '~/assets/data/menu.json'
export default {
  name: 'About',
  data: () => {
      return {
        menuItems: ['FOOD', 'DRINK', 'DINNER', 'SHISHA'],
        data: menuData
    }
  }
}
</script>

<style scoped>
.menu {
  background: #FFFDF8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 0 175px; */
  flex: 1;
  /* max-width: 1024px; */
  align-items: center;
}
.menu_title {
  color: #455336;
  font-size: 120px;
  display: flex;
  justify-content: space-around;
  font-family: 'Tempestua';
  line-height: 136px;
}
/* .menu_items {
} */
.menu_item {
  color: #455336;
  font-size: 34px;
  z-index:1;
  background-image: url('~/assets/images/Asset 9.svg');
  background-repeat: no-repeat;
  width: 296px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.menu_content {
  display: flex;
  max-width: 1440px;
}
.menu_content_title {
  color: #F36F43;
  font-size: 68px;
  letter-spacing: 0px;
  line-height: 60px;
  font-family: 'Tempestua';
}
.menu_item_title {
  color: #392417;
  font-size: 21px;
  font-family: 'JMH';
}
.menu_item_content {
  color: #455336;
  font-size: 15px;
}
.menu_content_right {
  height: 600px;
  overflow-y: auto;
  width: 70%;
}
.menu_content_left {
  width: 30%;
  font-family: 'Copperplate';
  letter-spacing: 0px;
}

</style>
