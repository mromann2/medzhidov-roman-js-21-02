import React from 'react';
import { apiResponse } from '../../api-mock/api';
import './Comments.css';
import { CommentType, CommentResponse } from '../../types/responses';
import { Comment } from '../../components/Comment/Comment';
import LikeCounter from '../../components/LikeCounter/LikeCounter';
import ComponentWithHelper from '../../wrappers/withHelper';



interface State {
  commentsResponse: CommentResponse;
  countOfLikes: number
}

// const CommentWithHelper = withHelper(Comment, 'Это комментарий');

export class Comments extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { commentsResponse: apiResponse, countOfLikes: 0 };
  }

  addLike() {
    this.setState({ countOfLikes: this.state.countOfLikes + 1 });
  }

  removeLike() {
    this.setState({ countOfLikes: this.state.countOfLikes - 1 });
  }

  render() {
    return (
      <div className="comments-form">

        {this.state.commentsResponse.status === 'ok'
          ? this.state.commentsResponse.result.map(({ name, text }: CommentType, index: number) => (
            <ComponentWithHelper comment="Это коммент">
              <Comment
                key={index}
                name={name}
                text={text}
                addLike={() => this.addLike()}
                removeLike={() => this.removeLike()}
              />
            </ComponentWithHelper>
))
          : 'Ошибка при загрузке'}
        <LikeCounter countOfLikes={this.state.countOfLikes} />
      </div>
    );
  }
}
