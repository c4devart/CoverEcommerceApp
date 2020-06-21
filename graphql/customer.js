import gql from 'graphql-tag'

export const getCustomer = gql`
  query Customer($id: ID!) {
    customer(id: $id) {
      id
      name
      first_name
      last_name
      email
      phone
      addresses {
        name
        street
        city
        state_province
        zip_postal
        country
        phone
        is_default
        geo {
          lat
          lng
        }
      }
      shipping_address {
        name
        street
        city
        state_province
        zip_postal
        country
        phone
        is_default
        geo {
          lat
          lng
        }
      }
      billing_address {
        name
        street
        city
        state_province
        zip_postal
        country
        phone
        is_default
        geo {
          lat
          lng
        }
      }

      orders {
        id
        order_number
        display_status
        shipping_address {
          street
          city
          state_province
          zip_postal
          country
        }
        billing_address {
          street
          city
          state_province
          zip_postal
          country
        }
        card_info {
          card_last_four
          card_brand
          expiry_month
          expiry_year
        }
        items {
          id
          product {
            id
            title
            images {
              public_url
            }
          }
          refunded_at
          specifications {
            id
            value
            cost
            option {
              title
              type
              price
              fields {
                id
                label
                value
                price
              }
            }
            optionField {
              id
              label
              value
              price
            }
          }

          subtotal
          shipping
          taxes
          total
          tracking_number
        }
        images {
          id
          name
          original_name
          public_url
        }
        subtotal
        taxes
        total
        created_at
      }
    }
  }
`

// export const getCustomers = gql`
//   query CustomerPaginator(
//     $filterBy: CustomerFilterInput
//     $first: Int!
//     $page: Int
//   ) {
//     customers(filterBy: $filterBy, first: $first, page: $page) {
//       data {
//         email
//       }
//     }
//   }
// `

export const updateCustomer = gql`
  mutation updateCustomer($id: ID!, $input: CustomerInput!) {
    updateCustomer(id: $id, input: $input) {
      id
      first_name
      last_name
      phone
      email
    }
  }
`
