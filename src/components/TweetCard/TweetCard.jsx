import { useDispatch } from 'react-redux';
import { followUser } from '../../redux/operations';
import style from './TweetCard.module.css';
export const TweetCard = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  isFollowing,
}) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(
      followUser(
        isFollowing
          ? { id, followers: followers - 1, isFollowing: false }
          : { id, followers: followers + 1, isFollowing: true }
      )
    );
  };

  return (
    <div className={style.wrapper}>
      <img className={style.image} src={avatar} alt={user} />

      <div className={style.info}>
        <p className={style.stats}>{tweets.toLocaleString('en-US')} Tweets</p>
        <p className={style.stats}>
          {followers.toLocaleString('en-US')} Followers
        </p>
      </div>

      <button
        className={isFollowing ? style.active : style.btn}
        type="button"
        onClick={handleFollow}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};
