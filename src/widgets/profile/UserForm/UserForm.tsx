import React from "react"
import { reflect } from "@effector/reflect"

import { ViewerField, viewerModel, ViewerNFTField, ViewerSocialsField } from "@/entities/viewer"

import { LoadingLayout } from "@/shared/ui"

import styles from './UserForm.module.scss'

export const UserForm = () => {
    return (
        <div className={styles.root}>
            <EditButtonReflect />
            <FieldReflect 
                className={styles.field}
                title="About me"
                placeholder="Here you can write about you"
                fieldName={'about'}
                icon={'boost'}
            />
            <FieldReflect 
                className={styles.field}
                title="Projects"
                placeholder="Here you can write about your projects"
                fieldName={'projects'}
                icon={'boost'}
            />
            <FieldReflect 
                className={styles.field}
                title="Skills"
                placeholder="Here you can write about your skills"
                fieldName={'skills'}
                icon={'boost'}
            />
            <FieldReflect 
                className={styles.field}
                title="Work experience"
                placeholder="Here you can write about your work experience"
                fieldName={'workExperience'}
                icon={'boost'}
            />
            <NFTFielfReflect
                className={styles.field} 
            />
            <SocialsFieldReflect 
                className={styles.field} 
            />
        </div>
    )
}

const FieldReflect = reflect({
    view: ViewerField,
    bind: {
        viewer: viewerModel.expandModule.$expandViewer,
        isLoading: viewerModel.expandModule.$isLoading,
        isEditing: viewerModel.expandModule.$isEditable,
        onInput: viewerModel.expandModule.expandViewerUpdated,
    }
})

const EditButton = React.memo<{
    isEditable: boolean
    onClick: () => void
}>(({
    isEditable,
    onClick
}) => {
    return (
        <button 
            className={styles['edit-button']}
            onClick={onClick}
        >
            <LoadingLayout 
                isLoading={isEditable}
                Content={(
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9182 3.39398C19.132 3.36998 19.3478 3.36998 19.5615 3.39398C20.1355 3.45843 20.6024 3.72417 21.0334 4.06153C21.44 4.37982 21.8915 4.8254 22.4211 5.34809L22.494 5.41996C23.0368 5.95561 23.4989 6.41156 23.8289 6.82283C24.1782 7.25827 24.4543 7.73178 24.5211 8.31694C24.546 8.53429 24.546 8.75377 24.5211 8.97112C24.4543 9.55628 24.1782 10.0298 23.8289 10.4652C23.4989 10.8765 23.0368 11.3324 22.494 11.8681L10.4774 23.7264C10.4501 23.7534 10.4231 23.7801 10.3963 23.8066C9.97803 24.2203 9.62243 24.572 9.17039 24.784C9.085 24.824 8.99769 24.8598 8.90879 24.8913C8.43815 25.058 7.93799 25.0574 7.3497 25.0567C7.31203 25.0567 7.27401 25.0566 7.23561 25.0566H7.11648C6.37865 25.0567 5.75011 25.0567 5.24173 24.999C4.7035 24.9379 4.189 24.8026 3.73756 24.4529C3.54543 24.304 3.37289 24.1315 3.22405 23.9393C2.87434 23.4879 2.73902 22.9734 2.67793 22.4352C2.62022 21.9268 2.62025 21.2982 2.62028 20.5604L2.62028 20.5103C2.62028 20.4727 2.62024 20.4355 2.6202 20.3987C2.61956 19.8236 2.61901 19.3349 2.778 18.8743C2.81794 18.7585 2.86521 18.6455 2.91953 18.5357C3.13575 18.099 3.48396 17.7562 3.89374 17.3527C3.91999 17.3268 3.9465 17.3007 3.97325 17.2743L16.0586 5.34806C16.5883 4.82538 17.0397 4.37981 17.4464 4.06153C17.8774 3.72417 18.3442 3.45843 18.9182 3.39398ZM19.3607 5.18274C19.2804 5.17372 19.1994 5.17372 19.1191 5.18274C19.0106 5.19492 18.8559 5.24405 18.5558 5.47896C18.2405 5.72574 17.8626 6.09679 17.2868 6.66493L16.5913 7.35131L20.5498 11.2577L21.1929 10.6231C21.7825 10.0413 22.1683 9.65859 22.4249 9.33877C22.6695 9.03387 22.7202 8.87662 22.7328 8.76687C22.7421 8.68524 22.7421 8.60282 22.7328 8.52119C22.7202 8.41144 22.6695 8.25419 22.4249 7.94929C22.1683 7.62947 21.7825 7.24678 21.1929 6.66493C20.6172 6.09679 20.2392 5.72574 19.9239 5.47896C19.6238 5.24405 19.4692 5.19492 19.3607 5.18274ZM19.2685 12.5222L15.31 8.61575L5.23757 18.5555C4.70598 19.0801 4.59764 19.2031 4.53267 19.3344C4.51227 19.3756 4.49451 19.418 4.47951 19.4615C4.43174 19.5999 4.42028 19.7634 4.42028 20.5103C4.42028 21.312 4.42164 21.8374 4.46645 22.2322C4.50917 22.6086 4.58148 22.7524 4.64703 22.837C4.70293 22.9092 4.76773 22.974 4.83989 23.0299C4.92451 23.0954 5.06834 23.1677 5.44473 23.2105C5.8395 23.2553 6.36491 23.2566 7.16661 23.2566H7.23561C7.9996 23.2566 8.16651 23.2446 8.30797 23.1945C8.34136 23.1827 8.37415 23.1693 8.40622 23.1542C8.54208 23.0905 8.66932 22.9818 9.21311 22.4452L19.2685 12.5222Z" fill="black"/>
                    </svg>
                )}
                Skeleton={(
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6636 6.21C25.0567 6.58941 25.0678 7.2157 24.6884 7.60884L11.3863 21.3921C11.1999 21.5853 10.943 21.6944 10.6745 21.6944C10.406 21.6944 10.1491 21.5853 9.96265 21.3921L3.31162 14.5005C2.9322 14.1073 2.94333 13.481 3.33647 13.1016C3.72961 12.7222 4.3559 12.7333 4.73531 13.1265L10.6745 19.2805L23.2647 6.23485C23.6441 5.84171 24.2704 5.83058 24.6636 6.21Z" fill="black"/>
                    </svg>
                )}
            />
        </button>
    )
})

const EditButtonReflect = reflect({
    view: EditButton,
    bind: {
        isEditable: viewerModel.expandModule.$isEditable,
        onClick: viewerModel.expandModule.changeEditableStatus,
    }
})

const NFTFielfReflect = reflect({
    view: ViewerNFTField,
    bind: {
        viewer: viewerModel.expandModule.$expandViewer,
        isEditable: viewerModel.expandModule.$isEditable,
        isLoading: viewerModel.expandModule.$isLoading,
        onInput: viewerModel.expandModule.expandViewerUpdated,
    }
})

const SocialsFieldReflect = reflect({
    view: ViewerSocialsField,
    bind: {
        viewer: viewerModel.expandModule.$expandViewer,
        isEditable: viewerModel.expandModule.$isEditable,
        isLoading: viewerModel.expandModule.$isLoading,
        onInput: viewerModel.expandModule.expandViewerUpdated,
    }
})