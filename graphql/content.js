import gql from 'graphql-tag'

export const getContents = gql`
  query Contents($first: Int!, $page: Int, $filterBy: ContentFilterInput) {
    contents(first: $first, page: $page, filterBy: $filterBy) {
      data {
        id
        title
        slug
        content
      }
    }
  }
`

export const getContentBySlug = gql`
  query ContentBySlug($slug: String!) {
    contentBySlug(slug: $slug) {
      id
      title
      slug
      content
      hero_image
      type
      status
    }
  }
`
