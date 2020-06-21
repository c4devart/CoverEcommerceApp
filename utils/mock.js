export const getProductList = (categoryId) => {
  return categoryId === 'hot-tub-covers'
    ? {
        category: {
          name: 'Hot Tub Covers',
          subname: 'available on ALL MODELS',
          subnameSpec: 'FREE UPGRADES'
        },
        products: [
          {
            title: 'Classic Cover',
            subtitle: 'Best for indoor or 3 season use',
            dimensions: {
              higher: 4,
              lower: 2
            },
            image: '',
            price: 359.95
          },
          {
            title: 'Premium Cover',
            subtitle: 'Entry level year-round cover',
            dimensions: {
              higher: 4,
              lower: 3
            },
            image: '',
            price: 389.95
          },
          {
            title: 'Deluxe Cover',
            subtitle: 'Best for moisture run off',
            dimensions: {
              higher: 5,
              lower: 3
            },
            image: '',
            price: 399.95
          },
          {
            title: 'Ultimate Cover',
            subtitle: 'Save money on energy cost',
            dimensions: {
              higher: 5,
              lower: 4
            },
            image: '',
            price: 439.95
          },
          {
            title: 'Supreme Cover',
            subtitle: 'Best for Canadian Winters',
            dimensions: {
              higher: 6,
              lower: 4
            },
            image: '',
            price: 449.95
          },
          {
            title: '',
            subtitle: '',
            water_bg: true
          }
        ]
      }
    : categoryId === 'cover-lifters'
    ? {
        category: {
          name: 'Cover Lifters'
        },
        products: [
          {
            title: 'Ultralift Visionlift',
            image: '',
            price: 359.95
          },
          {
            title: 'Cover Buddy II',
            image: '',
            price: {
              special: 389.95,
              regular: 289.95
            }
          },
          {
            title: 'Cabinet Free Cover Basket',
            image: '',
            price: 399.95
          },
          {
            title: 'Ultralift Standard Hot Tub Cover Lifter',
            image: '',
            price: 439.95
          },
          {
            title: 'Ultralift Undermount',
            image: '',
            price: 449.95
          },
          {
            title: 'Cabinet Mount Assist Lift & Lock',
            image: '',
            price: 449.95
          }
        ]
      }
    : {
        category: {
          name: 'Specialty Hot Tub Covers'
        },
        products: [
          {
            title: 'Arctic Spa Coyote Santa Fe',
            image: '',
            price: 579.99
          },
          {
            title: 'Arctic Spa Coyote Chieftain',
            image: '',
            price: {
              special: 859.99,
              regular: 899.99
            }
          },
          {
            title: 'Jacuzzi J-465',
            image: '',
            price: 699.99
          },
          {
            title: 'Jacuzzi J-470',
            image: '',
            price: 699.99
          },
          {
            title: 'Jacuzzi J-480',
            image: '',
            price: 699.99
          },
          {
            title: 'Coast Spas Mirage',
            image: '',
            price: 799.99
          },
          {
            title: 'Dimension One Amore Bay',
            image: '',
            price: 899.99
          },
          {
            title: 'Dimension One Sarena Bay',
            image: '',
            price: 899.99
          },
          {
            title: 'Hot Springs Grandee',
            image: '',
            price: 589.99
          },
          {
            title: 'Hot Springs Vista',
            image: '',
            price: 589.99
          },
          {
            title: 'Sundance Maxxus 880',
            image: '',
            price: 899.99
          },
          {
            title: 'Hydropool 1038',
            image: '',
            price: 899.99
          }
        ]
      }
}
