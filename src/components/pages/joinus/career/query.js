export const query_getBanners = `
{
  bannerCollection (where: {page: "career"}, limit: 1) {
    items {
      text1
      text2
      banner {
        url
      }
    }
  }
}
`;

export const query_getTextCards = `
{
  textCardCollection (where: {page: "career"}, order: order_ASC) {
    items {
      title
      content
      toggleShow
    }
  }
}
`;

export const query_getKeyPoints = `
{
  keyPointsCollection(where: {page: "career"}, order: order_ASC) {
    items {
      title
      content
      image {
        url
      }
      toggleShow
    }
  }
}
`;

export const query_getOrganizations = `
{
  roleCollection (where: {page: "career"}, order: order_ASC) {
    items {
      name
      description
      image {
        url
      }
      buttonName
      actionLink
      direction
      isModal
      toggleShow
    }
  }
}`;

// {
//   diversityCollection(limit: 1) {
//     items {
//       title
//       description
//       image {
//         url
//       }
//       buttonName
//       direction
//       holidaysCollection {
//         items {
//           title
//           description
//           imagesCollection {
//             items {
//               image {
//                 url
//               }
//               with
//               height
//             }
//           }
//           toggleShow
//         }
//       }
//       toggleShow
//     }
//   }
// }

export const query_getDiversity = `
{
  diversityCollection {
    items {
      title
      description
      image {
        url
      }
      buttonName
      direction
      toggleShow
    }
  }
}`;

export const query_getCareerServices = `
{
  servicesCollection(where: {page: "career"}, order: order_ASC) {
    items {
      name
      description
      image {
        url
      }
      toggleShow
    }
  }
}`;

export const query_getFaq = `
{
  faqCollection(order: order_ASC) {
    items {
      question
      answer
    }
  }
}`;