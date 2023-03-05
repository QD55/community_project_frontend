<template>
  <div class="container">
    <div class="box"> 🔔 {{ billboard.content }} </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>

import { getBillboard } from '@/api/billboard';
import CardBar from '@/views/card/CardBar'
import PostList from '@/views/post/index'

export default {
  name: 'HomeView',
  components: { CardBar, TopicList: PostList },
  data() {
    return {
      billboard: {
        content: ''
      }
    }
  },

  created() {
    this.fetchBillboard()
  },

  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value
        this.billboard = data
      }
      )
    }
  }


}
</script>
