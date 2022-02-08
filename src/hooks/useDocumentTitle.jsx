import { useEffect } from 'react';

/**
 * hook use to change the document (page) title
 * @param {String} new_title the new title of page
 */
function useDocumentTitle(new_title) {
  useEffect(() => {
    const old_title = document.title;
    document.title = new_title;
    return () => {
      document.title = old_title;
    };
  }, []);
}

export default useDocumentTitle;
