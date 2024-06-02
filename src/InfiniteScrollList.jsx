// src/InfiniteScrollList.jsx
import React, { useEffect, useRef, useState } from "react";

export default function InfiniteScrollList({ fetchItems, renderItem, loader, threshold = 1.0 }) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const elementRef = useRef(null);

  function onIntersection(entries) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      threshold: threshold,
    });
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [items, elementRef]);

  async function fetchMoreItems() {
    const newItems = await fetchItems(page);
    if (newItems && newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }
  }

  return (
    <div>
      {items.map((item, index) => renderItem(item, index))}
      {hasMore && <div ref={elementRef}>{loader}</div>}
    </div>
  );
}
