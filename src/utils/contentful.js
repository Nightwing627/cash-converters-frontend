const space = process.env.REACT_APP_SAPCE_ID
const accessToken = process.env.REACT_APP_ACCESS_TOKEN

export async function fetchContent(query) {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      }
    )
    const { data } = await res.json()
    return data
  } catch (error) {
    console.error(
      `There was a problem retriveing entries with the query \n ${query}`
    )
    console.error(error)
  }
}
