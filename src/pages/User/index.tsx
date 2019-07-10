/**
 * @description 用户信息页
 */
import * as React from 'react';
import { Link } from 'react-router';
import { getUserInfo } from '../../utils/server';
import { dateFromNow } from '../../utils/tools';
import './index.css';

interface IProps {
  title?: string
};

interface IState {
  userData: any
}

class User extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      userData: {}
    }
  }

  public componentDidMount() {
    const loginname = location.pathname.split('/')[2];
    this.getUserData(loginname);
  }

  public getUserData = (loginname: string) => {
    getUserInfo(loginname).then((res) => {
      this.setState({ userData: res.data.data });
    });
  }

  public render() {
    const { userData } = this.state;
    return (
      <div className='user'>
        <Link to='/'><div>首页/</div></Link>
        <div className='user-infos'>
          <div className='user-avatar'>
            <img src={userData.avatar_url} />
            <span>{userData.loginname}</span>
          </div>
          <div>{userData.score}  积分</div>
          <div>{userData.githubUsername}</div>
          <div>{userData.recent_topics? userData.recent_topics.length:''}  个话题收藏</div>
          <div>注册时间  {dateFromNow(userData.create_at)}</div>
        </div>
      </div>
    )
  }

}

export default User;
