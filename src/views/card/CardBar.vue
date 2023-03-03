<template>
    <section>
        <!-- 是否登录 -->
        <login-welcome />

        <!-- 今日赠言 -->
        <tip-card />

        <!-- 资源推荐 -->
        <PromotionCard />
    </section>
</template>
  
<script>

import TipCard from '@/views/card/Tip.vue'
import PromotionCard from '@/views/card/Promotion.vue'
import LoginWelcome from '@/views/card/LoginWelcome.vue'

export default {
    name: 'CardBar',
    components: { LoginWelcome, PromotionCard, TipCard }
}
</script>

<style scoped></style>
  