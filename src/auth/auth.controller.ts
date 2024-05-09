import { Body,Controller,HttpCode,HttpStatus,ParseIntPipe,Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from "./dto";

@ApiTags('Swagger-tag')
@Controller('auth')
export class AuthController{
    constructor( private authService : AuthService) {}

    
    @Post('signup')
    signup(@Body() dto:AuthDto) {
        console.log({
            dto
        })
        return this.authService.signup(dto);
    }
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto:AuthDto) {
        return this.authService.signin(dto);
    }
}