import { GameCellGroup, GameCellGroupProps } from "@/entities/game"
import { images } from "@/shared/assets/images"
import { SliderSection } from "@/shared/ui"

export const GamesSlider = () => {
    const data: GameCellGroupProps['group'][] = [
        [
            {
                id: 'fortune',
                title: 'Roulette',
                description: 'Spin the wheel and get prizes',
                isBadge: true,
                img: images.Games.fortune,
            },
            'placeholder',
            'placeholder',
        ],
        [
            'placeholder',
            'placeholder',
            'placeholder',
        ],
        [
            'placeholder',
            'placeholder',
            'placeholder',
        ]
    ]

    return (
        <SliderSection 
            list={data.map(item => <GameCellGroup group={item} />)}
            Skeleton={<></>}

            title="TOP Games"
            buttonText="+ Soon"
            isButtonDisabled={true}
        />
    )
}