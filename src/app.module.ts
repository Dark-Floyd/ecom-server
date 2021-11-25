import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module'


@Module({
  imports: [
    TypeOrmModule.forRoot(),
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gpl'
		}),
    ProductModule,
    CartModule,
    

  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
