import React from 'react'
import GenerateLetter from '../components/GenerateLetter'
import Layout from '../components/Layout'
import SEO from "../components/Seo"

const Resources = ({ location }) => (
  <Layout>
    <SEO title="Resources" />
    <div>
      {location.pathname === '/resources/local-ordinances' &&
        <div>
          <h1>Local Rent Control Ordinances</h1>
          <h2>TODO: Put local rent control ordinances here</h2>
        </div>
      }
      <h1>Generate a letter to your landlord</h1>
      <GenerateLetter />
    </div>
  </Layout>
)

export default Resources