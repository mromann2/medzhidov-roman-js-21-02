import React from 'react';
import './ModalPost.scss';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';

interface Props {
    active: boolean,
    setActive(active: boolean): void,
    modalID: string,
}

export const ModalPost = ({ active, setActive, modalID }: Props) => {
const posts = useSelector((state: State) => state.posts.posts);
const post = posts.filter((item) => item.id === modalID)[0];

    return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__content__header">
            <div className="modal__content__header__avatar">
              <img className="" src={post.owner.picture} alt="Post-img" />
            </div>
            <div className="modal__content__header__title">
              <div className="modal__content__header__title__name">
                {`${post.owner.title}. ${post.owner.firstName} ${post.owner.lastName}`}
              </div>
              <div className="modal__content__header__title__date">{`${new Date(post.publishDate).toDateString()}`}</div>
            </div>
          </div>
          <div>
            <div className="modal__content__picture">
              <img src={post.image} alt="Posts-img" />
            </div>
            <div className="modal__content__comment">
              {post.text}
            </div>
          </div>
        </div>
      </div>
    );
};
