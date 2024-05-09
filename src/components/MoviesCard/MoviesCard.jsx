import './MoviesCard.css';

const MoviesCard = ({ movie, isAuth, isFavorite, favoriteClick }) => {
  return (
    <div className='card'>
      <a className='card__link' target='_blank' href='/#'>
        <img
          src={movie.posterUrlPreview}
          alt={`Обложка фильма: ${movie.name}`}
          className='card__image'
        />
      </a>
      <div className='card__name'>{ movie.nameRu }</div>
      <div className='card__other'>
        Подробнее
        { 
            isAuth &&
           <div onClick={favoriteClick} style={{background: isFavorite ? "red" : "green"}} className='card__favorite'>
              {
                isFavorite ? "Удалить" : "Добавить"
              }
           </div>
        }
      </div>
    </div>
  );
};

export default MoviesCard;
