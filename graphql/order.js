import gql from 'graphql-tag'

export const getOrder = gql`
  query Order($id: ID!) {
    order(id: $id) {
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
      special_instructions
      customer {
        email
        phone
        first_name
        last_name
      }
      items {
        tracking_number
        unit_price
        qty
        make {
          name
        }
        model {
          name
        }
        product {
          title
          images {
            public_url
          }
        }
        specifications {
          id
          option {
            title
          }
          optionField {
            id
            label
            value
            price
          }
          value
          cost
        }
      }
      subtotal
      shipping
      taxes
      total
      is_paypal
      created_at
    }
  }
`

export const orderByCheckoutId = gql`
  query orderByCheckoutId($checkout_id: String!) {
    orderByCheckoutId(checkout_id: $checkout_id) {
      id
      order_number
      display_status
      status
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
      special_instructions
      customer {
        email
        phone
        first_name
        last_name
      }
      items {
        tracking_number
        unit_price
        qty
        make {
          name
        }
        model {
          name
        }
        product {
          title
          images {
            public_url
          }
        }
        specifications {
          id
          option {
            title
          }
          optionField {
            id
            label
            value
            price
          }
          value
          cost
        }
      }
      subtotal
      shipping
      taxes
      total
      is_paypal
      created_at
    }
  }
`
