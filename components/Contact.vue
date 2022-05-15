<template>
  <div class="contact">
    <div class="contact_title">
      <img src="~/assets/images/Asset 6.svg">
      <div>ENQUIRE NOW</div>
      <img src="~/assets/images/Asset 7.svg">
    </div>
    <div class="font-FMH">
      To reserve an area please fill in the form below,<br> and our Event Manager will be in touch shortly.
    </div>
    <!-- 要驗證Form 要加上  :rules="ruleValidate" -->
    <Form ref="formValidate" :model="formValidate" :label-width="80" style="padding:20px">
      <label>NAME*</label>
      <Row>
        <Col span="12">
          <FormItem label="" prop="firstName">
            <Input v-model="formValidate.firstName" :border="false" />
            <p>FIRST NAME</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem id="formRight" label="" prop="lastName">
            <Input v-model="formValidate.lastName" :border="false" />
            <p>LAST NAME</p>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12" style="text-align:left">
          <label>EMAIL ADDRESS*</label>
          <FormItem label="" prop="email">
            <Input v-model="formValidate.email" :border="false" />
          </FormItem>
        </Col>
        <Col span="12" style="text-align:left">
          <label>PHONE NUMBER*</label>
          <FormItem id="formRight" label="" prop="phone">
            <Input v-model="formValidate.phone" :border="false" />
          </FormItem>
        </Col>
      </Row>
      <label>EVENT INFORMATION</label>
      <Row>
        <Col span="12">
          <FormItem label="" prop="event_date">
            <Input v-model="formValidate.event_date" :border="false" />
            <p>EVENT DATE (DD/MM/YY)*</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem id="formRight" label="" prop="event_time">
            <Input v-model="formValidate.event_time" :border="false" />
            <p>EVENT TIME (HOURS)*</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="" prop="occasion">
            <Input v-model="formValidate.occasion" :border="false" />
            <p>OCCASION</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem id="formRight" label="" prop="guests">
            <Input v-model="formValidate.guests" :border="false" />
            <p>APPROXIMATE NUMBER OF GUESTS*</p>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <Button class="submit_button" @click="handleSubmitData()">
      SUBMIT
    </Button>
    <Col>
      <div class="info-col">
        <h1>OPENING HOURS</h1>
        <p class="info-col_content">
          {{ `Daily: ${daily.start} - ${daily.end} ` }}
        </p>
      </div>
      <div class="info-col">
        <h1>CONTACT</h1>
        <p class="info-col_content">
          {{ companyInfo.address }}
        </p>
        <p class="info-col_content">
          {{ companyInfo.phone }}
        </p>
        <p class="info-col_content">
          <a :href="companyInfo.facebook">FaceBook</a>&ensp;|&ensp;<a :href="companyInfo.instagram">Instagram</a>
        </p>
      </div>
    </Col>
  </div>
</template>
<script>
import { companyInfo, addEvent } from '@/api/index.js'
export default {
    name: 'Contact',
    data: () => {
        return {
          formValidate: {
              firstName: null,
              lastName: null,
              email: null,
              phone: null,
              event_date: null,
              event_time: null,
              occasion: null,
              guests: null
          },
          companyInfo: {},
          daily: {}
          // 如果之後要驗證再打開囉囉囉
          // ruleValidate: {
          //     firstName: [
          //           { required: true, message: 'The firstName cannot be empty', trigger: 'blur' }
          //       ],
          //     lastName: [
          //           { required: true, message: 'The lastName cannot be empty', trigger: 'blur' }
          //       ],
          //     email: [
          //               { required: true, message: 'The email cannot be empty', trigger: 'blur' }
          //       ],
          //     phone: [
          //               { required: true, message: 'The phone cannot be empty', trigger: 'blur' }
          //       ],
          //     event_date: [
          //               { required: true, message: 'The event date cannot be empty', trigger: 'blur' }
          //       ],
          //     event_time: [
          //               { required: true, message: 'The event time cannot be empty', trigger: 'blur' }
          //       ],
          //     guests: [
          //               { required: true, message: 'The guests cannot be empty', trigger: 'blur' }
          //     ]
          // }
        }
    },
   created () {
      this.handleCompanyInfo()
    },
    methods: {
     async handleCompanyInfo () {
        const res = await companyInfo.getCompanyInfo()
        this.companyInfo = res.data.data
        this.daily = JSON.parse(res.data.data.daily)
        this.$router.push({ query: { bookInfo: res.data.data.booking } })
      },
      async handleSubmitData () {
      // 要驗證請打開註解的部分，原本的註解
      //  this.$refs.formValidate.validate(async (valid) => {
      //    if (valid) {
      //      await addEvent.addEvent(this.formValidate)
      //     } else {
      //     this.$Message.error('Please check yor data')
      //     }
      //   })
        await addEvent.addEvent(this.formValidate)
      }
    }
}
</script>
<style scoped>
.font-FMH{
  font-family: 'JMH'
}
.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EEE1E0;
    padding-bottom: 60px;
    padding-top: 130px;
}
 .contact_title {
    display: flex;
    color: #455336;
}
.contact_title > img {
    width: 160px;
}
.contact_title > div {
  color: #455336;
  font-size: 51px;
  padding: 0px 40px;
  line-height: 90px;
}

::v-deep .ivu-input{
  background-color: transparent !important;
  border: none !important;
  border-bottom: 1px solid #455336  !important;
  border-radius: 0px !important;
}
::v-deep .ivu-form-item-content{
  margin-left: 0px !important;
  margin-right: 40px;
}
label{
  font-size: 24px;
  font-weight: 600;
  color: #455336;
  font-family: "JMH";
  line-height: 88px;
  text-indent: 10px;
}
p{
  font-size: 18px;
  font-weight: 600;
  font-family: "JMH";
  color: #455336;
  text-align: left;
}
::v-deep #formRight > .ivu-form-item-content{
   margin-right: 0px !important;
}
::v-deep.ivu-btn{
  background: #455336;
  color: #fff;
  font-weight: 600;
  padding: 0 20px;
  font-size: 29px;
  height: 56px;
  border-radius: 10px;
}
::v-deep.ivu-col{
  margin: 0 auto;
  text-align: center;
}
.info-col{
  margin-top:60px;
  color:#455336;
}
.info-col_content{
  font-weight: 300;
  text-align: center;
}
.info-col_content > a{
  color:#455336;
}

@media screen and (max-width: 600px) {
.contact {
    padding-top: 60px;
}
  .contact_title > img {
    width: 80px;
 }
  .contact_title > div{
    font-size: 20px;
    line-height: 80px;
    padding: 0 20px;
  }
  ::v-deep .ivu-form-item-content{
    margin-left: 0px !important;
    margin-right: 15px;
 }
  label{
    font-size: 18px;
  }
  p {
    font-size: 12px;
 }
}
</style>
