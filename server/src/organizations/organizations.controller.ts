import { Controller,Get,Post,Param,Body,Delete } from '@nestjs/common';

@Controller('organizations')
export class OrganizationsController {

    @Get()
    getAllOrganizations(){
        return "list of all orgs"
    }

    @Get(':id')
    getOrganizationById(@Param('id')id:string){
        return `this is org : ${id}`
    }

    @Post()
    createOrganization(@Body() body : any){
        return `created org : ${JSON.stringify(body)}`
    }

    @Delete(':id')
    deleteOrganizationById(@Param('id')id:string){
        return ` delete org ${id}`
    }

    @Post('id')
    editOrganizationById(@Param('id')id:string){
        return `edited org ${id}`
    }

    @Post('id')
    inviteMemberToOrganizationById(@Param('id')id:string){
        return `invited admin to ${id}`
    }
}
