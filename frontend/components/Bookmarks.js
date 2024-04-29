import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';
import Article from '../components/Article'

import { useDispatch } from 'react-redux';
import { addArticleToBookmark } from '../reducers/bookmarks';

import { useSelector } from 'react-redux';


function Bookmarks() {
	const favoriteArticles = useSelector((state) => state.bookmarks.value);

	const displayFavorite = favoriteArticles.map((data, i) => {
		return <Article key={i} {...data} />;
	})

	return (
		<div>
			<Head>
				<title>Morning News - Bookmarks</title>
			</Head>
			<div className={styles.container}>
				<h2>Bookmarks</h2>
				{!displayFavorite.length ? <p>No bookmark</p> : <p></p>}
				<div className={styles.displayFav}>
					{displayFavorite}
				</div>
			</div>
		</div >

	);
}

export default Bookmarks;
