const { Readable } = require('stream')


class A extends Readable{
    i = 1;
    _read(size){
        if(this.i === 20){
            this.push(null);
            return;
        }
        this.push(this.i.toString());
        this.i += 1;
    }
}


const oneToNine = new A()
oneToNine.pipe(process.stdout)