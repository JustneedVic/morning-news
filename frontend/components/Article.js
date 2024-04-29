import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addArticleToBookmark } from '../reducers/bookmarks';


function Article(props) {

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
		<div className={styles.articles}>
			<div className={styles.articleHeader}>
				<h3>{props.title}</h3>
				<FontAwesomeIcon
					onClick={() => {
						addArticle({
							title: props.title,
							author: props.author,
							urlToImage: props.urlToImage,
							description: props.description,
						})
					}}
					isFavorite={favoriteArticles.includes(props.title)}
					icon={faBookmark}
					className={styles.bookmarkIcon}
					style={bookStyle}
				/>
			</div>
			<h4 style={{ textAlign: "right" }}>- {props.author}</h4>
			<div className={styles.divider}></div>
			<Image src={props.urlToImage} alt={props.title} width={600} height={314} />
			<p>{props.description}</p>
		</div>
	);
}

export default Article;
