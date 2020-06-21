import gql from 'graphql-tag'

export const getProductByPermalink = gql`
  query productByPermalink($permalink: String!) {
    productByPermalink(permalink: $permalink) {
      id
      permalink
      title
      subtitle
      status
      overview
      description
      features
      reg_price
      sale_price
      cost
      tax_code_id
      download_link
      is_special_order
      video_link
      vendor
      images {
        name
        public_url
      }
      file {
        name
        public_url
        original_name
        category
      }
      taxCode {
        name
        label
        rate
      }
      options {
        id
        type
        title
        slug
        step
        description
        is_required
        price
        max_value
        order
        fields {
          id
          label
          value
          price
          configuration
          image {
            name
            public_url
          }
          # configuration
        }
      }
    }
  }
`
