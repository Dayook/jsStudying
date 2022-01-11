import {gql} from '@apollo/client';

export const CORE_COMMENT_FIELDS = gql`
    framgent CoreCommentsFields on Comment {
        id
        postedby {
            username
            displayName
        }
        createdAt
        content
    }
`

