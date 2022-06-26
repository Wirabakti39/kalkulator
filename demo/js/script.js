let inputBox = document.querySelector('input');
const buttons = document.querySelectorAll('.tombol');

buttons.forEach(function(btn){  
    btn.addEventListener('click', () => {

        // ambil value dari atribut data pada tag button
        let dataValue = btn.attributes.getNamedItem('data-btn').value;


        if (dataValue=="*") {
            inputBox.value += '×';
        }
        else if (dataValue=="/") {
            inputBox.value += '÷';
        }
        else if (dataValue=="backspace") {
            // Hapus angka terakhir dari inputan
            const newValue = backspace(inputBox.value);
            inputBox.value = newValue;
        }
        else if(dataValue=="clear") {
            console.log('button clear');
            // Kosongkan tabel inputan
            inputBox.value = "";
        }
        else if (dataValue=="equal") {
            console.log('button equal');
            // 
        }
        else{
            inputBox.value += dataValue;
        }
    });
});

function backspace(inValue) {
    let lstNum = inValue.slice(-1);
    const nilai = inValue.replace(lstNum, "");
    return nilai;
}