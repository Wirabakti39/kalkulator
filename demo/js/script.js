let inputBox = document.querySelector('input');
const buttons = document.querySelectorAll('.tombol');

buttons.forEach(function(btn){  
    btn.addEventListener('click', () => {

        // ambil value dari atribut data pada tag button
        const dataValue = btn.attributes.getNamedItem('data-btn').value;

        if (dataValue=="backspace") {
            // Hapus angka terakhir dari inputan
            const newValue = backspace(inputBox.value);
            inputBox.value = newValue;
        }
        else if(dataValue=="clear") {
            // Kosongkan tabel inputan
            inputBox.value = "";
        }
        else if(dataValue=="equal") {
            // Operasi hitung pada inputBox dijalankan
            if (inputBox.value==='') {
                inputBox.value = '';
            } else {
                try {
                    // Dihitung menggunakan bantuan fungsi eval() wkwk.
                    inputBox.value = eval(inputBox.value);
                } catch (err) {
                    // Muncul pop-up alert jika input user tidak sesuai / tdk bisa dijalankan
                    alert(err);
                }
            }
        } else{
            inputBox.value += dataValue;
        }
    });
});

function backspace(inValue) {
    const arr = Array.from(inValue); // ubah string menjadi char dlm bentuk array
    const newValue = inValue.slice(0, (arr.length - 1)); // slice index terakhir dari array tadi
    return newValue;
}