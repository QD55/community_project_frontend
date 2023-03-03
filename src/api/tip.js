import request from '@/utils/request.js'

export function getTodayTip() {
    return request({
        url: '/tip/today',
        method: 'get'
    })
}