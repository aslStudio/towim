import { GameCellGroup, GameCellGroupProps } from "@/entities/game"
import { images } from "@/shared/assets/images"
import { RouterPathes } from "@/shared/lib/types"
import { SliderSection } from "@/shared/ui"
import { useNavigate } from "react-router-dom"

export const GamesSlider = () => {
    const navigate = useNavigate()

    const data: GameCellGroupProps['group'][] = [
        [
            {
                id: 'fortune',
                title: 'Roulette',
                description: 'Spin the wheel and get prizes',
                isBadge: true,
                img: images.Games.fortune,
                onPress: () => navigate(RouterPathes.FORTUNE),
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