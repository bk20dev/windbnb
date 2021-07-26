import Fuse from 'fuse.js';
import { useMemo } from 'react';

const useSearch = (items, keys, limit, term) => {
  const fuse = useMemo(
    () => new Fuse(items, { keys, shouldSort: true }),
    [items, keys]
  );

  const results = useMemo(() => {
    if (!term) return items.slice(0, limit);
    return fuse.search(term, { limit }).map((result) => result.item);
  }, [term, items, limit, fuse]);

  return results;
};

export default useSearch;
