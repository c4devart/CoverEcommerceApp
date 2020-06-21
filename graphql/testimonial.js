import gql from 'graphql-tag'

export const getAllTestimonials = gql`
  query TestimonialPaginator(
    $first: Int!
    $page: Int
    $orderBy: [OrderByClause!]
    $filterBy: TestimonialFilterInput
  ) {
    testimonials(
      first: $first
      page: $page
      filterBy: $filterBy
      orderBy: $orderBy
    ) {
      data {
        id
        customer_name
        product_name
        testimonial
        rating
        is_approved
        customer_email
        city
        province
        created_at
      }
    }
  }
`
