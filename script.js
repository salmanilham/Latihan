let bintang = '';
let spasi = '';
for( let i=6; i>0; i-- ) {
    for( let b=0; b<i; b++ ) {
        bintang += '*';
    }
    for( let c=1; c<n-1; c++ ) {
        spasi += ' ';
    }
    bintang +='\n';
}
console.log (bintang);
console.log (spasi);