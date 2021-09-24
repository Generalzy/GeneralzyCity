<template>
    <div class="header">
        <div class="slogan">
            <p>General_zy | 帮助有志向的年轻人通过努力学习获得体面的工作和生活</p>
        </div>
        <div class="nav">
            <ul class="left-part">
                <li class="logo">
                    <router-link to="/">
                        <img src="../assets/img/head-logo.svg" alt="">
                    </router-link>
                </li>
                <li class="ele">
                    <span @click="goPage('/free-course')" :class="{active: url_path === '/free-course'}">免费课</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/actual-course')" :class="{active: url_path === '/actual-course'}">实战课</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/light-course')" :class="{active: url_path === '/light-course'}">轻课</span>
                </li>
            </ul>

            <div class="right-part">
                <div v-if="!username">
                    <span @click="login">登录</span>
                    <span class="line">|</span>
                    <span @click="register">注册</span>
                </div>
                <div v-else>
                      <span>{{username}}</span>
                      <span class="line">|</span>
                      <span @click="logout">注销</span>
                </div>
    		    </div>
<!--          搜索-->
            <form class="search">
              <div class="tips" v-if="is_search_tip">
                  <span @click="search_action('Python')">Python</span>
                  <span @click="search_action('Linux')">Linux</span>
              </div>
              <input type="text" :placeholder="search_placeholder" @focus="on_search" @blur="off_search" v-model="search_word">
              <button type="button" class="glyphicon glyphicon-search" @click="search_action(search_word)"></button>
          </form>
          <Login @close="close_login" @go="register" v-if="is_login" @loginsuccess="loginsuccess"/>
          <Register @close="close_register" @go="login" v-if="is_register"></Register>
        </div>
    </div>

</template>

<script>
    import Login from "./Login";
    import Register from "./Register";

    export default {
        name: "Header",
        data() {
            return {
                url_path: sessionStorage.url_path || '/',
                is_login:false,
                is_register:false,
                username:'',
                token:'',
                is_search_tip: true,
                search_placeholder: '',
                search_word: ''
            }
        },
        methods: {
            search_action(search_word) {
                  if (!search_word) {
                      this.$message('请输入要搜索的内容');
                      return
                  }
                  if (search_word !== this.$route.query.word) {
                      this.$router.push(`/search?word=${search_word}`);
                  }
                  this.search_word = '';
              },
              on_search() {
                  this.search_placeholder = '请输入想搜索的课程';
                  this.is_search_tip = false;
              },
              off_search() {
                  this.search_placeholder = '';
                  this.is_search_tip = true;
              },
            goPage(url_path) {
                // 已经是当前路由就没有必要重新跳转
                if (this.url_path !== url_path) {
                    this.$router.push(url_path);
                }
                sessionStorage.url_path = url_path;
            },
            login(){
                this.is_login=true;
                this.is_register=false;
            },
            register(){
                this.is_register=true;
                this.is_login=false;
            },
            close_login(){
                this.is_login=false;
            },
            close_register(){
                this.is_register=false;
            },
            loginsuccess(){
              this.username=this.$cookies.get('username')
              this.token=this.$cookies.get('token')
            },
            logout(){
              this.$cookies.remove('username')
              this.$cookies.remove('token')
              this.username=''
              this.token=''
            }
        },
        created() {
            sessionStorage.url_path = this.$route.path;
            this.url_path = this.$route.path;
            // 当页面一创建就去cookies找cookies和username
            this.username=this.$cookies.get('username')
            this.token=this.$cookies.get('token')
        },
      components:{
          Login,
          Register,
      }
    }
</script>

<style scoped>
    .header {
        background-color: white;
        box-shadow: 0 0 5px 0 #aaa;
    }

    .header:after {
        content: "";
        display: block;
        clear: both;
    }

    .slogan {
        background-color: #eee;
        height: 40px;
    }

    .slogan p {
        width: 1200px;
        margin: 0 auto;
        color: #aaa;
        font-size: 13px;
        line-height: 40px;
    }

    .nav {
        background-color: white;
        user-select: none;
        width: 1200px;
        margin: 0 auto;

    }

    .nav ul {
        padding: 15px 0;
        float: left;
    }

    .nav ul:after {
        clear: both;
        content: '';
        display: block;
    }

    .nav ul li {
        float: left;
    }

    .logo {
        margin-right: 20px;
    }

    .ele {
        margin: 0 20px;
    }

    .ele span {
        display: block;
        font: 15px/36px '微软雅黑';
        border-bottom: 2px solid transparent;
        cursor: pointer;
    }

    .ele span:hover {
        border-bottom-color: orange;
    }

    .ele span.active {
        color: orange;
        border-bottom-color: orange;
    }

    .right-part {
        float: right;
    }

    .right-part .line {
        margin: 0 10px;
    }

    .right-part span {
        line-height: 68px;
        cursor: pointer;
    }

    .search {
        float: right;
        position: relative;
        margin-top: 22px;
        margin-right: 10px;
    }

    .search input, .search button {
        border: none;
        outline: none;
        background-color: white;
    }

    .search input {
        border-bottom: 1px solid #eeeeee;
    }

    .search input:focus {
        border-bottom-color: orange;
    }

    .search input:focus + button {
        color: orange;
    }

    .search .tips {
        position: absolute;
        bottom: 3px;
        left: 0;
    }

    .search .tips span {
        border-radius: 11px;
        background-color: #eee;
        line-height: 22px;
        display: inline-block;
        padding: 0 7px;
        margin-right: 3px;
        cursor: pointer;
        color: #aaa;
        font-size: 14px;

    }

    .search .tips span:hover {
        color: orange;
    }
</style>