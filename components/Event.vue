<template>
  <div style="text-align:center">
    <div style="padding-bottom: 92px;background: #EEE1E0;">
      <div class="event_title">
        <img src="~/assets/images/Asset 8.svg">
        <div>
          <div>
            UNIQUE VENUE FOR
          </div>
          <div class="event_title-bold">
            CELEBRATION
          </div>
        </div>
      </div>
      <div class="event_subtitle">
        <p v-for="(info,idx) of infoList" :key="idx" class="event_subtitle-info">
          {{ info }}
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
      imgList: [require('~/assets/images/Asset 2.jpg'),
       require('~/assets/images/Asset 2.jpg'),
       require('~/assets/images/Asset 2.jpg'),
       require('~/assets/images/Asset 2.jpg')
      ],
      infoList: [
        'The lively atmosphere makes Lab Eat Bistro the perfect venue to hold celebrations.',
       ' - Industrial-styled featuring red brick walls - Spacious dining area with 3 storeys',
       '- Spacious dining area with 3 storeys'
      ]
    }
  }
}
</script>
<style scoped>
.event_title {
  color: #455336;
  font-size: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Tempestua';
  line-height: 93px;
  padding-top: 163px;
}
.event_title > img{
  width:40px;
}
.event_title-bold{
  font-size:168px;
  line-height:120px;
}
.event_subtitle{
  max-width:80%;
  margin:0 auto;
}
.event_subtitle-info{
  color: #392417;
  font-size: 16px;
  word-wrap:break-word;
  font-family:'JMH';
}
@media screen and (max-width: 600px) {
  .event_title {
    font-size: 40px;
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
