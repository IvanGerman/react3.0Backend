const app = require('./app.js');
//const { PORT } = require('./common/config.js');
var PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
