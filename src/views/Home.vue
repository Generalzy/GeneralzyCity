<template>
  <div class="home">
    <Head></Head>
    <Banner></Banner>
    <div style="height: 800px"></div>
    <Footer></Footer>
  </div>
</template>


<script>
import Head from '../components/Head'
import Footer from '../components/Footer'
import Banner from "../components/Banner";

export default {
  name: 'Home',
  // data:function (){
  //
  // },
  created() {

  },
  components: {
    Footer,
    Head,
    Banner,
  }
}
</script>
