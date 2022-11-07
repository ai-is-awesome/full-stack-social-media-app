export const getIdFromPath = (path) => {
  const arr = path.split("/");
  return arr ? arr.slice(-1)[0] : "";
};

export const getUserProfilePageURL = (uid) => {
  return `/profile/${uid}`;
};

// Get top N values from an object
export const getTopValues = (obj, topN) => {
  var sortedEntries = Object.entries(obj).sort(function (a, b) {
    return b[1] - a[1];
  });
  let elem = sortedEntries[0][1];
  let slice = null;
  for (let i = 1; i < sortedEntries.length; i++) {
    // console.log(elem, sortedEntries[i][1])
    if (elem === sortedEntries[i][1] && i >= topN) {
      slice = i - 1;
      break;
    } else {
      elem = sortedEntries[i][1];
    }
  }
  sortedEntries = sortedEntries.slice(0, slice + 1);
  // console.log('slice at : ', slice)
  // console.log(sortedEntries, topN - 1)
  // var last = sortedEntries[topN-1][1];

  // console.log('sorted: ', sortedEntries)
  // var result = sortedEntries.filter(function(entry){
  //     console.log('entry: ', entry)
  //     return entry[1] >= last;
  // });

  return Object.fromEntries(sortedEntries);
};

export const getImageFallbackURL = () => {
  return "https://firebasestorage.googleapis.com/v0/b/socialmediaapp-59ba2.appspot.com/o/imagePosts%2Fman.png?alt=media&token=046ec377-5c0a-4b6b-b14b-67b2081d4be0";
};
