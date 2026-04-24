import { gql } from "@apollo/client";

export const GET_ATTRACTIONS = gql`
  query GetAttractions {
    posts(where: { categoryName: "Atrativos" }, first: 10) {
      nodes {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const GET_BLOG_POSTS = gql`
  query allPosts {
    posts{
      nodes {
        id
        title
        excerpt
        date
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents {
    posts(where: { categoryName: "Eventos" }, first: 3) {
      nodes {
        id
        title
        date
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_EVENTOS = gql`
  query GetEventos {
    eventos(where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        title
        content
        dataRange
        mes
        ano
        categoria
      }
    }
  }
`;
export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`;
