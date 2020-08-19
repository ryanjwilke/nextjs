import Head from 'next/head'
import Link from 'next/link'
import { GraphQLClient } from 'graphql-request'

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cke1x3epi4r7101xm32mocwvi/master'
  )

  const { components } = await graphcms.request(
    `
      {
        components {
          id
          name
          description
          slug
        }
      }
    `
  )

  return {
    props: {
      components,
    },
  }
}

export default function Components({ components }) {
  return (
    <div>
      <Head>
        <title>Components</title>
      </Head>
      <h1>Components</h1>
      {
        components.map(({ id, name, description, slug }) => (
          <li key={id}>
            <Link href={`/components/${slug}`}>
              <a>
                <h5>{name}</h5>
                <p>{description}</p>
              </a>
            </Link>
          </li>
        ))
      }
    </div>
  )
}
