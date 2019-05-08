import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`biological computing lab`, `bcl`, `interaction design`]} />
  <section>
  <h1>Fermentation Workshop</h1>
  <ul>
    <li>When: Thu 9 May 2019</li>
    <li>Where: Teakitchen 3rd Floor</li>
    <li>Who: Everybody</li>
  </ul>
  <p>
 The Bio Design Challenge Team from the 4th Semester Interaction Design Bachelor is excited to invite you to the first Ad-Hoc Fermentation Workshop at Toni Areal. 
Fermentation is a metabolic process that has in most cultures been used for millennia to make foodstuffs less perishable or simply transform them. One prominent example is Kimchi, a staple in Korean cuisine.
The format of our workshop will be facilitating the exchange of knowledge about a variety of fermentation traditions, procedures and recipes in a casual environment. Everyone is invited to bring fresh vegetables (carrots, scallions, garlic, ginger and asparagus…) and other needed ingredients. Necessary are a clean, sealable glass container in the preferred size, sea salt, small kitchen knife and chilli powder. The Chinese cabbage will be prepared and provided by us. Join in the fun! 
  </p>
  <br/>
  <a className={'bdcLink'} href="https://bdc.iad17.wtf">&#8674; Biodesign Challenge Blog</a>
  <a className={'feedbackLink'} href="https://mala23.typeform.com/to/FdqrEl">&#8674; Feedback Form <Emoji symbol="🐛" labe="pile of shit" /></a>
  </section>
  </Layout>
)

export default IndexPage
