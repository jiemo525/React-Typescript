/**
 * @description 头部
 */
import * as React from 'react';
import './index.css';

interface IProps {
  changeTabHandle: (tab: string) => void
};

interface IState {
  tabIndex: string
}

class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tabIndex: ''
    };
  }
  public clickTabHandle = (index: string) => {
    this.setState({ tabIndex: index });
    this.props.changeTabHandle(index);
  }

  public render() {
    const { tabIndex } = this.state;
    return (
      <div className='header'>
        <div
          className={tabIndex === '' ? 'current-tab' : 'header-tab'}
          onClick={this.clickTabHandle.bind(this, '')}
        >
          全部
        </div>
        <div
          className={tabIndex === 'good' ? 'current-tab' : 'header-tab'}
          onClick={this.clickTabHandle.bind(this, 'good')}
        >
          精华
        </div>
        <div
          className={tabIndex === 'share' ? 'current-tab' : 'header-tab'}
          onClick={this.clickTabHandle.bind(this, 'share')}
        >
          分享
        </div>
        <div
          className={tabIndex === 'ask' ? 'current-tab' : 'header-tab'}
          onClick={this.clickTabHandle.bind(this, 'ask')}
        >
          问答
        </div>
        <div
          className={tabIndex === 'job' ? 'current-tab' : 'header-tab'}
          onClick={this.clickTabHandle.bind(this, 'job')}
        >
          招聘
        </div>
        <div
          className={tabIndex === 'dev' ? 'current-tab' : 'header-tab'}
          onClick={this.clickTabHandle.bind(this, 'dev')}
        >
          客户端测试
        </div>
      </div>
    )
  }
}

export default Header;