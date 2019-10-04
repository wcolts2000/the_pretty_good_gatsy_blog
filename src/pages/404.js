import React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout'
import lostPageStyles from './404.module.scss'

const NotFoundPage = () => (
  <Layout>
    <section className={lostPageStyles.wrapper}>

      <h1 className={lostPageStyles.lostHeader}>NOT FOUND</h1>
      <p className={lostPageStyles.lostPara}>You just hit a route that doesn't exist... the sadness.</p>
      <Link className={lostPageStyles.lostBtn} to="/" >&nbsp;HOME</Link>
    </section>
  </Layout>
)

export default NotFoundPage
