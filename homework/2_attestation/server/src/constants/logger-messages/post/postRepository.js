const postRepository = {
  GET_POSTS_LIST_SEARCH_PARAMS: '[PostRepository.getPostsList] SEARCH PARAMS page={}, limit={}',
  GET_POSTS_LIST_SUCCESS: '[PostRepository.getPostsList] success statuses={} response={}',
  GET_POSTS_LIST_ERROR: '[PostRepository.getPostsList] error statuses={} response={}',
  GET_POSTS_LIST_MAPPER_REPLY_RESULT: '[PostRepository.getPostsList] mapper result {}',

  GET_POSTS_BY_USER_ID_PARAMS: '[PostRepository.getPostsByUserId] PARAMS id={} page={} limit={}',
  GET_POSTS_BY_BY_USER_ID_SUCCESS: '[PostRepository.getPostsByUserId] success statuses={} response={}',
  GET_POSTS_BY_BY_USER_ID_ERROR: '[PostRepository.getPostsByUserId] error statuses={} response={}',
}

export default postRepository;
