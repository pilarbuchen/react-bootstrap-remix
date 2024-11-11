import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
import TypescriptSvg from '../../../src/assets/svg/typescript.svg';
import ViteSvg from '../../../src/assets/svg/vite.svg';
import MyBootstrapComponent from '../../../src/components/my-bootstrap-component/my-bootstrap-component';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div>
           <Container style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome to Codux with React Bootstrap!</h2>

      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col md="auto">
          <Button variant="primary" size="lg">
            Click Me
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="secondary" size="lg">
            Another Button
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col md={4}>
          <Form.Control type="text" placeholder="Enter your text here" />
        </Col>
      </Row>

      <Card style={{ width: '18rem', margin: '20px auto', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <Card.Title>Card Header</Card.Title>
          <Card.Text>
            This is some content inside the card. React Bootstrap provides easy-to-use, responsive components.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
            <div className={styles.root}>
                <h2 className={styles.title}>Welcome to your App Homepage 🎉</h2>
                <span>
                    Double click to edit App component
                    <br />
                    &amp; drag here elements from + Add <b>Elements</b> Panel
                </span>
                <p className={styles.paragraph}>
                    This project is using <img src={ViteSvg} width="12" />+
                    <img src={TypescriptSvg} width="12" />
                    Visit vitejs.dev to learn more.{' '}
                </p>
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
