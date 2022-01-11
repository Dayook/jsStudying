import { gql } from '@apollo/client';
import { CORE_COMMENT_FIELDS } from './fragments'; // 1
export const GET_POST_DETAILS = gql`
    ${CORE_COMMENT_FIELDS}
    query CommentsForPost($postId: ID!) {
        post(postId: $postId) {
            title
            body
            author
            comments {
                ...CoreCommentFields
            }
        }
    }
`;

// ...PostDetails component definition...