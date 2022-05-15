<template>
  <div class="menu">
    <div class="menu_title">
      <div >OUR MENU</div>
      <img src="~/assets/images/Asset 11.svg" />
    </div>
    <div class="menu_content">
      <div class="menu_content_left">
        <div  v-for="(item, name, index) of menuItems" :key="index" >
          <div @click="clickMenu(item, name)" class="menu_item" :class="{ selected_menu_item: item.selected }">{{name}}</div>
          <div @click="clickSubMenu(subItem, name)" v-for="(subItem, itemIndex) of item.items" :key="itemIndex" class="menu_subItem" :class="{ selected_menu_item: subItem.selected }" v-if="item.selected">
            {{subItem.name}}
          </div>
        </div>
      </div>
      <div class="menu_content_right">
        <div v-if="selectedMenu == 'FOOD'" v-for="(menu, index) of data" :key="index" class="menu_content_detail">
          <div class="menu_content_title" v-html="menu.title.toUpperCase()"></div>
          <div v-if="menu.title == 'something to share'"  class="FOOD_menu_content_SHARE">
            <div>
              <div v-for="(item, contentIndex) of menu.items.left" :key="contentIndex">
                <div class="menu_item_title" v-html="item.title"></div>
                <div v-if="item.content" class="menu_item_content" v-html="item.content"></div>
              </div>
            </div>
            <div>
              <div class="line_dotted">................</div>
              <div v-for="(item, contentIndex) of menu.items.right" :key="contentIndex">
                <div class="menu_item_title" v-html="item.title"></div>
                <div v-if="item.content" class="menu_item_content" v-html="item.content"></div>
              </div>
              <div class="line_dotted">................</div>
            </div>
          </div>
          <div v-else style="display: flex; flex:1 1 auto; flex-wrap: wrap">
            <div v-for="(item, contentIndex) of menu.items" :key="contentIndex" class="menu_detail">
              <div class="menu_item_title" v-html="item.title"></div>
              <div v-if="item.content" class="menu_item_content" v-html="item.content"></div>
            </div>
          </div>
        </div>
        
        <div v-if="selectedMenu == 'DRINK'">
          <div v-if="selectedSubMenu == 'ALCOHOLIC'">
            <div v-for="(menu, index) of data" :key="index" class="menu_content_detail">
              <div class="DRINK_menu_content_title">
                <div class="menu_content_title" v-html="menu.title.toUpperCase()"></div>
                <div class="menu_content_sub_title" v-html="menu.discript"></div>
              </div>
              <div v-if="menu.others" class="DRINK_menu_content_others">
                <div>
                  <div v-for="(item, contentIndex) of menu.others.left" :key="contentIndex">
                    <div class="DRINK_menu_title">
                      <div :class="`DRINK_menu_item_${item.type}`" v-html="item.title"></div>
                      <div class="DRINK_menu_item_sub_title" v-html="item.subTitle"></div>
                    </div>
                    <div v-if="item.content" class="menu_item_content" :class="`DRINK_menu_item_content_${item.type}`" v-html="item.content"></div>
                  </div>
                </div>
                <div>
                  <div v-for="(item, contentIndex) of menu.others.right" :key="contentIndex">
                    <div class="DRINK_menu_title">
                      <div :class="`DRINK_menu_item_${item.type}`" v-html="item.title"></div>
                      <div class="DRINK_menu_item_sub_title" v-html="item.subTitle"></div>
                    </div>
                    <div v-if="item.content" class="menu_item_content" :class="`DRINK_menu_item_content_${item.type}`" v-html="item.content"></div>
                  </div>
                </div>
              </div>
              <div style="display: flex; flex:1 1 auto; flex-wrap: wrap">
                <div v-for="(item, contentIndex) of menu.items" :key="contentIndex" class="menu_detail">
                  <div class="DRINK_menu_title" :class="`DRINK_menu_item_${menu.title.toUpperCase()}_${item.type}`">
                    <div :class="`DRINK_menu_item_${item.type}`" v-html="item.title"></div>
                    <div class="DRINK_menu_item_sub_title" v-html="item.subTitle"></div>
                  </div>
                  <div v-if="item.content" class="menu_item_content" :class="`DRINK_menu_item_content_${item.type}`" v-html="item.content"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="selectedSubMenu == 'NON-ALCOHOLIC'">
            <div v-for="(menu, index) of data" :key="index" class="menu_content_detail">
              <div class="DRINK_menu_content_title">
                <div class="menu_content_title" v-html="menu.title.toUpperCase()"></div>
                <div class="menu_content_sub_title" v-html="menu.discript"></div>
              </div>
              <div style="display: flex; flex:1 1 auto; flex-wrap: wrap">
                <div v-for="(item, contentIndex) of menu.items" :key="contentIndex" class="menu_detail">
                  <div class="DRINK_menu_item_item" v-html="item.title"></div>
                  <div class="menu_item_content" v-html="item.content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="selectedMenu == 'SHISHA'" >
          <div class="menu_content_detail">
          <div style="margin-bottom: 20px;">
            <div class="SHISHA_title" v-html="data.title.toUpperCase()"></div>
          </div>
          <div style="display: flex; flex:1 1 auto; flex-wrap: wrap">
            <div v-for="(item, contentIndex) of data.items" :key="contentIndex" class="menu_detail">
              <div class="menu_item_SHISHA_title" v-html="item.title.toUpperCase()"></div>
              <div class="menu_item_SHISHA_content" v-html="item.content"></div>
            </div>
          </div>
            <div class="SHISHA_other">
              <img src="~/assets/images/Asset 14.svg" style="position: absolute;" />
              <ShishaText class="SHISHA_other_text" />
              <div class="SHISHA_other_content"> 
                <div class="SHISHA_other_sub_title" v-html="data.other.subTitle"></div>
                <div class="SHISHA_other_material" v-html="data.other.material"></div>
                <div class="SHISHA_other_guzzle" v-html="data.other.guzzle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuData from '~/assets/data/menuData.json'
export default {
  name: 'Menus',
  data: () => {
      return {
        menuItems: {
          "FOOD": {
            items: [],
            selected: true
          },
          "DRINK": {
            items: [{
              name: "ALCOHOLIC",
              selected: false
            }, {
              name:  "NON-ALCOHOLIC",
              selected: false
            }],
            selected: false
          }, 
          "SHISHA": {
            items: [],
            selected: false
          },
        },
        data: menuData.FOOD,
        selectedMenu: "FOOD",
        selectedSubMenu: null
    }
  },
  methods: {
    clickMenu (item, name) {
      this.selectedMenu = name
      this.data = menuData[name];
      for(const [key, value] of Object.entries(this.menuItems)) {
        value.selected = false;
      }
      item.selected = true;

      if (item.items.length > 0) {
        item.items.forEach(data => {
          data.selected = false;
        })
        item.items[0].selected = true;
        this.data = this.data[item.items[0].name]
        this.selectedSubMenu = item.items[0].name;
      }
    }, 
    clickSubMenu (item, key) {
      const menuItem = this.menuItems[key]
      menuItem.items.forEach(data => {
        data.selected = false;
      })
      item.selected = true;
      this.selectedSubMenu = item.name;
      this.data = menuData[key][item.name]
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
  flex: 1;
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
  opacity: 0.5;
}
.menu_content {
  display: flex;
  max-width: 1440px;
  font-size: 21px;
  font-family: 'JMH';
  width: 100%;
  padding-bottom:130px;
}
.menu_item_content {
  color: #455336;
  font-size: 15px;
  margin-bottom: 40px;
}
.menu_content_title {
  color: #F36F43;
  font-family: "Tempestua";
  font-size: 68px;
  line-height: 60px;
  margin-bottom: 20px;
}
.menu_content_sub_title {
  color: #392417;
  font-size: 21px;
  font-family: 'JMHBold';
  margin-left: 16px;
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
  padding: 4px;
}
.menu_content_detail {
  margin-bottom: 40px
}
.menu_subItem {
  border-left:5px solid #455336;
  margin-bottom: 28px;
  padding-left: 28px;
  line-height: 28px;
  cursor: pointer;
  opacity: 0.5;
}
.selected_menu_item {
  opacity: 1;
}
.SHISHA_title {
  display: inline;
  color: #3A2416;
  font-size: 48px;
  line-height: 41px;
  margin-bottom: 16px;
  background: radial-gradient(circle at 10px -7px, transparent 8px, #F36F43 8px, #3A2416 9px, transparent 9px) repeat-x,
        radial-gradient(circle at 10px 27px, transparent 8px, #F36F43 8px, #F36F43 9px, transparent 9px) repeat-x;
  background-size: 20px 20px;
  background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
}
.SHISHA_other_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 90px;
}
.menu_item_SHISHA_title {
  font-size: 23px;
  color: #F36F43;
  /* font-family: JMHBold; */
}
.menu_item_SHISHA_content {
  color: #455235;
  font-size: 15px;
  font-family: 'JMH';
  margin-bottom: 16px;
}
.SHISHA_other {
  width: 850px;
  height: 380px;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
}
.SHISHA_other_text {
  top: -80px;
  position: absolute;
}
.SHISHA_other_sub_title {
  margin-bottom: 40px;
  font-family: 'JMHBold';
  font-size: 28px;
}
.SHISHA_other_material {
  font-family: 'JMHBold';
  font-size: 21px;
  margin-bottom: 20px;
}
.SHISHA_other_guzzle {
  font-family: 'JMH';
  font-size: 16px;
}
.DRINK_menu_item_title {
  color: #F36F43;
  font-size: 23px;
  font-family: 'JMH';
}
.DRINK_menu_item_item {
  color: #392417;
  font-size: 21px;
  font-family: 'JMHBold';
}
.DRINK_menu_item_sub_title {
  margin-left: 8px;
  color: #392417;
  font-size: 15px;
}
.DRINK_menu_item_content_title {
  margin-bottom: 20px;
}
.DRINK_menu_item_content_item {
  margin-bottom: 40px;
}
.DRINK_menu_item_SPIRITS_item {
  margin-bottom: 40px;
}
.FOOD_menu_content_SHARE {
  display: flex; 
  flex:1 1 auto;
}
.FOOD_menu_content_SHARE > div {
  width: 50%;
}
.DRINK_menu_content_others {
  display: flex; 
  flex:1 1 auto;
}
.DRINK_menu_content_others > div{
  width: 50%;
}
.line_dotted {
  letter-spacing: 10px;
  line-height: 30px; 
  font-weight: bold; 
  color: #F36F43;
  margin-bottom: 40px;
}
.DRINK_menu_title {
  display: flex; 
  align-items: center;
}
.DRINK_menu_content_title {
  display: flex;
  align-items: baseline;
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
    padding-bottom: 50px;
  }
  .menu_content_right {
    width: 100%;
  }
  .menu_content_left {
    width: 100%;
    overflow: scroll;
    margin-bottom: 20px;
    flex-direction: row;
  }
  .menu_content_left::-webkit-scrollbar {
    display:none
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
    margin-bottom: 20px;
  }
  .menu_detail {
    max-width:100%;
    flex: 0 0 100%;
  }
  .menu_content_detail {
    margin-bottom: 28px
  }
  .FOOD_menu_content_SHARE {
    flex-direction: column;
  }
  .FOOD_menu_content_SHARE > div {
    width: 100%;
  }
  .menu_subItem {
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 20px;
    padding-left: 8px;
  }
  .DRINK_menu_content_others {
    flex-direction: column;
  }
  .DRINK_menu_content_others > div{
    width: 100%;
  }
  .line_dotted {
    margin-bottom: 20px;
  }
  .DRINK_menu_item_item {
    font-size: 16px;
  }
  .DRINK_menu_item_title {
    font-size: 18px;
  }
  .DRINK_menu_content_title{
    flex-direction: column;
  }
  .DRINK_menu_content_title > .menu_content_title {
    margin-bottom: 0px;
  }
  .DRINK_menu_content_title > .menu_content_sub_title {
    margin-left: 0px;
    font-size: 18px;
  }
  .DRINK_menu_item_SPIRITS_item {
    margin-bottom: 20px;
  }
  .SHISHA_title {
    font-size: 30px;
  }
  .menu_item_SHISHA_title {
    font-size: 18px;
  }
  .menu_item_SHISHA_content {
    font-size: 14px;
  }
  .SHISHA_other {
    transform: scale(0.4, 0.4);
    transform-origin: top left;
  }
}
</style>
