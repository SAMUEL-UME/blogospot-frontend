import styles from "@/styles/template/Post/CreateBlog.module.css";
import Tiptap from "../../Tiptap";
import { useState } from "react";

const CreateBlog = ({ state, handleInputChange, handleSubmit }) => {
  const [desc, setDesc] = useState("");
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
          <Tiptap setDesc={setDesc} />

          <div className={styles.button}>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
