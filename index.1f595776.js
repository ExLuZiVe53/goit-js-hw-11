!async function(){try{const o=await fetch("https://pixabay.com/api/?key=38871249-2eed7f344cf93ec506352b726&q=1&image_type=photo&orientation=horizontal&safesearch=true");if(!o.ok)throw new Error(o.statusText);const t=await o.json();console.log(t)}catch(o){console.log(o)}}();
//# sourceMappingURL=index.1f595776.js.map
