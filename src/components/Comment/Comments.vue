<template>
    <section class="box comments">
        <hr />
        <h3 class="title is-5">Comments</h3>
        <lv-comments-form :slug="slug" v-if="token" @loadComments="fetchComments" />

        <lv-comments-item v-for="comment in comments" :key="`comment-${comment.id}`" :comment="comment" />
    </section>
</template>
  
<script>
import { mapGetters } from 'vuex'
import { fetchCommentsByTopicId } from '@/api/comment'
import LvCommentsItem from './CommentsItem.vue'
import LvCommentsForm from './CommentsForm.vue'

export default {
    name: 'LvComments',
    components: {
        LvCommentsItem,
        LvCommentsForm
    },
    data() {
        return {
            comments: []
        }
    },
    props: {
        slug: {
            type: String,
            default: null
        }
    },
    computed: {
        ...mapGetters([
            'token'
        ])
    },
    async mounted() {
        await this.fetchComments(this.$slug)
    },
    methods: {
        // 初始化
        async fetchComments(topicid) {
            console.log(topicid)
            fetchCommentsByTopicId(topicid).then(response => {
                const { data } = response
                this.comments = data
            })
        }
    }
}
</script>