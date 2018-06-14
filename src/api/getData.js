import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:10086/api'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    // _.toast(res.data.msg);
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  /**
   * 登陆
   * @param params
   */
  login (params) {
    return fetch('/login', params)
  },
  /**
   * 注册
   */
  register (params) {
    return fetch('/register', params)
  },
  /**
   * 获得首页推荐
   */
  getIndexRecommend () {
    return axios.get('/indexRecommend')
  },
  /**
   * 获得分类列表
   */
  getList () {
    return axios.get('/getList')
  },
  /**
   * 获取你可能喜欢的菜品
   */
  getGuessLike (params) {
    return axios.get('/guessLike?number=' + params['number'])
  },
  /**
   * 获取关注的人的列表
   */
  getMyFollowList (params) {
    return axios.get('myFollowList?token=' + params['token'])
  },
  /**
   * 获取某位成员的信息
   */
  getUserInfo (params) {
    return axios.get('userInfo?name=' + params['name'])
  },

  /**
   * 获取某人的笔记列表
   */
  getUserNoteList (params) {
    return axios.get('userNoteList?name=' + params['name'] + '&page=' + params['page'])
  },
  /**
   * 获取我的收藏列表
   */
  getUserCollection (params) {
    return axios.get('userCollection?token=' + params['token'])
  },
  /**
   * 从某人的博客里面搜索
   */
  searchFromPeople (params) {
    return axios.get('searchFromPeople?name=' + params['name'] + '&key=' + params['key'] + '&page=' + params['page'])
  },
  /**
   * 根据分类寻找具体的事物
   */
  getNoteList (params) {
    return axios.get('getNoteList?class=' + params['class'])
  },
  /**
   * 根据noteId获取food的详情
   */
  getNoteDetail (params) {
    return axios.get('getNoteDetail?noteId=' + params['noteId'])
  },
  /**
   * 留下评论
   */
  leaveReply (params) {
    return fetch('/leaveReply', params)
  },
  /**
   * 收藏笔记
   */
  collect (params) {
    return axios.get('/collect?token=' + params['token'] + '&noteid=' + params['noteid'])
  },
  /**
   * 标记笔记为喜欢
   */
  like (params) {
    return axios.get('/like?token=' + params['token'] + '&noteid=' + params['noteid'])
  },
  /**
   * 添加新笔记
   */
  createNote (params) {
    return fetch('/createNote', params)
  },
  /**
   * 修改个人信息
   */
  changeInfo (params) {
    return fetch('/changeInfo', params)
  }

}
