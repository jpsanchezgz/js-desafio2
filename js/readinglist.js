let params = new URLSearchParams(document.location.search.substring(1));
let idPost = params.get("postid")
console.log(idPost)


// const getPostById = id => {
    
//     $.ajax({
//         url: `https://cards-6f1a0-default-rtdb.firebaseio.com/${id}.json`,
//         method: "GET",
//         success: (response) => {
//             fillReadingList(response)
//           console.log(response);
         
//         },
//         error: (error) => {
//           console.log(error);
//         }
//       });
// };
// getPostById(idPost);

// const fillReadingList = (id) => {
//     let article = ``
//     ("p-3")
// }