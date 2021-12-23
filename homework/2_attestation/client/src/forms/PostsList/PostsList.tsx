import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin } from 'antd';
import { Post } from '../../components/Post/Post';
import { PostPreviewData } from '../../types/API';
import { State } from '../../types/state';
import { loadPostsList } from '../../actions/PostsListAction';
import './PostsList.scss';
import ComponentWithHelper from '../../wrappers/withHelper';
import { ModalPost } from '../ModalPost/ModalPost';


export const PostsList = () => {
    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(false);
    const [modalID, setModalID] = useState('');
    const posts = useSelector((state: State) => state.posts.posts);
    const total = useSelector((state: State) => state.posts.total);

    const onChange = (number: number) => {
        dispatch(loadPostsList(number - 1, 6));
    };

    useEffect(() => {
        dispatch(loadPostsList(0, 6));
    }, []);


    return (
      <>
        <div className="posts-form">
          {posts.length ? (
            <div className="posts-list posts">
              {posts?.map((elem: PostPreviewData, i: number) => (
                <ComponentWithHelper comment={elem.id} key={i}>
                  {/* <Link to={`/post/${elem.id}`}> */}
                  <Post
                    id={elem.id}
                    text={elem.text}
                    image={elem.image}
                    publishDate={elem.publishDate}
                    owner={elem.owner}
                    setActive={setModalActive}
                    setID={setModalID}
                  />
                  {/* </Link> */}
                </ComponentWithHelper>
                    ))}
            </div>
            ) : (
              <div className="posts-form__loading">
                <Spin />
              </div>
            )}
        </div>
        <Pagination className="paginator" size="small" defaultCurrent={1} total={total} pageSize={6} showSizeChanger={false} onChange={onChange} />
        {modalID && <ModalPost active={modalActive} setActive={setModalActive} modalID={modalID} />}
      </>
);
};
