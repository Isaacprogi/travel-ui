import styles from './SideBarOptions.module.css'

interface Props {
    option: {
        id: string,
        icon: any,
        value: string
    }
}

const SideBarOptions: React.FC<Props> = ({ option }) => {
    return (
        <span className={styles.options}>
            <div id={styles.curveTop}>
            </div>
            <div id={styles.curveBottom}>
            </div>

            <div className={styles.optionIcon}>
            {<option.icon />}
            </div>
            <span>{option.value}</span>
        </span>
    )
}

export default SideBarOptions