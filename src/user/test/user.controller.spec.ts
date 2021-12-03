import { TestingModule, Test } from "@nestjs/testing";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

describe("UserController Unit Tests", () => {
    let userController: UserController;
    let userService: UserService
    beforeAll(async () => {
        const ApiServiceProvider = {
            provide: UserService,
            useFactory: () => ({
                create: jest.fn(() => []),
                findAll: jest.fn(() => []),
                findOne: jest.fn(() => { }),
            })
        }
        const app: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService, ApiServiceProvider],
        }).compile();

        userController = app.get<UserController>(UserController);
        userService = app.get<UserService>(UserService);
    })

    it("calling create user method", () => {
        const dto = new CreateUserDto();
        expect(userController.create(dto)).not.toEqual(null);
    })


    it("calling findAll method", () => {
        userController.findAll();
        expect(userService.findAll).toHaveBeenCalled();
    })

    it("calling findOne method", () => {
        const id = '2'
        userController.findOne(id);
        expect(userService.findOne).toHaveBeenCalled();
    })



});