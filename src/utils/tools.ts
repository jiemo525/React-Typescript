import * as moment from 'moment';
moment.defineLocale('zh-cn', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  relativeTime: {
    d: '1天',
    dd: '%d天',
    future: '%s内',
    h: '1小时',
    hh: '%d小时',
    m: '1分钟',
     M: '1个月',
    mm: '%d分钟',
   
    MM: '%d个月',
    past: '%s前',
    s: '几秒',
    ss: '%d秒',
    y: '1年',
    yy: '%d年'
  },
})
export const dateFromNow = (value: Date) => {

  const str = moment(value, 'YYYY-MM-DD').fromNow();

  return str

}