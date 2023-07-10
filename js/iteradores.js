const realcauca =
    {
    presidente: "David Castro",
    correo: "realcauca@gmail.com",
    celular:"3127183015",
        CT:{
            Dt: "David Castro",
            At: "Fabio Rengifo",
            Pr: "Gentil Muñoz",
            Pf: "Duvan palechor",
            Pa: "Maicol tovar"
            }
    }
console.log(realcauca);

    const {presidente, correo, celular,CT:{Dt}} = realcauca;


    //esto es para congelar datos 
object.freeze(realcauca);

