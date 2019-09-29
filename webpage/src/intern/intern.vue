<template>
    <div id="intern">
        <NavBar></NavBar>


        <div id="login">
            <input placeholder="username" v-model="username">
            <input placeholder="password" v-model="userpassword">
            <button @click="checkLoginData">Login</button>
        </div>
        <div v-if="authorized">
            <p id="logedin">Sie sind nun eingeloggt</p>
        </div>

    </div>
</template>

<script>
    import NavBar from '../Navbar.vue'

    export default {
        name: "intern",

        data () {
            return {
                username: '',
                userpassword: '',
                logindata: [],
                authorized: false
            }
        },

        methods: {
            checkLoginData () {
                this.getloginData().then(logindata => {
                    this.logindata = logindata;
                    for (var i = 0; i < logindata.length; i++) {
                        if (logindata[i].loginname === this.username && logindata[i].loginpwd === this.userpassword) {
                            this.authorized = true;
                        }
                    }
                })
            },
            getloginData () {
                return this.$http.get('https://webpage-858f1.firebaseio.com/data.json').then(response =>
                    response.json()).then(json =>{
                        return Object.keys(json).map(function(property){
                            return {
                                loginname: json[property].loginname,
                                loginpwd: json[property].loginpwd,
                                id: property
                            }
                        });
                })
            }
        },

        components: {
            NavBar
        }
    }
</script>

<style scoped>
    p {
        color: white;
    }
    #login {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: max-content;
        margin-top: 15%;
    }
    input {
        font-size: 11px; font-family: Verdana;
        COLOR: #7F91B4;
        margin: 5px;
        padding: 7px;
        border: 2px;
        font-size: 10px;
        font-weight: bold;
        background-color: transparent;
        border: 1px;
        border-bottom-style: solid;
        border-left-style: solid;
        border-right-style: solid;
        border-top-style: solid;
        border-color: #315172;
    }
    button {
        background-color: white;
    }
</style>