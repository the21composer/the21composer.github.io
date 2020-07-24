import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";

export const NameTypo = withStyles({
    root:{
        fontFamily: 'Montserrat',
        fontSize: 22,
        lineHeight: 1.2,
        fontWeight: 'bold',
    }
})(Typography);

export const SubTypo = withStyles({
    root:{
        fontFamily: 'Montserrat',
        fontSize: 14,
    }
})(Typography);

export const InfoTypo = withStyles({
    root:{
        fontFamily: 'Montserrat',
        fontSize: 15,
    }
})(Typography);

export const PageTypo = withStyles({
    root:{
        paddingLeft: 20,
        paddingTop: 10,
        fontFamily: 'Montserrat',
        fontSize: 22,
    }
})(Typography);