const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    cpassword: {
      type: String,
      required: true,
      min: 5,
    },
    types: {
      type: String,
      required: true,
      // enum: ['recruiter', 'applicant'],
    },
    // token: {
    //   type: String,
    //   required: true,
    // },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// before saving password it encrypted

UserSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  // if (user.isModified('password', 'cpassword')) {
  //   user.password = await bcrypt.hash(user.password, 8);
  //   user.cpassword = await bcrypt.hash(user.cpassword, 8);
  // }

  next();
});

// decrypt password

UserSchema.methods.matchPassword = async function (
  enteredPassword,
  enteredCPassword
) {
  return await bcrypt.compare(enteredPassword, this.password);
  // await bcrypt.compare(enteredCPassword, this.cpassword);
};

// Generate Token

UserSchema.methods.generateAuthToken = async function () {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, 'JobPortal');

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await userModel.findOne({ email });
  console.log(user);

  if (!user) {
    throw new Error('Unable to login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  console.log('ismatch ' + isMatch);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
