import Head from 'next/head'
import gql from 'graphql-tag'
import ApolloClient from 'apollo-client'
import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const client = new ApolloClient({
    link: PrismicLink({
      uri: 'https://tracedata-design-system.prismic.io/graphql',
    }),
    cache: new InMemoryCache()
  })

  let response = await client.query({
    query: gql`
      {
        allHomepages {
          edges {
            node {
              title
              content
            }
          }
        }
      }
    `
  })

  return {
    props: {
      title: response.data.allHomepages.edges[0].node.title[0].text,
      content: response.data.allHomepages.edges[0].node.content[0].text,
    }
  }
}

export default function Home({ title, content }) {
  return (
    <div>
      <Head>
        <title>Design System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <div>{content}</div>
      </main>
    </div>
  )
}
