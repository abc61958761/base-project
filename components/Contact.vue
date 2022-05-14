<template>
  <div class="contact">
    <div class="contact_title">
      <img src="~/assets/images/Asset 6.svg">
      <div>ENQUIRE NOW</div>
      <img src="~/assets/images/Asset 7.svg">
    </div>
    <div>
      To reserve an area please fill in the form below,<br> and our Event Manager will be in touch shortly.
    </div>
    <!-- <div>
      <div>
        <div class="contact_name">
          NAME*
        </div>
        <div class="contact_name_item">
          <div>
            <Input v-model="fistName" class="contact_input" :border="false" />
            <div>FIRST NAME</div>
          </div>
          <div>
            <Input v-model="lastName" class="contact_input" :border="false" />
            <div>LAST NAME</div>
          </div>
        </div>
      </div>
      <div class="contact_email">
        <div>
          <div class="contact_name">
            EMAIL ADDRESS*
          </div>
          <Input v-model="email" class="contact_input" :border="false" />
        </div>
        <div>
          <div class="contact_name">
            PHONE NUMBER*
          </div>
          <Input v-model="phone" class="contact_input" :border="false" />
        </div>
      </div>
      <div class="contact_name">
        EVENT INFORMATION
      </div>
      <div class="contact_name_item">
        <div>
          <Input v-model="fistName" class="contact_input" :border="false" />
          <div>EVENT DATE (DD/MM/YY)*</div>
        </div>
        <div>
          <Input v-model="lastName" class="contact_input" :border="false" />
          <div>EVENT TIME (HOURS)*</div>
        </div>
      </div>
      <div class="contact_name_item">
        <div>
          <Input v-model="fistName" class="contact_input" :border="false" />
          <div>OCCASION</div>
        </div>
        <div>
          <Input v-model="lastName" class="contact_input" :border="false" />
          <div>APPROXIMATE NUMBER OF GUESTS*</div>
        </div>
      </div>
      <Button>SUBMIT</Button>
      <div />
      <div />
    </div> -->
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <label>NAME*</label>
      <Row>
        <Col span="12">
          <FormItem label="" prop="fistName">
            <Input v-model="formValidate.fistName" />
            <p>First Name</p>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="" prop="lastName">
            <Input v-model="formValidate.lastName" />
            <p>Last Name</p>
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
          <FormItem label="" prop="phone">
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
          <FormItem label="" prop="time">
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
          <FormItem label="" prop="app">
            <Input v-model="formValidate.app" />
            <p>APPROXIMATE NUMBER OF GUESTS*</p>
          </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</template>
<script>
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
            ruleValidate: {
                fistName: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                lastName: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
        }
    }
}
</script>
<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EEE1E0;
}

.contact_title {
    display: flex;
    color: #455336;
    /* font-size: 51px; */
}
.contact_title > img {
    width: 160px;
}
.contact_title > div {
    color: #455336;
    font-size: 51px;
}
.contact_name {
    color: #455336;
    font-size: 29px;
}
.contact_name_item {
    display: flex;
    color: #455336;
    font-size: 20px;
}
.contact_email {
    display: flex;
}
.contact_input {
    border-bottom: 1px solid #455336;
}

::v-deep .ivu-input{
  background-color: transparent !important;
  border: none !important;
  border-bottom: 1px solid #455336  !important;
  border-radius: 0px !important;
}

@media screen and (max-width: 600px) {
  .contact_title > img {
    width: 80px;
 }
  .contact_title > div{
    font-size: 30px;
  }
}
</style>
