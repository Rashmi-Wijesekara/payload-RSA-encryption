import JSEncrypt from "jsencrypt";

export const encrypt = async function (body: string) {

    // public key
    const publicKey = `
    -----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
    -----END PUBLIC KEY-----`;

    // Start our encryptor.
    var encrypt = new JSEncrypt();

    // Assign our encryptor to utilize the public key.
    encrypt.setPublicKey(publicKey);

    // Perform our encryption based on our public key - only private key can read it!
    var encrypted = encrypt.encrypt(body);
    return encrypted
};

