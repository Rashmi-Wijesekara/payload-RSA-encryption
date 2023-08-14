# API Payload RSA Encryption

This repository demonstrates an encryption and decryption process using RSA encryption between a React TypeScript frontend and a .NET Core 6 API.

### Overview
The project showcases how to securely transmit data from the frontend to the backend using RSA encryption. The encryption is performed on the frontend using the provided public key, and the corresponding private key on the backend is used to decrypt the payload.

### Features
- Encryption of payload on the frontend using RSA public key with jsencrypt package.
- Decryption of payload on the backend using RSA private key with Bouncy Castle (C#) and System.Security.Cryptography (C#) libraries.
- Demonstrates secure communication between frontend and backend.

### References
- [C# RSA encryption-decryption with my own key](https://t-phitakgul.medium.com/c-rsa-encryption-decryption-with-my-own-key-dab2d1f4df1b)
- [Online RSA Encryption, Decryption And Key Generator Tool](https://www.javainuse.com/rsagenerator)
- [How to Perform RSA Encryption in Javascript (React.js) and Golang](https://bartlomiejmika.com/post/2022/how-to-perform-rsa-encryption-in-javascript-and-golang/)
