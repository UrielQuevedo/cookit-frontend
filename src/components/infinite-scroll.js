import React, { useCallback, useEffect, useState } from 'react';

const InfiniteScroll = ({ handleScroll = () => undefined, hasMore = true }) => {
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

export default InfiniteScroll;
