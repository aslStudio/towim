import styles from './Performer.module.scss'
import {PerformerInfo} from "@/widgets/performers/PerformerInfo/PerformerInfo";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {performers} from "@/entities/performers/model";
import {PerformerForm} from "@/widgets/performers/PerformerForm/PerformerForm";

export const Performer = () => {
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            performers.poolModule.performerRequested(Number(params.id))
        }
    }, [params]);

    return (
        <div className={styles.root}>
            <PerformerInfo />
            <PerformerForm />
        </div>
    )
}