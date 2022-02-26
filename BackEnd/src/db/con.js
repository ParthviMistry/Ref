const mongoose = require('mongoose');

mongoose
  .connect(
    process.env.CONNECTION_STRING,
    // 'mongodb+srv://parthvi:parthvi48@cluster0.vxgk8.mongodb.net/JobPortal',
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log('Connection Successful');
    // console.log(me);
  })
  .catch((error) => {
    console.log('Error!' + error);
  });

// module.exports = connection = async () => {
//   try {
//     const connectionParams = {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     };
//     await mongoose.connect(process.env.CONNECTION_STRING, connectionParams);
//     console.log('connected to database.');
//   } catch (error) {
//     console.log(error, 'could not connect database.');
//   }
// };
