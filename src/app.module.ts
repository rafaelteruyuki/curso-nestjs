import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:SjEMjl96rYV3uQdV@curso-nest-js.iznecm5.mongodb.net/livraria',
      {
        retryWrites: true,
        w: 'majority',
      },
    ),
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
