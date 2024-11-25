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
      </>
    ),
  },
  {
    title: 'Data Explorer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </>
    ),
  },
  {
    title: 'My Data',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </>
    ),
  },
  {
    title: 'My Disposable Dashboard',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </>
    ),
  },
  {
    title: 'Workspace Gov',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      </>
    ),
  },
  {
    title: 'Universal Retention',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      </>
    ),
  },
  {
    title: 'PRM',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </>
    ),
  },
  {
    title: 'Audit Log Sync',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    
      <div className={clsx('', styles.featureContainer)}>
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
    <div className={styles.container}>
      <div className={styles.cardStyle}>
        {
          FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))
        }
      </div>
    </div>
  );
}
