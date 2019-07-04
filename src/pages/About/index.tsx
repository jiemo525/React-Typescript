import * as React from 'react';
import './index.css';

interface IProps{
  title?: string
};

interface IState {
  num: number
}

class About extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      num: 0
    };
  }

  public clickHandle = (num: number) => {
    this.setState({ num });
  }

  public render() {
    return (
      <div 
        onClick={ this.clickHandle.bind(this, 1) }
        className='about-btn'
      >
        about button
        <div>{ this.state.num }</div>
      </div>
    )
  }
}

export default About;