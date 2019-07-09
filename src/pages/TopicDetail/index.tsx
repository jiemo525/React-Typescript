/**
 * @description 话题详情
 */
import * as React from 'react';
import { getTopicDetail } from '../../utils/server';
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
    const { content, title, top, tab } = this.state.detailData;
    return (
      <div className='topic-detail'>
        <div className='topic-detail-header'>
          <span className='topiclist-tab'>
            {top ? '置顶' : this.showTopicListTab(tab)}
          </span>
          <div className="topic-detail-title">{title}</div>
        </div>
        <div
          className='topic-detail-content'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    )
  }
}

export default TopicDetail;