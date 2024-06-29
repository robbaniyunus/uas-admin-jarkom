function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'Khodam Kamu Banyak',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'King Wota',
                'Anak Abah',
                'Raja Jamsut',
                'Satanic Rajin Sholat',
                'Wibu Pristel',
                'Peri',
                'Megaladon RGB',
                'Naga',
                'Skidip Toilet',
                'Setan',
                'Hantu Pinjol',
                'Jin Kutub',
                'Iblis Tahajud',
                'Kunti Bogel',
                'Rambu lalu lintas',
                'Ratu Sasimo',
                'Tuyul Mohak',
                'Buayah Putih',
                'Pace Kaneru',
                'Bendera PB',
                'Ambtron',
                'Ambaruwo',
                'Si Imut',
                'Fuad Sparta',
                'Sambo Mewing',
                'Pocong Push Up'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});