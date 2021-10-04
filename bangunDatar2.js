// Rumus luas dan keliling bangun datar persegi

const luasPersegi = function (sisiPersegi) {
    return sisiPersegi ** 2;
}

const kelilingPersegi = function (sisiPersegi) {
    return 4 * sisiPersegi;
}

// Rumus luas dan keliling bangun datar persegi panjang

const luasPersegiPanjang = function (panjang, lebar) {
    return panjang * lebar;
}

const kelilingPersegiPanjang = function (panjang, lebar) {
    return 2 * (panjang + lebar);
}

// Rumus luas dan keliling bangun datar segitiga

const luasSegitiga = function (sisiB, tinggiSegitiga) {
    return (sisiB * tinggiSegitiga) / 2;
}

const kelilingSegitiga = function (sisiA, sisiB, sisiC) {
    return sisiA + sisiB + sisiC ;
}

// Rumus luas dan keliling bangun datar trapesium

const luasTrapesium = function (sisiAtas, sisiBawah, sisiMiring, tinggiTrapesium) {
    return sisiAtas + sisiBawah + sisiMiring + tinggiTrapesium;
}

const kelilingTrapesium = function (sisiAtas, sisiBawah, sisiMiring, tinggiTrapesium) {
    return ((sisiAtas + sisiBawah + sisiMiring) * tinggiTrapesium) / 2
}

// Rumus luas dan keliling bangun datar jajar genjang

const luasJajarGenjang = function (alasJajarGenjang, tinggiJajarGenjang) {
    return alasJajarGenjang * tinggiJajarGenjang;
}

const kelilingJajarGenjang = function (alasJajarGenjang, SisiMiring) {
    return 2 * (alasJajarGenjang + SisiMiring);
}

// Rumus luas dan keliling bangun datar belah ketupat

const luasBelahKetupat = function (diagonal1, diagonal2) {
    return (diagonal1 * diagonal2) / 2;
}

const kelilingBelahKetupat = function (sisiBelahKetupat) {
    return sisiBelahKetupat * 4;
}

// Rumus luas dan keliling bangun datar layang layang

const luasLayangLayang = function (diagonalSatu, diagonalDua) {
    return (diagonalSatu * diagonalDua) / 2;
}

const kelilingLayangLayang = function (sisiLL1, sisiLL2) {
    return 2 * (sisiLL1 + sisiLL2);
}


