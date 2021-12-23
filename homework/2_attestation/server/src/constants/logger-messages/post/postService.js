const postService = {
  GET_POSTS_LIST_INPUT_PARAMS: '[PostService.getPosts] URL PARAMS query={}',
  GET_POSTS_LIST_SUCCESS: '[PostService.getPosts] success statuses={} response={}',
  GET_POSTS_LIST_ERROR: '[PostService.getPosts] error statuses={} response={}',

  GET_POSTS_BY_USER_ID_URL_PARAMS: '[PostService.getPostsByUser] URL PARAMS id={} page={} limit={}',
  GET_POSTS_BY_USER_ID_SUCCESS: '[PostService.getPostsByUser] success statuses={} response={}',
  GET_POSTS_BY_USER_ID_ERROR: '[PostService.getPostsByUser] error statuses={} response={}',
}

export default postService;
