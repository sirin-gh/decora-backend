const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Le prénom est requis"],
    },
    lastName: {
      type: String,
      required: [true, "Le nom est requis"],
    },
    email: {
      type: String,
      required: [true, "L'email est requis"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Le mot de passe est requis"],
      minlength: 6,
    },
    photoUrl: {
      type: String,
      default: null,
    },
    provider: {
      type: String,
      default: "email",
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);