
const cats = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendCat(name){
cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const copyofcats = [...cats, name];
    return copyofcats;
}

function prependCat(name){
    const cats2 = [name, ...cats];
    return cats2;
}

function removeLastCat(){
        return cats.slice(0, -1);
        
}

function removeFirstCat(){
     const cats3 = cats.slice(1);
    return cats3;
}