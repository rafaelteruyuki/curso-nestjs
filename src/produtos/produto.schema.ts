import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProdutoDocument = HydratedDocument<Produto>;

@Schema()
export class Produto {
  @Prop() codigo: string;
  @Prop() nome: string;
  @Prop() preco: number;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
