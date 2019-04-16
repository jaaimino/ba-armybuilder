import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import s from 'styles/style';

const breadCrumbTitles = {
  '': 'Home',
  factions: 'Factions',
  'finland': 'Findland',
};

function BreadcrumbsItem({ match }) {
  const title = breadCrumbTitles[match.url.split('/').slice(-1)];
  const to = title === undefined ? '/' : match.url;

  return (
    <span>
      <Link
        {...s.link}
        to={to}
      >{title || 'Page Not Found'}</Link>
      {!match.isExact && title && ' / '}
      {title &&
        <Route path={`${match.url === '/' ? '' : match.url}/:path`} component={BreadcrumbsItem} />
      }
    </span>
  );
}

BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired,
};

export default () => {
  return (
    <Route path="/" component={BreadcrumbsItem} />
  );
};