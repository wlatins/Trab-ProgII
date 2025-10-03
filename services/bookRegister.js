import mongoose from "mongoose";

const CadastroLivroSchema = new mongoose.Schema({
    nome:String,
    exemplares: Number,
    autor:String,
    ano:Number,
    disponibilidade:{type:Boolean,default:true},
});

export default mongoose.model("CadastroLivro", CadastroLivroSchema);