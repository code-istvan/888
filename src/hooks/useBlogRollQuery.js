import { useStaticQuery, graphql } from "gatsby"

export const useBlogRoll = () => {
  const data = useStaticQuery(
    graphql`
      query BlogRoll {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            excerpt
            slug
            frontmatter {
              date(formatString: "YYYY. MM. DD.")
              description
              title
              thumbnail
            }
          }
        }
      }
    `
  )

  return data.allMdx.nodes
}
