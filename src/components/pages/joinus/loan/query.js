export const query_getBanners = `
{
  bannerCollection (where: {page: "loancenter"}, limit: 1) {
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
  textCardCollection (where: {page: "loancenter"}, order: order_ASC) {
    items {
      title
      content
      toggleShow
    }
  }
}
`;

export const query_getServices = `
{
  servicesCollection(where: {page: "loancenter"}, order: order_ASC) {
    items {
      name
      description
      image {
        url
      }
      toggleShow
    }
  }
}
`;

export const query_getVideo = `
{
  videoCollection(where: {page: "loancenter"}, limit: 1) {
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
  roleCollection (where: {page: "loancenter"}, order: order_ASC) {
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