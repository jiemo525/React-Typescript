/**
 * @description 首页
 */
import * as React from 'react';
import Header from '../Header';
import TopicList from '../TopicList';
import './index.css';

interface IProps{
  title?: string
};

interface IState {
  tab: string
}

class Home extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      tab: ''
    }
  }
  public changeTabHandle = (tab: string) => {
    this.setState({tab});
  }
  public render() {
    const { tab } = this.state;
    return (
      <div className='home'>
        <Header changeTabHandle={this.changeTabHandle}/>
        <TopicList tab={tab}/>
      </div>
    )
  }
}

export default Home;