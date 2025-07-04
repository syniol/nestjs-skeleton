import { Module } from '@nestjs/common'
import { AuthGuard } from './auth.guard'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthGuard, AuthService],
  exports: [AuthGuard],
})
export class AuthModule {}
