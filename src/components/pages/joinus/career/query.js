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

export const query_getDiversity = `
{
  diversityCollection(limit: 1) {
    items {
      title
      description
      image {
        url
      }
      buttonName
      toggleButton
      direction
      toggleShow
      holidays: holidaysCollection {
        items {
          title
        }
      }
    }
  }
}`;

export const query_getBenefit = `
{
	benefit: careerBenefitCollection (limit: 1) {
    items {
    	title
      toggleShow
      data: benefitsCollection {
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
  }
}
`;

export const query_getFaq = `
{
  faqCollection(order: order_ASC) {
    items {
      question
      answer
    }
  }
}`;

export const query_getHolidayByTitle = (name) => `
{
  holiday: holidayCollection(where: {title: "${name}"}, limit: 1) {
    items {
      title
      description
      images: imagesCollection {
        items {
          name
          image {
            url
          }
          width
          height
        }
      }
      toggleShow
    }
  }
}
`;