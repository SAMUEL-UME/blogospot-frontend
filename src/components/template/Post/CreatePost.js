import React, { useState } from "react";
import styles from "@/styles/template/Post/CreateBlog.module.css";
import Tiptap from '../components/Tiptap'

const CreateBlog = ({ state, handleInputChange, handleSubmit }) => {
  return (
    <div className={styles.container}>
      <form className={styles.formmain} onSubmit={handleSubmit}>
        <div className={styles.formcontrol}>
          <label>Title </label>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleInputChange}
          />

          <label>Description </label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleInputChange}
          />

          <label>Tags </label>
          <input
            type="text"
            name="tags"
            value={state.tags}
            onChange={handleInputChange}
          />

          <label>Post </label>
          <input
            type="text"
            name="post"
            value={state.body}
            onChange={handleInputChange}
          />
          <Tiptap />

          <div className={styles.button}>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
