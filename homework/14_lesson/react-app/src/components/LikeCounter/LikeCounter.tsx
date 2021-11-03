import React from 'react';

interface Props {
    countOfLikes: number,
}

export default class LikeCounter extends React.Component<Props> {
    render() {
        return (
          <div>
            Лайков:
            {this.props.countOfLikes || 0}
          </div>
);
    }
}
