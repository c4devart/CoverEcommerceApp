import gql from 'graphql-tag'

export const getAllMakes = gql`
  {
    allMakes(orderBy: [{ field: "name", order: ASC }]) {
      id
      name
      models {
        id
        name
        shape
        dimension_a
        dimension_b
        radius_c
        skirt
        notes
      }
    }
  }
`
