import React from 'react';
import { Link } from 'react-router-dom';
import { UserPreviewData } from '../../types/API';
import ComponentWithHelper from '../../wrappers/withHelper';

interface Props {
    id: string,
    text: string,
    image: string,
    publishDate: string,
    owner: UserPreviewData,
    setActive(x: boolean): any,
    setID(x: any): any,

}

export const Post = (props: Props) => (
  <>
    <Link to={`/user/${props.owner.id}`} className="posts__card__header">
      <div className="posts__card__header__avatar">
        <img className="" src={props.owner.picture} alt="Post-img" />
      </div>
      <div className="posts__card__header__title post-card-title">
        <div className="posts-card-title__name">
          {`${props.owner.title}. ${props.owner.firstName} ${props.owner.lastName}`}
        </div>
        <div className="posts-card-title__date">{`${new Date(props.publishDate).toDateString()}`}</div>
      </div>
    </Link>
    <div onClick={() => {
        props.setID(props.id);
        props.setActive(true);
    }}
    >
      <div className="posts__card__picture">
        <img src={props.image} alt="Posts-img" />
      </div>
      <div className="posts__card__comment">
        {props.text}
      </div>
    </div>
  </>
);
