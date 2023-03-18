function checkUserAndToken(setGetUser, setGetToken) {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    setGetUser(true);
    setGetToken(true);
  } else {
    setGetUser(false);
    setGetToken(false);
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

export { checkUserAndToken, removeQuotes, deleteItem, getTheme };

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
