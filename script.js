// Encryption key :
var cipherKey="qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()'0987654321",
	keyArray = cipherKey.split(""),
	alfabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()'1234567890",
	alfabetArray=alfabet.split("");

console.log("cipher key : " + cipherKey + ".")
console.log("Cipher key array : " + keyArray + ".");
console.log("Alfabet : " + alfabet + ".");
console.log("Alfabet array : " + alfabetArray + ".");

//HTML Variables
var BtnCipher = document.getElementById("BtnCipher"),
	BtnDecipher = document.getElementById("BtnDecipher"),
	BtnReset1 = document.getElementById("BtnReset1"),
	BtnReset2 = document.getElementById("BtnReset2"),
	plainInput = document.getElementById("plainInput"),
	plainText = document.getElementById("plainText"),
	cipheredOutput = document.getElementById("cipheredOutput"),
	cipheredInput = document.getElementById("cipheredInput"),
	cipheredText = document.getElementById("cipheredText"),
	decipheredOutput = document.getElementById("decipheredOutput"),
	kunci = document.getElementById("kunci"); kunci.innerHTML = cipherKey;

//Buttons interactions
BtnCipher.addEventListener("click", function () {
	console.log("-----PLAIN INPUT TERDETEKSI !!!-----");
    console.log("Plain Input : " + plainInput.value);
    plain = plainInput.value;
    Encrypt();
    plainText.innerHTML = plain;

});
BtnDecipher.addEventListener("click", function () {
    console.log("-----CIPHERED INPUT TERDETEKSI !!!-----");
    console.log("Cipher Input : " + cipheredInput.value);
    ciphered = cipheredInput.value;
    Decrypt();
    cipheredText.innerHTML = ciphered;

});
BtnReset1.addEventListener("click", function () {
    plainInput.value = "";
    plainText.innerHTML = "[none]";
    cipheredOutput.innerHTML= "[none]";

});
BtnReset2.addEventListener("click", function () {
    cipheredInput.value = "";
    cipheredText.innerHTML= "[none]";
    decipheredOutput.innerHTML= "[none]";
});

//Fungsi enkripsi
function Encrypt() {
	var inputArray = plain.split("");
	console.log("Input array : " + inputArray + ".");
	var inputIndexArray = [],
		cipheredArray = [];

	console.log("Alfabet start : " + alfabet.indexOf(inputArray[0]));
	for(var i=0; i<plain.length; i++) {
		inputIndexArray[i] = alfabet.indexOf(inputArray[i]);
	}
	console.log("inputIndexArray = " + inputIndexArray);

	for(var j=0; j<plain.length; j++) {
		cipheredArray[j] = cipherKey[inputIndexArray[j]];
	}
	console.log("cipheredArray = " + cipheredArray);
    cipheredOutput.innerHTML= cipheredArray.join("");
}

//Fungsi dekripsi
function Decrypt() {
	var cipheredInputArray = ciphered.split("");
	console.log("cipheredInputArray = " + cipheredInputArray + ".");
	var cipheredInputIndexArray = [],
		DecipheredArray = [];

	for(var i=0; i<ciphered.length; i++) {
		cipheredInputIndexArray[i] = cipherKey.indexOf(cipheredInputArray[i]);
	}
	console.log("cipheredInputIndexArray = " + cipheredInputIndexArray + ".");

	for(var j=0; j<ciphered.length; j++) {
		DecipheredArray[j] = alfabet[cipheredInputIndexArray[j]];
	}
	console.log("DecipheredArray = " + DecipheredArray + ".");
	decipheredOutput.innerHTML = DecipheredArray.join("");
}