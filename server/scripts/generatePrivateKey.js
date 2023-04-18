const secp = require('ethereum-cryptography/secp256k1')
const { toHex } = require('ethereum-cryptography/utils')

function generateKeys() {
	// public and private key object
	keys = {}

	for (let i = 0; i < 3; i++) {
		const privateKey = toHex(secp.utils.randomPrivateKey())
		const publicKey = toHex(secp.getPublicKey(privateKey))
		const address = publicKey.slice(-20)
		keys['key' + i] = [privateKey, publicKey, address]
	}
	return keys
}
console.log(generateKeys())
