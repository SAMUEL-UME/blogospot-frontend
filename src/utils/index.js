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



function removeQuotes(str) {
  return str.replace(/['"]/g, "");
}

export { checkUserAndToken, removeQuotes, deleteItem };
  
  
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
