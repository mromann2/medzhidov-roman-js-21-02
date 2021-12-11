import React, { RefObject } from 'react';
import './Comment.css';

interface Props{
  name?: string,
  text?: string,
  addLike?: () => void,
  removeLike?: () => void
}

interface State{
  liked: boolean,
}

export class Comment extends React.Component<Props, State> {
  textDiv: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = { liked: false };
    this.textDiv = React.createRef();
  }

  handlelike(e: any) {
    console.log(e);
  // alert(this.textDiv.current.innerHTML);
  !this.state.liked ? this.props.addLike && this.props.addLike()
      : this.props.removeLike && this.props.removeLike();
    this.setState({ liked: !this.state.liked });
    }

  render() {
    return (
      <div className="comment">
        <div className="comment__user-name">{this.props.name}</div>
        <div ref={this.textDiv} className={`comment__text ${this.state.liked && 'text-liked'}`}>{this.props.text}</div>
        <div className="comment__like" onClick={(e) => this.handlelike(e)}>
          {this.state.liked ? 'Лайкнуто' : 'Не лайкнуто'}
        </div>
      </div>
    );
  }
}
