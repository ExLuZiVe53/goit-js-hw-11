// https://pixabay.com/api/docs/
// key = 38871249-2eed7f344cf93ec506352b726

// {
//     "total": 1031,
//     "totalHits": 500,
//     "hits": [
//         {
//             "id": 3094696,
//             "pageURL": "https://pixabay.com/photos/skyscraper-architecture-city-heaven-3094696/",
//             "type": "photo",
//             "tags": "skyscraper, architecture, nature",
//             "previewURL": "https://cdn.pixabay.com/photo/2018/01/20/14/26/skyscraper-3094696_150.jpg",
//             "previewWidth": 150,
//             "previewHeight": 85,
//             "webformatURL": "https://pixabay.com/get/g9b2a7cb8608d3d7cd6dc86bc39b694476568f51b2b1b2dd1f21e7d567440245b2062721078a4ca26b445f8577d7994a4a4f1de05eb9466ed4abc7843d8ca8bca_640.jpg",
//             "webformatWidth": 640,
//             "webformatHeight": 364,
//             "largeImageURL": "https://pixabay.com/get/g75dfa65bdea4dd6cff6b3dab83b42873b633bdaaca5548232128008bf9e03b8154a23be16747fe664f5e8e083502a320e44b6c24b2bcacc01104024f816f655d_1280.jpg",
//             "imageWidth": 4446,
//             "imageHeight": 2532,
//             "imageSize": 2188546,
//             "views": 216890,
//             "downloads": 159334,
//             "collections": 375,
//             "likes": 367,
//             "comments": 80,
//             "user_id": 7645255,
//             "user": "jplenio",
//             "userImageURL": "https://cdn.pixabay.com/user/2022/11/21/17-13-53-31_250x250.png"
//         }
//     ]
// }

async function getPictures() {
  try {
    const URL = 'https://pixabay.com/api/';
    const key = '38871249-2eed7f344cf93ec506352b726';
    const resp = await fetch(
      'https://pixabay.com/api/?key=38871249-2eed7f344cf93ec506352b726&q=1&image_type=photo&orientation=horizontal&safesearch=true'
    );
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPictures();
