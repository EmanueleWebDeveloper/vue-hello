const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue',
      imageSource: 'https://picsum.photos/700/600' 
    }
  }
}).mount('#app');