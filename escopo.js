console.log('====escopo=====');

var ShowCompaign = false;

var escopo = 'global'

function teste(){
    console.log(escopo);
    var escopo = 'local';
    console.log(escopo);
}
teste();