console.log(__dirname);

setTimeout(() => {
  setInterval(() => {
    console.log("hello world");
  }, 1000);
}, 2000);
