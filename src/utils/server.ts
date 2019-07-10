import axios from 'axios';

const baseUrl = 'https://cnodejs.org/api/v1';

interface ITopic {
  page: number,
  tab?: string,
  limit?: number,
  mdrender?: boolean
}

// 获取话题列表
export const getTopicList = (params: ITopic) => {
  return axios.get(`${baseUrl}/topics?page=${params.page || 0}&tab=${params.tab || ''}&limit=${params.limit || 10}&mdrender=${params.mdrender || false}`)
  
}

// 根据话题id获取话题内容详情
export const getTopicDetail = (id: string) => {
  return axios.get(`${baseUrl}/topic/${id}`)
}

// 获取用户详情
export const getUserInfo = (loginname: string) => {
  return axios.get(`${baseUrl}/user/${loginname}`)
}

