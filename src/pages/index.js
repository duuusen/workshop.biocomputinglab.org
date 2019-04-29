import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`biological computing lab`, `bcl`, `interaction design`]} />
  <h1 className={'bdcLink'}><a href="https://bdc.iad17.wtf">&#8674; Biodesign Challenge Blog</a></h1>
  </Layout>
)

export default IndexPage
