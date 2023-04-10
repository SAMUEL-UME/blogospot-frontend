import React, { useState, useRef, useCallback, forwardRef } from "react";
import styles from "@/styles/Post/CreateBlog.module.css";
import logo from "@/public/blogospot-red.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/src/utils";

function CreateBlog () {
  const importJodit = () => import("jodit-react");
  const JoditEditor = dynamic(importJodit, {
    ssr: false,
  });
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  const handleBlur = useCallback(
    (newContent) => {
      setContent(newContent);
    },
    [setContent]
  );

  return (
    <div className={styles.create_blog}>
      <div className={styles.crt_nav}>
        <Link href={"/"}>
          <Image src={logo} width="70" height="50" alt="logo" />
        </Link>
        <div>
          <ul>
            <li>Preview</li>
            <li className={styles.ani}>
              <span>Publish</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.write}>
          <div className={styles.manual}>
            <label htmlFor="image">Select Image</label>
            <input type="file" className={styles.custom} id="image" hidden />
            <textarea placeholder="Add Title..."></textarea>
          </div>
          <div className={styles.rich_text}>
            <JoditEditor
              ref={editorRef}
              value={content}
              config={config}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.submit}>
            <button>Save as draft</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
