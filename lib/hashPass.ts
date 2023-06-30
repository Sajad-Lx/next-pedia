import * as crypto from "crypto";

type props = {
  password: string;
  oldPassword?: string;
  salt: string;
};

export async function hashPassword({ password, salt }: props) {
  return new Promise<string>((resolve, reject) => {
    crypto.pbkdf2(password, salt, 1000, 64, "sha512", (err, derivedKey) => {
      if (err) return reject(err);
      return resolve(derivedKey.toString("hex"));
    });
  });
}

export async function verifyPassword({ password, oldPassword, salt }: props) {
  let match = false;
  await hashPassword({ password, salt })
    .then((value) => {
      if (value === oldPassword) {
        match = true;
      }
    })
    .catch((err) => console.log(err));
  return match;
}

// For Testing

// verifyPassword({
//   password: "HelloPassword",
//   oldPassword:
//     "e1f30fa728c3b04d58b82fc85f04200cbf642407bd07edbe515d9c355a9f264ac3a84fed2edc2436904e680326964c00f43d58ce7328ce052d6fca1a174e1bf5",
//   salt: "Saltisgood",
// }).then((value) => console.log(value));

