import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import logo from "@site/static/img/70_70.jpg";


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx( styles.heroBanner)}  style={{backgroundImage: `url('../../slash/img/bg_Plain_SVG.svg')`}}  >
      <div className="container">
	    
        <span className="hero__title"><Link
            to="/docs/docs-map">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/320px-Python-logo-notext.svg.png' alt='Python Logo'/>
          </Link><img src={logo} alt='InsectTotem.Net'/></span>
        <h1 className="hero__title"><Link to="/docs/docs-map">{siteConfig.tagline}</Link></h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}-Python 學習筆記`}
      description="insect-totem.net">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
