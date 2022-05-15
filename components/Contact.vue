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
    <Form ref="formValidate" :model="formValidate" :label-width="80">
      <label>NAME*</label>
      <Row>
        <Col span="12">
          <FormItem label="" prop="fistName">
            <Input v-model="formValidate.fistName" />
            <p>FIRST NAME</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem id="formRight" label="" prop="lastName">
            <Input v-model="formValidate.lastName" />
            <p>LAST NAME</p>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <label>EMAIL ADDRESS*</label>
          <FormItem label="" prop="email">
            <Input v-model="formValidate.email" />
          </FormItem>
        </Col>
        <Col span="12">
          <label>PHONE NUMBER*</label>
          <FormItem id="formRight" label="" prop="phone">
            <Input v-model="formValidate.phone" />
          </FormItem>
        </Col>
      </Row>
      <label>EVENT INFORMATION</label>
      <Row>
        <Col span="12">
          <FormItem label="" prop="date">
            <Input v-model="formValidate.date" />
            <p>EVENT DATE (DD/MM/YY)*</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem id="formRight" label="" prop="time">
            <Input v-model="formValidate.time" />
            <p>EVENT TIME (HOURS)*</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="" prop="occasion">
            <Input v-model="formValidate.occasion" />
            <p>OCCASION</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem id="formRight" label="" prop="app">
            <Input v-model="formValidate.app" />
            <p>APPROXIMATE NUMBER OF GUESTS*</p>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <Button class="submit_button">
      SUBMIT
    </Button>
    <Col>
      <div class="info-col">
        <h1>OPENING HOURS</h1>
        <p>{{ `Daily: ${daily.start} - ${daily.end} ` }}</p>
      </div>
      <div class="info-col">
        <h1>CONTACT</h1>
        <p>{{ companyInfo.address }}</p>
        <p>{{ companyInfo.phone }}</p>
        <p><a :href="companyInfo.facebook">FaceBook</a>&ensp;|&ensp;<a :href="companyInfo.instagram">Instagram</a> </p>
      </div>
    </Col>
  </div>
</template>
<script>
import { companyInfo } from '@/api/index.js'
export default {
    name: 'Contact',
    data: () => {
        return {
          formValidate: {
              fistName: null,
              lastName: null,
              email: null,
              phone: null,
              date: null,
              time: null,
              occasion: null,
              app: null
            },
          companyInfo: {},
          daily: {}
          // 如果之後要驗證
          //   ruleValidate: {
          //     fistName: [
          //           { required: true, message: 'The fistName cannot be empty', trigger: 'blur' }
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
          //     date: [
          //               { required: true, message: 'The date cannot be empty', trigger: 'blur' }
          //       ],
          //     time: [
          //               { required: true, message: 'The time cannot be empty', trigger: 'blur' }
          //       ],
          //     app: [
          //               { required: true, message: 'The app cannot be empty', trigger: 'blur' }
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

@media screen and (max-width: 600px) {
  .contact_title > img {
    width: 80px;
 }
  .contact_title > div{
    font-size: 20px;
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
