import React from "react";

const PostForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Заголовок поста</label>
        <input type="text" className="form-control" id="title" />
      </div>
      <button className="btn btn-success" type="submit">
        Создать
      </button>
    </form>
  );
};

export default PostForm;
