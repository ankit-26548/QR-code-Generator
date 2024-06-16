const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');

const qrContainer=document.querySelector('.qr-body');
let size = sizes.value;
generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();     //reload na ho page again & again
    if(qrText.value.length > 0){
    generateQRCode();
    }
    else{
        alert("Enter the Text or URL to Generate your QR CODE");
    }
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    generateQRCode();

});

function generateQRCode(){
    qrContainer.innerHTML = "";    //for empty krne k liye phla wala QR code
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",

    });
}