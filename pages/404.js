import Link from 'next/link';
import Seo from '../components/Seo/Seo';

const NotFoundPage = () => {
 return (
  <>
   <Seo title="Page not found" />
   <div className={`globalContainer notFoundPageContainer`}>
    <h1>This page could not be found</h1>
    <h2>
     <Link href="/">Go back to the Homepage</Link>
    </h2>
   </div>
  </>
 );
};

export default NotFoundPage;
