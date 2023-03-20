import request from '@/utils/request'

// 帖子列表
export function getList(pageNo, size, tab) {
  return request(({
    url: '/post/list',
    method: 'get',
    params: { pageNo: pageNo, size: size, tab: tab }
  }))
}

// 发布帖子
export function post(topic) {
  return request({
    url: '/post/create',
    method: 'post',
    data: topic
  })
}

// 查看帖子详情
export function getTopic(id) {
  return request({
    url: '/post',
    method: 'get',
    params: {
      id: id
    }
  })
}

// 获取详情页推荐
export function getRecommendTopics(id) {
  return request({
    url: '/post/recommend',
    method: 'get',
    params: {
      topicId: id
    }
  })
}
