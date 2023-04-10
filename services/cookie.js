module.exports = {
  parseCookie: (msg) => {
    if (!msg) {
      return;
    }
    try {
      const arry = msg.split(";");
      const objeto = {};

      for (let i = 0; i < arry.length; i++) {
        const par = arry[i].split("=");
        objeto[par[0]] = par[1];
      }
      return objeto;
    } catch (error) {
      console.log(error);
    }
  },
};
