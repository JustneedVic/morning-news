import styles from '../styles/Toparticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addArticleToBookmark } from '../reducers/bookmarks';

function TopArticle(props) {

	const dispatch = useDispatch();

	const addArticle = (newArticle) => {
		dispatch(addArticleToBookmark(newArticle));
	};

	const favoriteArticles = useSelector((state) => state.bookmarks.value);

	console.log(favoriteArticles)

	let bookStyle = { 'color': '#000000', 'cursor': 'pointer' };
	if (favoriteArticles.some(e => e.title === props.title)) {
		bookStyle = { 'color': '#E9BE59', 'cursor': 'pointer' };
	}

	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon
					onClick={() => addArticle({
						title: props.title,
						author: props.author,
						urlToImage: props.urlToImage,
						description: props.description,
					})}
					icon={faBookmark}
					className={styles.bookmarkIcon}
					style={bookStyle}
				/>
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default TopArticle;
