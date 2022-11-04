import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProdutoDto } from './create-produto.dto';
import { Produto, ProdutoDocument } from './produto.schema';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel(Produto.name) private readonly produtoModel: Model<ProdutoDocument>
  ) {}

  async create(createProdutoDot: CreateProdutoDto): Promise<Produto> {
    const createdProduto = await this.produtoModel.create(createProdutoDot);
    return createdProduto;
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }

  async findOne(id: string): Promise<Produto> {
    return this.produtoModel.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise<Produto> {
    const deletedProduto = await this.produtoModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedProduto;
  }

  async update(id: string, produto: Produto): Promise<Produto> {
    return this.produtoModel
      .findOneAndUpdate({ _id: id }, {
        $set: produto
      })
      .exec();
  }
}
