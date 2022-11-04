import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './create-produto.dto';
import { Produto } from './produto.schema';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    await this.produtosService.create(createProdutoDto);
  }

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Produto> {
    return this.produtosService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.produtosService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createProdutoDto: CreateProdutoDto) {
    await this.produtosService.update(id, createProdutoDto);
    return createProdutoDto;
  }
}
