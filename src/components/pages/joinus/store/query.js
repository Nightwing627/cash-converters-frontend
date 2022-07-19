export const query_getBanners = `
{
  bannerCollection (where: {page: "store"}, limit: 1) {
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
  textCardCollection (where: {page: "store"}, order: order_ASC) {
    items {
      title
      content
      toggleShow
    }
  }
}
`;

export const query_getBlueButton = `
{
  buttons: blueButtonCollection(where: {page_contains_all: ["store"]}, limit:1) {
    items {
      text
      toggleShow
      page
    }
  }
}
`;

export const query_getVideo = `
{
  videoCollection(where: {page: "store"}, limit: 1) {
    items {
      title
      thumb {
        url
      }
      video {
        url
      }
      toggleShow
    }
  }
}`;

export const query_getRoles = `
{
  roleCollection (where: {page: "store"}, order: order_ASC) {
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

export const query_getTestimonials = `
{
  testimonialCollection(order: order_ASC) {
    items {
      name
      role
      writer
      content
      image {
        url
      }
      
    }
  }
}
`;