import gql from 'graphql-tag'

export const getAllVideos = gql`
  query VideoPaginator($first: Int!, $page: Int) {
    videos(first: $first, page: $page) {
      data {
        id
        title
        video_url
      }
    }
  }
`
