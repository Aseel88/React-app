const getAccessToken = () => {
    const hash = window.location.hash;
    const match = hash.match(/#access_token=[a-zA-Z_0-9-_]*/g);
    if (match) {
      return match[0].split("=")[1];
    }
  
    return false;
  };
  
  export default getAccessToken;