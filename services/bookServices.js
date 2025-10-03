import livroModel from "./bookRegister.js"

export default class BookService{
    async  bookAdd(nome,exemplares,autor,ano){
        console.log("Função de bookAdd encontrada");
        const livro =new livroModel({nome,exemplares,autor,ano})
        const salvamento= await livro.save();
        return salvamento;
    }

    async bookListing(){
        console.log("Função de bookListing encontrada");
        return await livroModel.find();
    }
    async bookSearch(nome){
        console.log("Função de bookSearch encontrada");
        return await livroModel.findOne({nome});
    }
    async bookReturn(){
        const livro=await this.bookSearch(nome);
        if(livro && livro.disponibilidade){
            livro.disponibilidade=true;
            await livro.save()
            return livro
        }
        return null

   }
   async bookReservation(){
    const livro=await this.bookSearch(nome);
    if(livro && livro.disponibilidade){
        livro.disponibilidade=false;
        await livro.save();
        return livro;
    }
    return null;    
   }
}