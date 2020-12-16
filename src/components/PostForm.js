import React, { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      id: Date.now().toString(),
    };

    console.log(newPost);
    setTitle("");
  };

  const changeInputHandler = (e) => {
    return setTitle(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Заголовок поста</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          name="title"
          onChange={(e) => changeInputHandler(e)}
        />
      </div>
      <button className="btn btn-success" type="submit">
        Создать
      </button>
    </form>
  );
};

export default PostForm;
