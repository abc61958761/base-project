<template>
  <div style="text-align:center">
    <div style="padding-bottom: 92px;background: #EEE1E0;">
      <div class="about_title">
        THE BISTRO CONCEPT
      </div>
      <div style="max-width:80%;margin:0 auto;">
        <img src="~/assets/images/Asset 11.svg">
        <p class="about_subtitle">
          We celebrate every moment with our crowd.
        </p>
        <p class="about_subtitle">
          As a new member of the Lab Eat Family,
          Lab Eat Bistro adopts the same experimental and fun spirit. Our team is eager to explore the Lab Eat philosophy
          to a day to day bistro by delivering memorable casual dining experience.
        </p>
      </div>
    </div>
    <Carousel
      v-model="value2"
      loop
      arrow="never"
      dots="inside"
    >
      <CarouselItem
        v-for="(pic,idx) of imgList"
        :key="idx"
      >
        <img :src="pic" style="width:100%">
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value2: 0,
      imgList: [require('~/assets/images/Asset 1.jpg'),
       require('~/assets/images/Asset 1.jpg'),
       require('~/assets/images/Asset 1.jpg'),
       require('~/assets/images/Asset 1.jpg')
       ]
    }
  }
}
</script>
<style scoped>
.about_title {
  color: #455336;
  font-size: 120px;
  /* display: flex;
  justify-content: space-around; */
  font-family: 'Tempestua';
  line-height: 93px;
  padding-top: 163px;
}
.about_subtitle{
  color: #392417;
  font-size: 16px;
  word-wrap:break-word;
  font-family:'JMH';
}
@media screen and (max-width: 600px) {
  .about_title {
    font-size: 60px;
    line-height: 60px;
  }
  .event_title > img{
   width:20px;
  }
  .event_title-bold{
    font-size:50px;
    line-height:50px;
  }
}
</style>
