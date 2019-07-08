/**
 * @description 列表
 */
import * as React from 'react';
import * as moment from 'moment';
import { Pagination } from 'antd';
import { getTopicList } from '../../utils/server';
import './index.css';



interface IProps {
  tab: string
};

interface IState {
  topicListData: any[],
  current: number,
  tab: string
}

// interface IItem {
//   id: string,
//   title: string,
//   reply_count: number,
//   visit_count: number,
//   last_reply_at: Date,
//   tab: string,
//   author: {
//     avatar_url: string
//   },
// }

class TopicList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      current: 0,
      tab: this.props.tab,
      topicListData: []
    }
  }

  public componentDidMount() {
    this.getTopicList({ tab: this.state.tab });
  }
  public componentWillReceiveProps(nextprops: any) {
    this.setState({tab: nextprops.tab, current: 0});
    this.getTopicList({ tab: nextprops.tab });
  }
  public getTopicList = (params: { page?: number, tab?: string }) => {
    getTopicList({
      limit: 20,
      page: params.page || 0,
      tab: params.tab || this.state.tab,
    }).then((res) => {
      this.setState({ topicListData: res.data.data });
    });

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
  public changePageHandle = (page: number) => {
    this.setState({ current: page - 1 });
    this.getTopicList({ page: page - 1 });
  }
  public render() {
    const { current, topicListData } = this.state;
    return (
      <div
        className='topic-list'
      >
        {
          topicListData.map((item: any) => (
            <div
              key={item.id}
              className='cell'
            >
              <div className='user-avatar'>
                <img src={item.author.avatar_url} />
              </div>
              <div className='reply-count'>
                {item.reply_count}/{item.visit_count}
              </div>
              <div className='topic_title_wrapper'>
                <span className='topiclist-tab'>
                  {item.top? '置顶':this.showTopicListTab(item.tab)}
                </span>
                <a href='/' className='topic-title'>{item.title}</a>
              </div>
              <div className='last-time'>
                {/* <img src={item.}/> */}
                {moment(item.last_reply_at, 'YYYY-MM-DD').fromNow()}
              </div>
            </div>
          ))
        }
        <div className='pagination'>
          <Pagination
            current={current + 1}
            onChange={this.changePageHandle}
            total={50}
          />
        </div>
      </div>
    )
  }
}

export default TopicList;