import { CreateAppModal } from "@/features/apps"

import { appsModel } from "@/entities/apps/model"
import { AppCellGroup, AppCellGroupSkeleton } from "@/entities/apps/ui"

import { SliderSection } from "@/shared/ui"
import { useModal } from "@/shared/ui"

export const AppSlider = () => {
    const { isLoading, list, fetch } = appsModel.useApps()

    const { isOpen, open, close } = useModal()

    return (
        <>
            <SliderSection 
                list={list.map(item => <AppCellGroup group={item} />)}
                Skeleton={<AppCellGroupSkeleton />}

                title="TOP Mini Apps"
                buttonText="+ Add App"
                isButtonDisabled={false}
                onButtonClick={open}

                isLoading={isLoading}
                fetch={fetch}
            />
            <CreateAppModal
                isOpen={isOpen}
                onClose={close}
            />
        </>
    )
}
