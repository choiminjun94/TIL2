let zip = new Set(["111-2222", "222-3333"])

function* makeZip(){
    yield "111-2222";
    yield "222-3333"
}

let zips = makeZip();
zip = new Set(zips)
console.log(zip.size);
