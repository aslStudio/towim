import React from "react"

import { App } from "../../model"

import { AppCell } from "../AppCell"

import styles from './AppCellGroup.module.scss'

export type AppCellGroupProps = {
    className?: string
    group: App[]
}

export const AppCellGroup = React.memo<AppCellGroupProps>(({
    className,
    group,
}) => {
    return (
        <div className={`${styles.root} ${className}`}>
            {group[0] && (
                <>
                    <AppCell 
                        className={styles.cell} 
                        {...group[0]}
                        isNew={true}
                    />
                    <div
                        className={styles.divider} 
                    />
                </>
            )}
            {group[1] && (
                <>
                    <AppCell 
                        className={styles.cell} 
                        {...group[1]} 
                    />
                    <div
                        className={styles.divider} 
                    />
                </>
            )}
            {group[2] && (
                <>
                    <AppCell
                        className={styles.cell} 
                        {...group[2]} 
                    />
                    <div
                        className={styles.divider} 
                    />
                </>
            )}
        </div>
    )
})