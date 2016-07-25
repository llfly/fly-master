document.write('<h1>Hello World</h1>');

//只在开发时才显示
if (__DEV__) {
  document.write(new Date());
}
