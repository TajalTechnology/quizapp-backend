import { QuizesService } from './quizes.service'
import { Test, TestingModule } from '@nestjs/testing'
import { QuizesController } from './quizes.controller'

describe('QuizesController', () => {
    let controller: QuizesController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [QuizesController],
            providers: [QuizesService]
        }).compile()

        controller = module.get<QuizesController>(QuizesController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
