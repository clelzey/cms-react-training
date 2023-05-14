import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import classes from '../../styles/Button.module.css'

export function Button() {
    return (
        <button className={classes["button"]}><FontAwesomeIcon icon={faBoltLightning} className={classes['bolt']} /></button>
    );
}