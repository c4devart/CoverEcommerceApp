import gql from 'graphql-tag'

export const getCategories = gql`
  query CategoryPaginator(
    $first: Int!
    $page: Int
    $orderBy: [OrderByClause!]
  ) {
    categories(first: $first, page: $page, orderBy: $orderBy) {
      data {
        id
        name
        parent_name
        product_count
        products {
          id
          title
          subtitle
          overview
          is_special_order
          is_made_in_canada
          image {
            name
            public_url
          }
          reg_price
          sale_price
          options {
            id
          }
        }
      }
    }
  }
`

export const getCategoryBySlug = gql`
  query categoryBySlug($slug: String) {
    categoryBySlug(slug: $slug) {
      id
      name
      parent {
        id
        name
      }
      product_count
      products {
        id
        title
        subtitle
        overview
        is_special_order
        permalink
        is_made_in_canada
        images {
          name
          public_url
        }
        custom_attributes {
          taper_shape
          taper_info
        }
        categories {
          name
        }
        options {
          id
        }
        reg_price
        sale_price
      }
    }
  }
`
