import axios from 'axios';

const baseUrl = 'https://cnodejs.org/api/v1';

interface ITopic {
  page: number,
  tab?: string,
  limit?: number,
  mdrender?: boolean
}
export const getTopicList = (params: ITopic) => {
  return axios.get(`${baseUrl}/topics?page=${params.page || 0}&tab=${params.tab || ''}&limit=${params.limit || 10}&mdrender=${params.mdrender || false}`)
  
}