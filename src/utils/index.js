function checkUserAndToken(setGetUser, setGetToken) {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    setGetUser(JSON.parse(user));
    setGetToken(true);
  } else {
    setGetUser(false);
    setGetToken(false);
  }
}
function getUser(getUSer, getToken) {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  console.log(JSON.parse(user));
  if (user && token) {
    getUSer(JSON.parse(user));
    getToken(token);
  }
}
function deleteItem() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    setTimeout(function () {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }, 3 * 24 * 60 * 60 * 1000);
  }
}

function getTheme(setMode) {
  const theme = localStorage.getItem("theme");
  setMode(theme);
}

function removeQuotes(str) {
  return str.replace(/['"]/g, "");
}
const config = {
  zIndex: 0,
  readonly: false,
  activeButtonsInReadOnly: ["fullsize", "dots"],
  toolbarButtonSize: "middle",
  enableDragAndDropFileToEditor: true,
  theme: "dark",
  saveModeInCookie: false,
  spellcheck: true,
  editorCssClass: false,
  triggerChangeEvent: true,
  width: "auto",
  height: "auto",
  language: "auto",
  i18n: "en",
  tabIndex: -1,
  enter: "P",
  useSplitMode: false,
  colors: {
    greyscale: [
      "#000000",
      "#434343",
      "#666666",
      "#999999",
      "#B7B7B7",
      "#CCCCCC",
      "#D9D9D9",
      "#EFEFEF",
      "#F3F3F3",
      "#FFFFFF",
    ],
    palette: [
      "#980000",
      "#FF0000",
      "#FF9900",
      "#FFFF00",
      "#00F0F0",
      "#00FFFF",
      "#4A86E8",
      "#0000FF",
      "#9900FF",
      "#FF00FF",
    ],
    full: [
      "#E6B8AF",
      "#F4CCCC",
      "#FCE5CD",
      "#FFF2CC",
      "#D9EAD3",
      "#D0E0E3",
      "#C9DAF8",
      "#CFE2F3",
      "#D9D2E9",
      "#EAD1DC",
      "#DD7E6B",
      "#EA9999",
      "#F9CB9C",
      "#FFE599",
      "#B6D7A8",
      "#A2C4C9",
      "#A4C2F4",
      "#9FC5E8",
      "#B4A7D6",
      "#D5A6BD",
      "#CC4125",
      "#E06666",
      "#F6B26B",
      "#FFD966",
      "#93C47D",
      "#76A5AF",
      "#6D9EEB",
      "#6FA8DC",
      "#8E7CC3",
      "#C27BA0",
      "#A61C00",
      "#CC0000",
      "#E69138",
      "#F1C232",
      "#6AA84F",
      "#45818E",
      "#3C78D8",
      "#3D85C6",
      "#674EA7",
      "#A64D79",
      "#85200C",
      "#990000",
      "#B45F06",
      "#BF9000",
      "#38761D",
      "#134F5C",
      "#1155CC",
      "#0B5394",
      "#351C75",
      "#733554",
      "#5B0F00",
      "#660000",
      "#783F04",
      "#7F6000",
      "#274E13",
      "#0C343D",
      "#1C4587",
      "#073763",
      "#20124D",
      "#4C1130",
    ],
  },
  colorPickerDefaultTab: "background",
  imageDefaultWidth: "100%",
  uploader: { insertImageAsBase64URI: true },
  removeButtons: [],
  disablePlugins: [],
  extraButtons: [],
  sizeLG: 900,
  sizeMD: 700,
  sizeSM: 400,
  sizeSM: 400,
  buttons: [
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "outdent",
    "indent",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "image",
    "table",
    "link",
    "|",
    "align",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
    "copyformat",
    "|",
    "fullsize",
  ],
  buttonsXS: [
    "bold",
    "image",
    "|",
    "brush",
    "paragraph",
    "|",
    "align",
    "|",
    "undo",
    "redo",
    "|",
    "eraser",
    "dots",
  ],
  style: {
    background: "#171717",
    color: "#f3f1f1",
  },
  events: {},
  textIcons: false,
};

export {
  checkUserAndToken,
  removeQuotes,
  deleteItem,
  getTheme,
  getUser,
  config,
};

// import React, { useState } from "react";

// function ImageUploader() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     fetch("https://example.com/api/upload", {
//       method: "POST",
//       body: formData
//     })
//       .then(response => {
//         if (response.ok) {
//           setUploadStatus("Upload successful!");
//         } else {
//           setUploadStatus("Upload failed.");
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         setUploadStatus("Upload failed.");
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Upload Image</button>
//       {uploadStatus && <p>{uploadStatus}</p>}
//     </form>
//   );
// }
// Sure! Here's an example of how you could implement a comments feature with a one-to-many relationship in MongoDB using Mongoose:

// First, you'll need to create a new schema for comments. Let's call it CommentSchema. It might look something like this:

// php
// Copy code
// const mongoose = require('mongoose');

// const CommentSchema = new mongoose.Schema({
//   author: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// This schema defines the structure of each comment document in the database. It has an author field for the name of the person who wrote the comment, a body field for the actual comment text, and a createdAt field to record when the comment was posted.

// Next, you'll need to modify your existing PostSchema to include an array of comments. Add a new field to the schema like this:

// php
// Copy code
// const mongoose = require('mongoose');
// const CommentSchema = require('./CommentSchema');

// const PostSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   reading_time: {
//     type: Number,
//     required: true,
//   },
//   comments: [CommentSchema],
// });
// Note that we've added a new field called comments that is an array of CommentSchema documents. This is where we'll store all the comments associated with each post.

// Now, to add a new comment to a post, you can use the findByIdAndUpdate method provided by Mongoose. Here's an example:

// javascript
// Copy code
// const Post = mongoose.model('Post', PostSchema);

// async function addComment(postId, author, body) {
//   const comment = {
//     author,
//     body,
//   };

//   await Post.findByIdAndUpdate(postId, {
//     $push: { comments: comment },
//   });
// }
// This function takes three arguments: the ID of the post you want to add a comment to, the name of the person who wrote the comment, and the text of the comment. It creates a new CommentSchema document with the provided information, then uses findByIdAndUpdate to update the post document with the new comment. The $push operator is used to add the comment to the existing array of comments.

// To retrieve all the comments for a post, you can simply query the database for the post document and access the comments field. Here's an example:

// javascript
// Copy code
// async function getCommentsForPost(postId) {
//   const post = await Post.findById(postId);

//   return post.comments;
// }
// This function takes one argument: the ID of the post you want to retrieve comments for. It uses findById to query the database for the post document, then returns the comments array.

// Samuel Ume
// Help me show me a similar way for adding likes functionality
// !
// Sure, here's an example of how you could add a "likes" functionality to your blog posts:

// First, you'll need to modify your PostSchema to include a likes field. This field should be an array of user IDs who have liked the post. You could define it like this:

// php
// Copy code
// const PostSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   reading_time: {
//     type: Number,
//     required: true,
//   },
//   comments: [CommentSchema],
//   likes: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   }],
// });
// Here we've added a new field called likes, which is an array of user IDs (represented as ObjectIds in MongoDB) who have liked the post. We've also added a ref property to specify that the likes field refers to the User model in your application.

// Next, you'll need to create a new route in your Express app to handle adding likes to a post. This route might look something like this:

// csharp
// Copy code
// app.post('/posts/:id/like', async (req, res) => {
//   const postId = req.params.id;
//   const userId = req.user._id; // assuming you're using authentication middleware to get the user ID

//   try {
//     const post = await Post.findByIdAndUpdate(postId, { $addToSet: { likes: userId } }, { new: true });
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// });
// Here we've defined a new route that listens for POST requests to /posts/:id/like, where :id is the ID of the post to be liked. We're using the addToSet operator to add the current user's ID to the likes array, but only if it's not already present. The { new: true } option tells Mongoose to return the updated post document after the update is applied. Finally, we're sending the updated
