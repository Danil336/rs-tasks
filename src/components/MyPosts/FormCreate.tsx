import React, { useState } from 'react';
import './formCreate.scss';
import MyPost, { PostProps } from './MyPost';
import Popup from './Popup';
import { CSSTransition } from 'react-transition-group';

export const FormCreate = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const [isValid, setIsValid] = useState(true);

  const [showPopup, setShowPopup] = useState(false);

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title !== '' && description !== '' && date !== '') {
      const newPost = {
        title: title,
        description: description,
        date: date,
      };

      setPosts([...posts, newPost]);

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      setTitle('');
      setDescription('');
      setDate('');

      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="posts_page_field">
      {showPopup && (
        <CSSTransition
          in={true} // передайте свойство `in`, которое определяет, должен ли элемент отображаться
          timeout={300} // задайте длительность анимации в миллисекундах
          classNames="my-animation" // задайте имя CSS-класса для анимации
          unmountOnExit // передайте свойство `unmountOnExit`, чтобы элемент был удален из DOM после завершения анимации
        >
          <Popup message="Post created!" />
        </CSSTransition>
      )}
      <form className="form_create">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title.."
          className="create_title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="create_description"
          placeholder="description.."
        />
        <input
          className="create_date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
        <button onClick={createPost} className="create_submit" type="submit">
          CREATE POST
        </button>
        {!isValid && <div className="valid_error">Fill in all the fields!</div>}
      </form>

      <div className="post_list">
        {posts.map((post, i) => (
          <MyPost key={i} title={post.title} description={post.description} date={post.date} />
        ))}
      </div>
    </div>
  );
};
