type Tumbler = {
    nama: string;
    harga: number
} | null;

type Petugas = {
    karir: string
};

let tumbler: Tumbler = {
    nama: 'tuku', harga: 300000
};

let petugas: Petugas = {
    karir: 'MULUS'
};

function naikKereta(): void {
    tumbler = null;
}

function ngeluhDiSosmed(): void {
    petugas.karir = 'TERANCAM'
}

naikKereta()
ngeluhDiSosmed();

console.log('Petugas',
petugas.karir
);