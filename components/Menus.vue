<template>
  <div class="menu">
    <div class="menu_title">
      <div >OUR MENU</div>
      <img src="~/assets/images/Asset 11.svg" />
    </div>
    <div class="menu_content">
      <div class="menu_content_left">
        <div>
          <div @click="clickMenu(name)" v-for="(item, name, index) of menuItems" :key="index" class="menu_item">{{name}}</div>
        </div>
      </div>
      <div class="menu_content_right">
        <div v-for="(menu, index) of data" :key="index" class="menu_content_detail">
          <div class="menu_content_title" v-html="menu.title.toUpperCase()"></div>
          <div style="display: flex; flex:1 1 auto; flex-wrap: wrap">
            <div v-for="(item, contentIndex) of menu.items" :key="contentIndex" class="menu_detail">
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
  name: 'Menus',
  data: () => {
      return {
        menuItems: menuData,
        data: menuData.FOOD
    }
  },
  methods: {
    clickMenu (item) {
      console.log(item)
      this.data = menuData[item]
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
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  line-height: 136px;
  margin-top: 80px;
}
.menu_item {
  color: #455336;
  font-size: 34px;
  z-index:1;
  background-image: url('~/assets/images/Asset 9.svg');
  background-repeat: no-repeat;
  width: 280px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
}
.menu_content {
  display: flex;
  max-width: 1440px;
  font-size: 21px;
  font-family: 'JMH';
}
.menu_item_content {
  color: #455336;
  font-size: 15px;
}
.menu_content_title {
  color: #F36F43;
  font-family: Tempestua;
  font-size: 68px;
}
.menu_content_right {
  height: 700px;
  overflow-y: auto;
  width: 70%;
}
.menu_content_right::-webkit-scrollbar {
  display:none
}
.menu_content_left {
  width: 30%;
  font-family: 'Copperplate';
  letter-spacing: 0px;
  display: flex;
  flex-direction: column;
}
.menu_detail {
  max-width:50%;
  flex: 0 0 50%;
  margin-bottom: 40px;
  padding: 4px;
}
.menu_content_detail {
  margin-bottom: 40px
}
@media screen and (max-width: 600px) {
  .menu {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
  .menu_title {
    font-size: 60px;
    line-height: 80px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  .menu_content {
    flex-direction: column;
    width: 100%;
  }
  .menu_content_right {
    width: 100%;
  }
  .menu_content_left {
    width: 100%;
    overflow: scroll;
    margin-bottom: 20px;
  }
  .menu_content_left::-webkit-scrollbar {
    display:none
  }
  .menu_content_left > div {
    display: flex;
    flex-direction: row;
    width: max-content;
    flex: 1;
  }
  .menu_item {
    width: 120px;
    font-size: 18px;
    height: 50px;
    margin: 8px;
  }
  .menu_content_title {
    font-size: 36px;
    line-height: 30px;
  }
  .menu_item_title {
    font-size: 16px;
  }
  .menu_item_content {
    font-size: 12px;
  }
  .menu_detail {
    max-width:100%;
    flex: 0 0 100%;
    margin-bottom: 20px;
  }
  .menu_content_detail {
    margin-bottom: 28px
  }
}
</style>
