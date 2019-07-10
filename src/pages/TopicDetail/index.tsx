/**
 * @description 话题详情
 */
import * as React from 'react';
import { Link } from 'react-router';
import { getTopicDetail } from '../../utils/server';
import { dateFromNow } from '../../utils/tools';
import './index.css';

interface IProps {
  title?: string
};

interface IState {
  detailData: any
}

class TopicDetail extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      detailData: {}
    }
  }
  public componentDidMount() {
    const id = location.pathname.split('/')[2];
    this.getTopicDetail(id);
  }
  public getTopicDetail = (id: string) => {
    getTopicDetail(id).then((res) => {
      this.setState({ detailData: res.data.data });
    })
  }
  public showTopicListTab = (type: string) => {
    switch (type) {
      case '':
        return ''
        break;
      case 'good':
        return '精华'
        break;
      case 'share':
        return '分享'
        break;
      case 'ask':
        return '问答'
        break;
      case 'job':
        return '招聘'
        break;
      default:
        return '测试'
        break;
    }
  }
  public render() {
    const { detailData } = this.state;
    return (
      <div className='topic-detail'>
        <Link to='/'><div>首页/</div></Link>
        <div className='topic-detail-header'>
          <div>
            <span className='topiclist-tab'>
              {top ? '置顶' : this.showTopicListTab(detailData.tab)}
            </span>
            <div className="topic-detail-title">{detailData.title ? detailData.title : ''}</div>
          </div>
          <div className='topic-detail-changes'>
            <span>发布于 {dateFromNow(detailData.create_at)}</span>
            <span>作者 {detailData.author ? detailData.author.loginname : ''}</span>
            <span>{detailData.visit_count ? detailData.visit_count : ''} 次浏览</span>
            <span>来自 {detailData.tab ? this.showTopicListTab(detailData.tab) : ''}</span>
          </div>
        </div>
        {/* 话题详情内容 */}
        <div
          className='topic-detail-content'
          dangerouslySetInnerHTML={{ __html: detailData.content ? detailData.content : '' }}
        />
        {/* 评论列表 */}
        <div className='topic-detail-reply'>
          <div className='topic-detail-reply-header'>
            {detailData.replies? detailData.replies.length: ''} 回复
          </div>
          {
            detailData.replies ? detailData.replies.map((item: any, index: number) => (
              <div
                className={index < 3?'topic-detail-cell light':'topic-detail-cell'}
                key={item.id}
              >
                <div className='topic-detail-user-avatar'>
                  <img src={item.author.avatar_url}/>
                  <div className='user-info'>
                    {item.author.loginname}
                  </div>
                  <div className='reply-time'>{index + 1}楼•{dateFromNow(item.create_at)}</div>
                  <div className='topic-detail-up-count'>赞 {item.ups.length}</div>
                </div>
                <div
                  className='topic-detail-reply-content'
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )) : ''
          }
        </div>
      </div>
    )
  }
}

export default TopicDetail;