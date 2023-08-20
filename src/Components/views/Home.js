import HomeGallery from 'Components/HomeGallery/';
import LoadMoreBtn from 'Components/LoadMoreBtn/';
import homePageFetch from 'Components/api/homePageFetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const [homePageGallery, setHomePageGallery] = useState(null);
  const [pageGallery, setPageGallery] = useState(1);

  useEffect(() => {
    homePageFetch(pageGallery)
      .then(response => response.json())
      .then(response => {
        return homePageGallery === null
          ? setHomePageGallery(response.results)
          : setHomePageGallery(prevState => [
              ...prevState,
              ...response.results,
            ]);
      });
  }, [pageGallery]);

  const onLoadMoreBtnClick = () => setPageGallery(prevState => prevState + 1);

  return (
    <>
      <HomeGallery gallery={homePageGallery} />
      {homePageGallery && <LoadMoreBtn loadMore={onLoadMoreBtnClick} />}
    </>
  );
};

export default Home;
