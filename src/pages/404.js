import React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout'
import lostPageStyles from './404.module.scss'
import Head from '../components/head';

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />
    <section className={lostPageStyles.wrapper}>

      <h1 className={lostPageStyles.lostHeader}>NOT FOUND</h1>
      <p className={lostPageStyles.lostPara}>You just hit a route that doesn't exist... the sadness.</p>
      <Link className={lostPageStyles.lostBtn} to="/" >&nbsp;HOME</Link>
    </section>
  </Layout>
)

export default NotFoundPage
