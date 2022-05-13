<template>
    <div class="contact">
        <div class="contact_title">
            <img src="~/assets/images/Asset 6.svg" />
            <div>ENQUIRE NOW</div>
            <img src="~/assets/images/Asset 7.svg" />
        </div>
        <div>
            To reserve an area please fill in the form below,<br/> and our Event Manager will be in touch shortly.
        </div>
        <div>
            <div>
                <div class="contact_name">NAME*</div>
                <div class="contact_name_item">
                    <div>
                        <Input class="contact_input" :border="false" v-model="fistName" />
                        <div>FIRST NAME</div>
                    </div>
                    <div>
                        <Input class="contact_input" :border="false" v-model="lastName" />
                        <div>LAST NAME</div>
                    </div>
                </div>
            </div>
            <div class="contact_email">
                <div>
                    <div class="contact_name">EMAIL ADDRESS*</div>
                    <Input class="contact_input" :border="false" v-model="email" />
                </div>
                <div>
                    <div class="contact_name">PHONE NUMBER*</div>
                    <Input class="contact_input" :border="false" v-model="phone" />
                </div>
            </div>
            <div></div>
        </div>
        <button></button>
        <div></div>
        <div></div>
    </div>
</template>
<script>
export default {
    name: 'Contact',
    data: () => {
        return {
            fistName: null,
            lastName: null,
            email: null,
            phone: null,
            date: null,
            time: null,
            occasion: null,
            app: null
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
</style>
