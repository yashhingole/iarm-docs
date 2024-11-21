import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Overview',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Omnis quibusdam a cupiditate quod atque voluptatem quam consectetur culpa nobis aut.
      </>
    ),
  },
  {
    title: 'Data Explorer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nisi quas omnis ab quidem est enim debitis at autem dignissimos officia.
      </>
    ),
  },
  {
    title: 'My Data',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates ea, magnam velit perspiciatis ipsa provident quaerat inventore animi totam voluptas.
      </>
    ),
  },
  {
    title: 'My Disposable Dashboard',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem consequatur in perspiciatis sapiente, non voluptate!
      </>
    ),
  },
  {
    title: 'Workspace Gov',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Illum minima laborum reprehenderit similique, blanditiis provident?
      </>
    ),
  },
  {
    title: 'Universal Retention',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Veniam reprehenderit quis repellendus aperiam doloribus ut?
      </>
    ),
  },
  {
    title: 'PRM',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quis exercitationem earum aliquam consequuntur facilis illo!
      </>
    ),
  },
  {
    title: 'Audit Log Sync',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Minima officiis, necessitatibus quis quisquam sequi maxime.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
