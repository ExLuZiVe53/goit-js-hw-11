// https://pixabay.com/api/docs/
// key = 38871249-2eed7f344cf93ec506352b726

// async function getPictures() {
//   try {
//     const URL = 'https://pixabay.com/api/';
//     const key = '38871249-2eed7f344cf93ec506352b726';
//     const resp = await fetch(
//       'https://pixabay.com/api/?key=38871249-2eed7f344cf93ec506352b726&q=1&image_type=photo&orientation=horizontal&safesearch=true'
//     );
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     const data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getPictures();
