import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const InfiniteScroll = ({ handleScroll, hasMore }) => {
  const [loading, setLoading] = useState(false);

  const handleIntersection = useCallback(
    event => {
      const [entries] = event;
      try {
        if (!entries.isIntersecting || !hasMore) {
          return;
        }
        setLoading(true);
        handleScroll();
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    [handleScroll, hasMore]
  );

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 1
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(document.querySelector('#last'));
  }, [handleIntersection]);

  return loading ? <div>Cargando...</div> : <div id="last" />;
};

InfiniteScroll.defaultProps = {
  handleScroll: () => undefined,
  hasMore: false
};

InfiniteScroll.propTypes = {
  handleScroll: PropTypes.func,
  hasMore: PropTypes.bool
};

export default InfiniteScroll;
