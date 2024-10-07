import styles from './PerformerForm.module.scss'
import {reflect} from "@effector/reflect";
import {ExpandViewer, ViewerField, ViewerNFTField, ViewerSocialsField} from "@/entities/viewer";
import {performers} from "@/entities/performers/model";

export const PerformerForm = () => {
    return (
        <div className={styles.root}>
            <FieldReflect
                className={styles.field}
                title="About me"
                fieldName={'about'}
                icon={'about'}
            />
            <FieldReflect
                className={styles.field}
                title="Projects"
                fieldName={'projects'}
                icon={'lighting'}
            />
            <FieldReflect
                className={styles.field}
                title="Skills"
                fieldName={'skills'}
                icon={'flat-star'}
            />
            <FieldReflect
                className={styles.field}
                title="Work experience"
                fieldName={'workExperience'}
                icon={'briefcase'}
            />
            <NFTFieldReflect
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
        viewer: performers.poolModule.$active.map(state => state as unknown as ExpandViewer),
        isLoading: performers.poolModule.$isLoading,
    }
})

const NFTFieldReflect = reflect({
    view: ViewerNFTField,
    bind: {
        viewer: performers.poolModule.$active.map(state => state as unknown as ExpandViewer),
        isLoading: performers.poolModule.$isLoading,
    }
})

const SocialsFieldReflect = reflect({
    view: ViewerSocialsField,
    bind: {
        viewer: performers.poolModule.$active.map(state => state as unknown as ExpandViewer),
        isLoading: performers.poolModule.$isLoading,
    }
})