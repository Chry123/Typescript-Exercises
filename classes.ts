class Person {

    //FIELDS
    private _name: string;
    private _age: number;

    //POSSIMAO FARE ANCHE COSI:
    /*
    class Person {

    //FIELDS
    DOVE CERANO I CAMPI METTERLI DIRETTAMENTE NEL COSTRUTTORE
    
        constructor (  private _name: string, private _age: number) 
        {
            this._name = name;
            this._age = age;
        }


    */


    constructor ( name:string, age:number) {
        this._name = name;
        this._age = age;
    }

    greetPerson(){
        console.log('Hello ${this.name}');
    }
    //Properties
    get name(){
        return this._name
    }

    set name(newName){
         this._name = newName;
    }

}

const marco= new Person("marco",34);
marco.greetPerson();
marco.name = 'Giovanni';